
import React, { useState } from 'react';
import './index.css';
import Card from './Card';
import Modal from './Modal';
import image1 from "./assets/happiness.png"
import image2 from "./assets/yoga.png"

const App = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const cards = [
    {
      id: 1,
      title: 'Happiness Program',
      description: 'The happiness program is a course designed by the Art of Living. This program will help you to find inner peace, cope with stress and anxiety, and make you calm and confident through yoga, meditation, and Sudarshan kriya. This program will guide you to achieve lifetime happiness. The training is designed for four days (two hours per day) through a virtual medium and non-virtual there are 3 types of programs as per different time schedules. 6 days are 3 hours each day, 4 days are 4 hours each day and 3 days are 4 hours each day.',
      price: 'Rs.2,000',
      category:'Aerobics',
      image:image1,
      level:'Beginner',
      
    },
    {
      id: 2,
      title: 'YOGA - Detox your body & mind',
      description: 'Yoga is a tool to deal with stress and to train the mind and body to bring emotional balance. Practicing yoga regularly will create mental clarity and calmness, reduce tension, inner awareness, and self-confidence in everyday life.',
      price: 'Rs.2,000',
      image:image2,
      category:'Yoga',
      level:'Beginner',


      
    },
    {
      id: 3,
      title: 'AEROBICS Class',
      description: 'Aerobic exercise is physical exercise of low to high intensity. It is also known as cardio. Aerobic exercise is any type of cardiovascular conditioning. It involves and requires free oxygen because the heart rate and breathing will increase during aerobic activities.',
      price: 'Rs.6,000',
      image:image2,
      category:'Dance',
      level:'Advanced',

      
      
    },
    {
      id: 4,
      title: 'ZUMBA FITNESS',
      description: 'Zumba is a form of exercise that involves dance moves to different catchy music. It is fun and people will not even realize that they are exercising. Zumba is ideal for weight loss and body toning. It also helps to de-stress. It is a very popular workout around the globe.',
      price: 'Rs.6,500',
      image:image2,
      category:'Dance',
      level:'Advanced',
      
    },
  ];

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-[6%]">
        {cards.map((card) => (
          <Card key={card.id} card={card} onClick={setSelectedCard} />
        ))}
      </div>
      <Modal card={selectedCard} onClose={() => setSelectedCard(null)} />
    </div>
  );
};

export default App;
