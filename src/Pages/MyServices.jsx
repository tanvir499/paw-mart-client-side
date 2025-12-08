import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router";
import axios from "axios";
import Swal from "sweetalert2";

const MyServices = () => {
  const [myServices, setMyServices] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`https://paw-mart-server-side-seven.vercel.app/my-services?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyServices(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user?.email]);

  // for delete service
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3b82f6",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://paw-mart-server-side-seven.vercel.app/delete/${id}`)
          .then((res) => {
            console.log(res.data);
            if (res.data.deletedCount == 1) {
              const filterData = myServices.filter(
                (service) => service?._id != id
              );
              setMyServices(filterData);

              Swal.fire({
                title: "Deleted!",
                text: "Your service has been deleted.",
                icon: "success",
                confirmButtonColor: "#3b82f6",
              });
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8">
      {/* Header Section */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent mb-2">
          My Listings
        </h2>
        <p className="text-gray-600">
          Manage all your listed services in one place
        </p>
      </div>

      {/* Services Table */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            {/* Table Header */}
            <thead className="bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500">
              <tr>
                <th className="text-left py-4 px-6 font-semibold text-white">Service Details</th>
                <th className="text-left py-4 px-6 font-semibold text-white">Description</th>
                <th className="text-left py-4 px-6 font-semibold text-white">Price</th>
                <th className="text-left py-4 px-6 font-semibold text-white">Actions</th>
              </tr>
            </thead>
            
            <tbody>
              {myServices.length === 0 ? (
                <tr>
                  <td colSpan="4" className="text-center py-12">
                    <div className="inline-block p-4 rounded-full bg-gradient-to-r from-blue-100 to-sky-100 mb-4">
                      <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">No services yet</h3>
                    <p className="text-gray-500 mb-6 max-w-md mx-auto">
                      You haven't added any services yet. Start by adding your first service!
                    </p>
                    <Link 
                      to="/add-service" 
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-medium rounded-lg hover:opacity-90 transition-all shadow-md"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                      </svg>
                      Add Your First Service
                    </Link>
                  </td>
                </tr>
              ) : (
                myServices.map((service, index) => (
                  <tr 
                    key={service?._id} 
                    className={`border-b border-gray-100 hover:bg-blue-50 transition-colors ${
                      index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                    }`}
                  >
                    {/* Service Details */}
                    <td className="py-5 px-6">
                      <div className="flex items-center space-x-4">
                        <div className="h-14 w-14 flex-shrink-0 rounded-xl overflow-hidden border-2 border-blue-100 shadow-sm">
                          <img 
                            src={service?.imageUrl} 
                            alt={service?.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800">{service?.name}</h4>
                          <div className="flex items-center mt-1 space-x-2">
                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                              {service?.category || "General"}
                            </span>
                            <span className="text-xs text-gray-500">
                              <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                              </svg>
                              {service?.location || "N/A"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Description */}
                    <td className="py-5 px-6">
                      <p className="text-gray-600 max-w-xs leading-relaxed">
                        {service?.description?.length > 100 
                          ? `${service?.description?.substring(0, 100)}...` 
                          : service?.description || "No description provided"}
                      </p>
                      {service?.date && (
                        <div className="hidden sm:flex items-center mt-2 text-sm text-gray-500">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                          </svg>
                          {service.date}
                        </div>
                      )}
                    </td>

                    {/* Price */}
                    <td className="py-5 px-6">
                      <div className="flex items-center">
                        <span className="text-2xl font-bold bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent">
                          ${service?.price}
                        </span>
                      </div>
                    </td>

                    {/* Actions */}
                    <td className="py-5 px-6">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleDelete(service?._id)}
                          className="px-4 py-2 rounded-lg bg-gradient-to-r from-red-500 to-red-600 text-white hover:shadow-lg transition-all flex items-center text-sm"
                        >
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                          </svg>
                          Delete
                        </button>
                        
                        <Link to={`/Update-services/${service?._id}`}>
                          <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 text-white hover:shadow-lg transition-all flex items-center text-sm">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                            </svg>
                            Edit
                          </button>
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Footer with total value */}
        {myServices.length > 0 && (
          <div className="px-6 py-4 bg-gradient-to-r from-sky-50 to-blue-50 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <div className="text-gray-600">
                Showing <span className="font-semibold">{myServices.length}</span> service{myServices.length !== 1 ? 's' : ''}
              </div>
              <div className="text-gray-700">
                Total Value: <span className="font-bold text-blue-600">
                  ${myServices.reduce((sum, service) => sum + (parseFloat(service?.price) || 0), 0).toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyServices;