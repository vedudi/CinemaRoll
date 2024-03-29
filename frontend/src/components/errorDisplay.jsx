import React from 'react';
import { IoIosWarning } from 'react-icons/io';

const ErrorDisplay = ({ message }) => {
  return (
    <div className="shadow shadow-black rounded-md p-10">
      <h3 className="flex gap-4 items-center text-red-400 font-bold text-xl">
        <IoIosWarning /> upps!!! sorry something is wrong!
      </h3>

      <p className="mt-8 font-semibold text-lg">{message}</p>
    </div>
  );
};

export default ErrorDisplay;