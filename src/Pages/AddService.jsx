import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const AddService = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const category = form.category.value;
    const price = parseInt(form.price.value);
    const location = form.location.value;
    const description = form.description.value;
    const imageUrl = form.imageUrl.value;
    const date = form.date.value;
    const email = form.email.value;

    const formData = {
      name,
      category,
      price,
      location,
      description,
      imageUrl,
      date,
      email,
    };

    axios
      .post("https://paw-mart-server-side-seven.vercel.app/services", formData)
      .then((res) => {
        if (res.data.acknowledged) {
          Swal.fire({
            title: "Service Added Successfully",
            icon: "success",
            draggable: true,
          });
          form.reset();
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        }
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      {/* Outer Gradient Border */}
      <div className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 p-[2px] rounded-2xl shadow-lg">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl p-6 space-y-4"
        >
          <h2 className="text-2xl font-bold text-center 
            bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 
            bg-clip-text text-transparent">
            Add Product / Pet
          </h2>

          {/* Product / Pet Name */}
          <div>
            <label className="font-medium text-sm">Product / Pet Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              className="w-full mt-1 p-2.5 rounded-lg border border-gray-300 
              focus:ring-2 focus:ring-blue-400 focus:outline-none text-sm"
            />
          </div>

          {/* Category */}
          <div>
            <label className="font-medium text-sm">Category</label>
            <select
              name="category"
              required
              className="w-full mt-1 p-2.5 rounded-lg border border-gray-300 
              focus:ring-2 focus:ring-blue-400 focus:outline-none text-sm"
            >
              <option value="Pets">Pets</option>
              <option value="Food">Food</option>
              <option value="Accessories">Accessories</option>
              <option value="Care Products">Care Products</option>
            </select>
          </div>

          {/* Price */}
          <div>
            <label className="font-medium text-sm">Price</label>
            <input
              type="number"
              name="price"
              placeholder="0.00"
              className="w-full mt-1 p-2.5 rounded-lg border border-gray-300 
              focus:ring-2 focus:ring-blue-400 focus:outline-none text-sm"
            />
          </div>

          {/* Location */}
          <div>
            <label className="font-medium text-sm">Location</label>
            <input
              type="text"
              name="location"
              placeholder="City or area"
              className="w-full mt-1 p-2.5 rounded-lg border border-gray-300 
              focus:ring-2 focus:ring-blue-400 focus:outline-none text-sm"
            />
          </div>

          {/* Description */}
          <div>
            <label className="font-medium text-sm">Description</label>
            <textarea
              rows="3"
              name="description"
              placeholder="Write details..."
              className="w-full mt-1 p-2.5 rounded-lg border border-gray-300 
              focus:ring-2 focus:ring-blue-400 focus:outline-none text-sm"
            ></textarea>
          </div>

          {/* Image URL */}
          <div>
            <label className="font-medium text-sm">Image URL</label>
            <input
              type="url"
              name="imageUrl"
              placeholder="https://example.com/image.jpg"
              className="w-full mt-1 p-2.5 rounded-lg border border-gray-300 
              focus:ring-2 focus:ring-blue-400 focus:outline-none text-sm"
            />
          </div>

          {/* Date */}
          <div>
            <label className="font-medium text-sm">Pick Up Date</label>
            <input
              type="date"
              name="date"
              className="w-full mt-1 p-2.5 rounded-lg border border-gray-300 
              focus:ring-2 focus:ring-blue-400 focus:outline-none text-sm"
            />
          </div>

          {/* Email */}
          <div>
            <label className="font-medium text-sm">Email (current user)</label>
            <input
              value={user?.email}
              type="email"
              name="email"
              readOnly
              placeholder="user@example.com"
              className="w-full mt-1 p-2.5 rounded-lg border bg-gray-100 
              cursor-not-allowed text-sm"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2.5 rounded-lg text-white font-semibold 
            bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 
            hover:opacity-90 transition text-sm shadow-md">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddService;
