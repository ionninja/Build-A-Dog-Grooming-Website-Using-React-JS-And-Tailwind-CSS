import React from 'react';

import DogImg from '../assets/img/dogs/dog-contact.png'
const Contact = () => {
  return <section className=' bg-yellow-secondary pt-6'>
    <div className="container mx-auto">
      <div className='flex flex-col lg:flex-row justify-around'>
        {/* image  */}
        <div className=' order-1 lg:-order-1 lg:mt-16'>
          <img className='-mt-[12px]' src={DogImg} alt="" />
        </div>
        {/* text  */}
        <div className=' flex flex-col items-center justify-center
         '>
          <div className=' text-orange font-semibold mb-3'>Contact</div>
          <div className=' text-4xl text-blue font-extrabold'>+880 17314 58068</div>
          <div className=' mb-7 text-blue'>Opening Hours: Mon - Sun: 10am - 6pm</div>
          <button className='btn'>Get an appointment</button>
        </div>
      </div>
    </div>
  </section>;
};

export default Contact;
