// Modal.js
import React from 'react';

const Modal = ({ closeModal, children }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg w-96">
        <div className="p-4">{children}</div>
        <div className="p-4 flex justify-end">
          <button onClick={closeModal} className="bg-gray-600 text-white px-4 py-2 rounded-lg">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
