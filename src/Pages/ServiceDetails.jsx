import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import { CircleUserRound } from 'lucide-react';
import { MapPin, Tag, User, Mail, Star, DollarSign, Calendar } from 'lucide-react'; // Import icons

const ServiceDetails = () => {
    const [service, setService] = useState(null); // Initialize as null for clearer check
    const { myId } = useParams();
    const [loading, setLoading] = useState(true);
    const { user } = useContext(AuthContext);

    // Define the common theme gradient class
    const THEME_GRADIENT_BG = "bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600";
    const THEME_TEXT_GRADIENT = "bg-clip-text text-transparent bg-gradient-to-r from-sky-600 via-blue-700 to-indigo-800";


    useEffect(() => {
        // Fetch Service Details
        fetch(`http://localhost:3000/services/${myId}`)
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch service data");
                return res.json();
            })
            .then((data) => {
                setService(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Fetch Error:", err);
                setLoading(false);
            });
    }, [myId]);

    const handleOrder = (e) => {
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
            price,
            address,
            phone,
            note,
            date: new Date(),
        };

        axios
            .post("http://localhost:3000/orders", formData)
            .then((res) => {
                console.log(res);
                toast.success("Ordered successfully!", {
                    autoClose: 2000,
                    pauseOnHover: false,
                });
                document.getElementById("my_modal_3").close(); // Close modal on success
                form.reset();
            })
            .catch((err) => {
                console.error(err);
                toast.error("Order failed. Please try again.");
            });
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <span className="loading loading-spinner loading-lg text-indigo-500"></span>
                <p className="ml-2 text-lg font-medium text-indigo-500">Loading Service Details...</p>
            </div>
        );
    }
    
    // Check if service data exists before rendering
    if (!service) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <p className="text-xl text-red-500">Service not found.</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex justify-center items-center p-4 sm:p-6 md:p-10 bg-gray-50">
            <div className="max-w-6xl w-full bg-white shadow-2xl rounded-2xl p-6 md:p-10 flex flex-col lg:flex-row gap-8 lg:gap-12">
                
                {/* Left — Image */}
                <div className="lg:w-1/2">
                    <img
                        src={service?.imageUrl}
                        alt={service?.name}
                        className="w-full h-auto max-h-[400px] object-cover rounded-xl shadow-xl transition-transform duration-300 hover:scale-[1.01]"
                    />
                </div>

                {/* Right — Details + Order/Booking */}
                <div className="lg:w-1/2 space-y-6">
                   
                    {/* Key Attributes */}
                    <div className=" gap-2 text-sm md:text-base">
                         <p className="flex mb-3 items-center gap-2 text-gray-600">
                            <CircleUserRound />
                            <span className="font-semibold">Name:</span> {service?.name}
                        </p>
                         <p className="flex mb-3 items-center gap-2 text-gray-600">
                            <DollarSign color="#0a69e6" />
                            <span className="font-semibold">Price:</span> {service?.price}
                        </p>
                        <p className="flex mb-3 items-center gap-2 text-gray-600">
                            <Tag className="w-5 h-5 text-sky-500" />
                            <span className="font-semibold">Category:</span> {service?.category}
                        </p>
                        
                        <p className="flex mb-3 items-center gap-2 text-gray-600">
                            <MapPin className="w-5 h-5 text-red-500" />
                            <span className="font-semibold">Location:</span> {service?.location}
                        </p>
                         <p className="flex mb-3 items-center gap-2 text-gray-600">
                            <Mail className="w-5 h-5 text-blue-500" />
                            <span className="font-semibold">Email:</span> {service?.email}
                        </p>
                    </div>
                  

                    {/* Description */}
                    <div className="pt-4">
                        <h3 className="text-xl font-semibold mb-2 text-gray-700">Description</h3>
                        <p className="text-gray-700 leading-relaxed italic">{service?.description}</p>
                    </div>
                    
                    {/* Action Button */}
                    <button
                        className={`w-full py-3 mt-6 rounded-lg text-white font-bold text-lg 
                                   ${THEME_GRADIENT_BG} hover:opacity-90 transition-opacity shadow-md shadow-blue-400/50`}
                        onClick={() => document.getElementById("my_modal_3").showModal()}
                        aria-label={`Order ${service?.name}`}
                    >
                        Adapt/Order Service
                    </button>
                    
                   

                </div>

                {/* --- Modal with Order Form (Kept existing form design) --- */}
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box p-0 max-w-lg"> {/* Reduced max-width for cleaner modal */}
                        <form method="dialog" className="p-0">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 z-10 text-xl">✕</button>
                        </form>
                        
                        {/* Order Form Content (Kept the previously designed form structure) */}
                        <form 
                            onSubmit={handleOrder}
                            className="bg-white p-6 md:p-8 rounded-xl space-y-4"
                        >
                            <h3 className="text-2xl font-bold pb-2 border-b border-gray-200 bg-clip-text text-transparent bg-gradient-to-r from-sky-600 via-blue-700 to-indigo-800">
                                 Complete Order
                            </h3>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
                                    <input readOnly defaultValue={service?.name} type="text" name="productName" 
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-500 cursor-not-allowed focus:outline-none" 
                                        placeholder="Product Name" 
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Buyer Name</label>
                                    <input defaultValue={user?.displayName} type="text" name="buyerName" 
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500" 
                                        placeholder="Your Name" required 
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Buyer Email</label>
                                    <input readOnly defaultValue={user?.email} type="email" name="buyerEmail" 
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-500 cursor-not-allowed focus:outline-none" 
                                        placeholder="Email" 
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
                                    <input required type="number" name="quantity" min="1" 
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                                        placeholder="Quantity" 
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Price (Per Unit)</label>
                                    <input readOnly defaultValue={service?.price} type="number" name="price" 
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-green-600 font-semibold cursor-not-allowed focus:outline-none" 
                                        placeholder="Price" 
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                                    <input type="number" name="phone" 
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" 
                                        placeholder="Phone Number" required
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Address</label>
                                <input type="text" name="address" 
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500" 
                                    placeholder="Street Address, City, Postal Code" required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Additional Note (Optional)</label>
                                <textarea name="note" rows="3" 
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                                    placeholder="e.g., Specific delivery instructions, preferred time, etc."
                                />
                            </div>
                            
                            <button type="submit" 
                                className={`w-full py-3 mt-6 rounded-lg text-white font-bold text-lg 
                                            ${THEME_GRADIENT_BG} hover:opacity-90 transition-opacity shadow-md shadow-blue-400/50`}
                            >
                                Place Order
                            </button>
                        </form>
                    </div>
                </dialog>

            </div>
        </div>
    );
};

export default ServiceDetails;