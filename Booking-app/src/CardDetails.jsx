/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Nav from './Nav';
import { useNavigate } from 'react-router-dom';

const CardDetails = () => {
  const [isOpen, setIsOpen] = useState(false);
  const usenav = useNavigate()

  // Function to open the modal
  const openModal = () => {
    setIsOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsOpen(false);
  };

  const click = () => {
    usenav('/')
  }

  return (
    <div>

      <Nav />


      <div className="container mx-auto p-4 w-[50%]">
        <button onClick={click} className='bg-yellow-300 m-2 p-2 rounded-lg'>Go Back</button>
        {/* Main Image Gallery */}
        <div className="grid md:grid-cols-3 gap-2">
          <img
            src="https://picsum.photos/600/600"
            alt="Hotel Image"
            className="w-full h-32 object-cover rounded-lg cursor-pointer"
            onClick={openModal}
          />
          <img
            src="https://picsum.photos/500/500"
            alt="Hotel Image"
            className="w-full  md:h-64 h-32 object-cover rounded-lg cursor-pointer md:col-span-2 md:row-span-2"
            onClick={openModal}
          />
          <img
            src="https://picsum.photos/400/400"
            alt="Hotel Image"
            className="w-full h-32 object-cover rounded-lg cursor-pointer"
            onClick={openModal}
          />
          <img
            src="https://picsum.photos/420/421"
            alt="Hotel Image"
            className="w-full h-40 object-cover rounded-lg cursor-pointer"
            onClick={openModal}
          />
          <img
            src="https://picsum.photos/400/408"
            alt="Hotel Image"
            className="w-full h-40 object-cover rounded-lg cursor-pointer"
            onClick={openModal}
          />
          <img
            src="https://picsum.photos/406/450"
            alt="Hotel Image"
            className="w-full h-40 object-cover rounded-lg cursor-pointer"
            onClick={openModal}
          />


        </div>

        {/* Modal (Visible based on state) */}
        {isOpen && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-4 rounded-lg max-w-4xl w-full relative">
              {/* Close Button */}
              <button
                className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
                onClick={closeModal}
              >
                ✖
              </button>

              {/* Image Thumbnails */}
              <div className="grid h-full w-full md:w-full md:h-full grid-cols-2 md:grid-cols-3 gap-2 mt-4">
                <div>
                  <img
                    className="w-full md:h-48 object-cover rounded-lg"
                    src="https://picsum.photos/300/200"
                    alt="Hotel Image 1"
                  />
                </div>
                <div>
                  <img
                    className="w-full md:h-48 object-cover rounded-lg"
                    src="https://picsum.photos/301/201"
                    alt="Hotel Image 2"
                  />
                </div>
                <div>
                  <img
                    className="w-full md:h-48 object-cover rounded-lg"
                    src="https://picsum.photos/302/202"
                    alt="Hotel Image 3"
                  />
                </div>
                <div>
                  <img
                    className="w-full md:h-48 object-cover rounded-lg"
                    src="https://picsum.photos/303/203"
                    alt="Hotel Image 4"
                  />
                </div>
                <div>
                  <img
                    className="w-full md:h-48 object-cover rounded-lg"
                    src="https://picsum.photos/304/204"
                    alt="Hotel Image 5"
                  />
                </div>
                <div>
                  <img
                    className="w-full md:h-48 object-cover rounded-lg"
                    src="https://picsum.photos/305/205"
                    alt="Hotel Image 6"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardDetails;
