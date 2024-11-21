import {createPortal} from "react-dom";

function Modal({ isOpen, onClose, message } : ModalProps) {
  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative bg-white rounded-lg shadow-lg p-6 max-w-md w-full text-center">
        <p className="mb-4">{message}</p>
        <button onClick={onClose} className="px-4 py-2 bg-blue-500 rounded-full hover:bg-blue-600 absolute -top-5 -right-5 text-white">&times;</button>
      </div>
    </div>,
    document.body
  );
}

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    message: string;
}

export default Modal;
