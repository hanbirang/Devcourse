import { Banner as IBanner } from "@/models/banner.model";
import { styled } from "styled-components";
import BannerItem from "./BannerItem";
import { useMemo, useState } from "react";

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
                <button onClick={handlePrev}>이전</button>
                <button onClick={handleNext}>다음</button>
            </BannerButtonStyle>

            {/* 인디케이터 */}
        </BannerStyle>
    );
}

const BannerStyle = styled.div``;

interface BannerContainerStyleProps {
    $transFormValue: number;
};

const BannerContainerStyle = styled.div<BannerContainerStyleProps>`
    display: flex;
    transform: translateX(${(props) => props.$transFormValue}%);
    transition: transform 0.5s ease-in-out;
`;

const BannerButtonStyle = styled.div``;

export default Banner;
