// components/Popup.tsx
import React from 'react';

interface PopupProps {
  show: boolean;
  onClose: () => void;
  onPlay: () => void;
}

const Popup: React.FC<PopupProps> = ({ show, onClose, onPlay }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-black p-6 rounded shadow-lg text-center">
        <h2 className="text-xl font-semibold mb-4 text-white">Do you want to play sound?</h2>
        <div className="flex flex-row items-center gap-6">
            <button
            onClick={onPlay}
            className="mt-4 px-4 py-2 bg-green-500 rounded-lg text-white hover:bg-green-700 w-28"
            >
                Play
            </button>
            <button
            onClick={onClose}
            className=" mt-4 px-4 py-2 bg-green-500 rounded-lg text-white hover:bg-green-700 w-28"
            >
            Cancel
            </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
