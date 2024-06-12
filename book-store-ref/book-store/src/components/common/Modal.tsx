import { FaPlus } from "react-icons/fa";
import { styled } from "styled-components";

interface Props {
    children: React.ReactNode;
}
function Modal({ children }: Props) {
    return (
        <ModalStyle>
            <div className="modal-body">
                <div className="modal-contents">{children}</div>
                <button className="modal-close">
                    <FaPlus />
                </button>
            </div>
        </ModalStyle>
    );
}

const ModalStyle = styled.div``;

export default Modal;
