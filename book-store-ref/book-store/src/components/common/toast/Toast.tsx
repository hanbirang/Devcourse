import useToastStore, { ToastItem } from "@/store/toastStore";
import { useEffect } from "react";
import { FaBan, FaInfoCircle, FaPlus } from "react-icons/fa";
import { styled } from "styled-components";

export const TOAST_REMOVE_DELAY = 3000; /// 3초

function Toast({ id, message, type }: ToastItem) {
    const removeToast = useToastStore((state) => state.removeToast);
    const handleRemoveToast = () => {};

    useEffect(() => {
        const timer = setTimeout(() => {
            // 삭제
            removeToast(id);
        }, TOAST_REMOVE_DELAY);

        return () => clearTimeout(timer);
    }, []);

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

const ToastStyle = styled.div`
    background-color: ${({ theme }) => theme.color.background};
    padding: 12px;
    border-radius: ${({ theme }) => theme.borderRadius.default};

    display: flex;
    justify-content: space-between;
    align-items: start;
    gap: 24px;

    p {
        color: ${({ theme }) => theme.color.text};
        line-height: 1;
        margin: 0;
        flex: 1;

        display: flex;
        align-items: end;
        gap: 4px;
    }

    button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        padding: 0;
        margin: 0;

        svg {
            transform: rotate(45deg);
        }
    }
`;

export default Toast;
