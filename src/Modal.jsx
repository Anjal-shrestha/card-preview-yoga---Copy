import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTimes, faUserCircle, faSignal } from '@fortawesome/free-solid-svg-icons';


const Modal = ({ card, onClose }) => {
  if (!card) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleBackdropClick}
    >
      <div className="relative bg-white rounded-lg shadow-lg max-w-4xl w-full max-h-[90%] overflow-y-auto p-6">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl focus:outline-none"
          onClick={onClose}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>

        <div className="flex flex-col mb-4">
          <div className="flex items-center mb-3 w-full">
            <FontAwesomeIcon
              icon={faUserCircle}
              className="text-yellow-500 w-8 h-8 border-2 border-yellow-300 rounded-full shadow-sm"
            />
            <div className="flex text-gray-800 ml-4">
              <p className="font-medium">Ram Pandey</p>
            </div>
            <div className="w-full text-center">
              <h2 className="text-3xl font-bold text-yellow-600">
                {card.title}
              </h2>
            </div>
          </div>
          <div className="w-full mt-4">
            <hr className="border-gray-300 w-full" />
          </div>
          <div className="text-center">
            <p className="text-gray-600 mt-2 text-left">{card.description}</p>
          </div>
        </div>

        <div className="mt-6 w-full flex flex-col md:flex-row md:justify-between">
          <div className="flex flex-col md:items-start">
            <div className="flex items-center text-green-600 mt-4 md:mt-0">
              <FontAwesomeIcon icon={faSignal} className="text-sm" />
              <span className="ml-2">{card.level}</span>
            </div>
            <button className="flex items-center text-gray-500 hover:text-red-500 transition duration-300 mt-4">
              <FontAwesomeIcon icon={faHeart} className="w-6 h-6 mr-2" />
              Add to Wishlist
            </button>
            
          </div>
          
          <div className="flex flex-col items-center mt-4 md:mt-0">
            <button className="bg-yellow-500 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-yellow-600 transition duration-300 mb-4 md:mb-0">
              Preview This Course
            </button>
            <div className="text-xl font-bold text-gray-700 text-center py-2">
              {card.price}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
