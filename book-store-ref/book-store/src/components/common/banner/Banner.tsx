import { Banner as IBanner } from "@/models/banner.model";
import { styled } from "styled-components";
import BannerItem from "./BannerItem";
import { useMemo, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

interface Props {
    banners: IBanner[];
}

function Banner({ banners }: Props) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const transFormValue = useMemo(() => {
        return currentIndex * -100;
    }, [currentIndex]);

    const handlePrev = () => {
        if (currentIndex === 0) return;
        setCurrentIndex(currentIndex - 1);
    };
    const handleNext = () => {
        if (currentIndex === banners.length - 1) return;
        setCurrentIndex(currentIndex + 1);
    };

    return (
        <BannerStyle>
            {/* 베너 그룹 */}
            <BannerContainerStyle $transFormValue={transFormValue}>
                {banners.map((item, index) => (
                    <BannerItem banner={item} />
                ))}
            </BannerContainerStyle>

            {/* 버튼 */}
            <BannerButtonStyle>
                <button className="prev" onClick={handlePrev}>
                    <FaAngleLeft />
                </button>
                <button className="next" onClick={handleNext}>
                    <FaAngleRight />
                </button>
            </BannerButtonStyle>

            {/* 인디케이터 */}
        </BannerStyle>
    );
}

const BannerStyle = styled.div`
    overflow: hidden;
    position: relative;
`;

interface BannerContainerStyleProps {
    $transFormValue: number;
}

const BannerContainerStyle = styled.div<BannerContainerStyleProps>`
    display: flex;
    transform: translateX(${(props) => props.$transFormValue}%);
    transition: transform 0.5s ease-in-out;
`;

const BannerButtonStyle = styled.div`
    button {
        border: 0;
        width: 40px;
        height: 40px;
        background: rgba(0, 0, 0, 0.5);
        border-radius: 500px;
        font-size: 2rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);

        svg {
            fill: #fff;
        }

        &.precv {
            left: 10px;
        }

        &.next {
            right: 10px;
        }
    }
`;

export default Banner;
