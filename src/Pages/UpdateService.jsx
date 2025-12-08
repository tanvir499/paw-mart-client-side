import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate, useParams } from 'react-router';
import axios from 'axios';


const UpdateService = () => {

    const {user} = useContext(AuthContext);
    const {id} = useParams();
    const [service, setService] = useState();
    const [category, setCategory] = useState(service?.category);
    const navigation = useNavigate();

    useEffect(()=>{
       axios.get(`https://paw-mart-server-side-seven.vercel.app/services/${id}`)
       .then(res=>{
          setService(res.data);
          setCategory(res.data.category);
       })
      
    },[id])

    console.log(service);
    

    const handleUpdate =(e) =>{
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
          createdAt: service?.createdAt
        }
        console.log(formData);

        axios.put(`https://paw-mart-server-side-seven.vercel.app/update/${id}`, formData)
        .then(res=>{
          console.log(res.data);
          navigation('/my-services');
        })
        .catch(err=>{
          console.log(err);
        })

    }
    return (
        <div className="max-w-xl mx-auto p-4">
      <div className=" bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 p-[2px] rounded-2xl shadow-lg">
        <form onSubmit={handleUpdate} className="bg-white rounded-2xl p-6 space-y-4">
          <h2 className="text-2xl font-bold text-center bg-clip-text text-transparent  bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500">
           Update Listing 
          </h2>

          {/* Product / Pet Name */}
          <div>
            <label className="font-medium text-sm">Update Product / Pet</label>
            <input
              defaultValue={service?.name}
              type="text"
              name="name"
              placeholder="Enter name"
              className="w-full mt-1 p-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-600 focus:outline-none text-sm"
            />
          </div>

          {/* Category */}
          <div>
            <label className="font-medium text-sm">Category</label>
            <select value={category} onChange={(e)=>setCategory(e.target.value)}  name="category" required className="w-full mt-1 p-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-600 focus:outline-none text-sm">
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
              defaultValue={service?.price}
              type="number"
              name="price"
              placeholder="0.00"
              className="w-full mt-1 p-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-600 focus:outline-none text-sm"
            />
          </div>

          {/* Location */}
          <div>
            <label className="font-medium text-sm">Location</label>
            <input
              defaultValue={service?.location}
              type="text"
              name="location"
              placeholder="City or area"
              className="w-full mt-1 p-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-600 focus:outline-none text-sm"
            />
          </div>

          {/* Description */}
          <div>
            <label className="font-medium text-sm">Description</label>
            <textarea
              rows="3"
              defaultValue={service?.description}
              name="description"
              placeholder="Write details..."
              className="w-full mt-1 p-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-600 focus:outline-none text-sm"
            ></textarea>
          </div>

          {/* Image URL */}
          <div>
            <label className="font-medium text-sm">Image URL</label>
            <input
              defaultValue={service?.imageUrl}
              type="url"
              name="imageUrl"
              placeholder="https://example.com/image.jpg"
              className="w-full mt-1 p-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-600 focus:outline-none text-sm"
            />
          </div>

          {/* Date */}
          <div>
            <label className="font-medium text-sm">Pick Up Date</label>
            <input
              defaultValue={service?.date}
              type="date"
              name="date"
              className="w-full mt-1 p-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-600 focus:outline-none text-sm"
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
              className="w-full mt-1 p-2.5 rounded-lg border bg-gray-100 cursor-not-allowed text-sm"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2.5 rounded-lg text-white font-semibold  bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 hover:opacity-90 transition text-sm"
          >
           Update
          </button>
        </form>
      </div>
    </div>
    );
};

export default UpdateService;