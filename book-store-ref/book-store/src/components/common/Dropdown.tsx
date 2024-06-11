import { useState } from "react";
import { styled } from "styled-components";

interface Props {
    children: React.ReactNode;
    toggleButton: React.ReactNode;
    isOpen?: boolean;
}

function Dropdown({ children, toggleButton, isOpen = false }: Props) {
    const [open, setOpen] = useState(isOpen);

    return (
        <DropdownStyle $open={open}>
            <button className="toggle" onClick={() => setOpen(!open)}>
                {toggleButton}
            </button>
            {open && <div className="panel">{children}</div>}
        </DropdownStyle>
    );
}

interface DropDownStyleProps {
    $open: boolean;
}

const DropdownStyle = styled.div<DropDownStyleProps>`
    position: relative;

    button {
        background: none;
        border: none;
        cursor: pointer;
        outline: none;

        svg {
            width: 30px;
            height: 30px;
            fill: ${({ theme, $open }) => $open ? theme.color.primary : theme.color.text};
        }
    }

    .panel {
        position: absolute;
        top: 60px;
        right: 0;
        padding: 16px;
        background: #fff;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        border-radius: ${({theme}) => theme.borderRadius.default};
        z-index: 10;
    }
`;

export default Dropdown;
