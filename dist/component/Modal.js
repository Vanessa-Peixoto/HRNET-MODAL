import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createPortal } from "react-dom";
function Modal({ isOpen, onClose, message }) {
    if (!isOpen) {
        return null;
    }
    return createPortal(_jsx("div", { className: "fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50", children: _jsxs("div", { className: "relative bg-white rounded-lg shadow-lg p-6 max-w-md w-full text-center", children: [_jsx("p", { className: "mb-4", children: message }), _jsx("button", { onClick: onClose, className: "px-4 py-2 bg-blue-500 rounded-full hover:bg-blue-600 absolute -top-5 -right-5 text-white", children: "\u00D7" })] }) }), document.body);
}
export default Modal;
