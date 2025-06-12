import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from '@fortawesome/free-regular-svg-icons';

const Card = ({ card, onClick }) => {
  return (
    <div
      className="border overflow-hidden shadow-lg cursor-pointer transition transform hover:scale-105"
      onClick={() => onClick(card)}
    >
      <img
        src={card.image}
        alt={card.title}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <p className="text-sm text-gray-500">{card.category}</p>
        <h3 className="my-4 font-bold">{card.title}</h3>
        <hr />
        <div className="mt-4 flex justify-between items-center text-gray-600">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faClock} className="w-6 h-6 mr-2" />
            <span>2 hours a day</span>
          </div>
          <div className="text-gray-700 font-semibold">
            {card.price}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
  