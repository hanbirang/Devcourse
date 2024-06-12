import { ToastItem } from "@/store/toastStore";
import { FaBan, FaInfoCircle, FaPlus } from "react-icons/fa";
import { styled } from "styled-components";

function Toast({ id, message, type }: ToastItem) {
    const handleRemoveToast = () => {

    };

    return (
        <ToastStyle>
            <p>
                {type === "info" && <FaInfoCircle />}
                {type === "error" && <FaBan />}
                {message}
            </p>
            <button onClick={handleRemoveToast}>
                <FaPlus />
            </button>
        </ToastStyle>
    );
}

const ToastStyle = styled.div``;

export default Toast;
