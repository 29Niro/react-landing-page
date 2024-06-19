import React from 'react';
import { Link } from 'react-router-dom';

function Modal({ isOpen, onClose, title, description, path }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg w-11/12 md:w-1/2 p-4">
        <div className="flex justify-between items-center border-b pb-2">
          <h2 className="text-2xl font-bold">{title}</h2>
          <button onClick={onClose} className="text-black font-bold">
            &times;
          </button>
        </div>
        <div className="mt-4">
          <p>{description}</p>
        </div>
        <div className="mt-4 flex justify-end">
          <Link to={path}>
            <button
              onClick={() => {}}
              className="bg-blue-800 text-white font-bold py-2 px-4 rounded hover:bg-blue-500"
            >
              Start
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Modal;
