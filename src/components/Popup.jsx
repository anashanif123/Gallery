import React from 'react';

const Popup = ({ isOpen, onClose, image }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center ">
      <div className="bg-white p-3 rounded ">
        <img src={image} alt="Product Image" />
        <button 
  onClick={onClose} 
  style={{
    backgroundColor: '#ff4d4d',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    
  }}
  onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#ff1a1a'}
  onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#ff4d4d'}
>
  Close
</button>
      </div>
    </div>
  );
};

export default Popup;