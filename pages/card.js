import Image from 'next/image';
import React from "react";

const Card = ({ doctor }) => {
  return (
    <div className="bg-white rounded shadow p-4 flex flex-col items-center text-center">
      <Image
        src="/doctor.jpg"
        alt={doctor.name}
        width={96}
        height={96}
        className="rounded-full mb-4"
      />
      <h3 className="text-lg font-semibold">{doctor.name}</h3>
      <p className="text-sm text-gray-500">{doctor.specialization}</p>
      <p className="text-sm">{doctor.experience} years experience</p>
      <p className="text-sm font-semibold text-green-700">{doctor.availability}</p>
      <p className="text-sm">₹{doctor.fees} fees</p>
      <button className="mt-2 bg-blue-500 text-white px-4 py-1 rounded">Book Now</button>
    </div>
  );
};

export default Card;

