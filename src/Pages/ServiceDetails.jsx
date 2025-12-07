import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";

const ServiceDetails = () => {
  const [service, setService] = useState([]);

  const { myId } = useParams();
  console.log(myId);

  const [loading, setLoading] = useState(true);

  const {user} = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:3000/services/${myId}`)
      .then((res) => res.json())
      .then((data) => {
        setService(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [myId]);

  const handleOrder = (e) =>{
    e.preventDefault();
    const form = e.target;
    const productName = form.productName.value;
    const buyerName = form.buyerName.value;
    const buyerEmail = form.buyerEmail.value;
    const quantity = parseInt(form.quantity.value);
    const price = parseFloat(form.price.value);
    const address = form.address.value;
    const phone = form.phone.value;
    const note = form.note.value;

    const formData = {
      productId: myId,
       productName,
       buyerName,
       buyerEmail,
       quantity,
       price ,
       address,
       phone,
       note,
       date: new Date()
    }

    axios.post('http://localhost:3000/orders ', formData)
    .then(res=>{
       console.log(res);
    })
    .catch(err=>{
      console.log(err);
    })

    toast.success("Ordered successfully!", {
      autoClose: 2000,
      pauseOnHover: false,
    });
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        Loading...
      </div>
    );
  }

  const findResult = service;
  console.log(findResult);

  return (
    <div className="min-h-screen flex justify-center items-center p-6">
      <div className="max-w-6xl w-full bg-white shadow-2xl rounded-2xl p-10 flex flex-col lg:flex-row gap-10">
        {/* Left — Image */}
        <div className="lg:w-1/2">
          <img
            src={service?.imageUrl}
            alt={service?.name}
            className="w-full rounded-xl shadow-md"
          />
        </div>

        {/* Right — Details + Form */}
        <div className="lg:w-1/2 space-y-4">
          <h1 className="text-4xl font-bold mb-4">{service?.name}</h1>

          <p>
            <span className="font-semibold">Category:</span> {service?.category}
          </p>
          <p>
            <span className="font-semibold">Provider:</span> {service?.provider}
          </p>
          <p>
            <span className="font-semibold">Email:</span> {service?.email}
          </p>

          <p className="flex items-center gap-2">
            <span className="font-semibold">Rating:</span> ⭐ {service?.rating}
          </p>

          <p>
            <span className="font-semibold">Slots Available:</span>{" "}
            {service?.slots}
          </p>

          <p className="text-gray-700">{service?.description}</p>

          <p className="text-lg font-bold">Price: ${service?.price}</p>

          {/* You can open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            Adapt/Order
          </button>
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              {/* form content */}
              <form onSubmit={handleOrder} className="fieldset bg-base-200 border-base-300 rounded-box w-x border p-4">
                <legend className="fieldset-legend">Order details</legend>

                <label className="label">Product Name</label>
                <input readOnly defaultValue={service?.name} type="text" name="productName" className="input" placeholder="Name" />

                <label className="label">Buyer Name</label>
                <input defaultValue={user?.displayName} type="text" name="buyerName" className="input" placeholder="Name" />

                <label className="label">Buyer Email</label>
                <input readOnly defaultValue={user?.email} type="email" name="buyerEmail" className="input" placeholder="Email" />

                <label className="label">Quantity</label>
                <input required type="number" name="quantity" className="input" placeholder="Quantity" />

                <label className="label">Price</label>
                <input readOnly defaultValue={service?.price} type="number" name="price" className="input" placeholder="Price" />

                <label className="label">Address</label>
                <input type="text" name="address" className="input" placeholder="Address" />

                <label className="label">Phone</label>
                <input type="number" name="phone" className="input" placeholder="Phone" />

                <label className="label">Additional Note</label>
                <textarea
                  type="text"
                  name="note"
                  className="input"
                  placeholder="Additional Note"
                />

                <button type="submit" className="btn btn-primary">
                  Order
                </button>
              </form>
            </div>
          </dialog>

          {/* Booking Form */}
          <div className="mt-6 pt-6 border-t">
            <h2 className="text-3xl font-bold text-center mb-5">
              Book Session
            </h2>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                toast.success("Booked successfully!", {
                  autoClose: 2000,
                  pauseOnHover: false,
                });
                e.target.reset();
              }}
              className="space-y-4"
            >
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-indigo-400 outline-none"
                required
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-indigo-400 outline-none"
                required
              />

              <button
                type="submit"
                className="w-full py-3 font-semibold text-white rounded-lg bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 hover:from-purple-600 hover:to-indigo-600 transition-all duration-300 shadow-md hover:shadow-xl"
              >
                Book Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
