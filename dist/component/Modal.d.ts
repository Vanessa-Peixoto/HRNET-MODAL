declare function Modal({ isOpen, onClose, message }: ModalProps): import("react").ReactPortal | null;
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    message: string;
}
export default Modal;
