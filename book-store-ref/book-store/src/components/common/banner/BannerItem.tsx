import { Banner as IBanner } from "@/models/banner.model";
import { styled } from "styled-components";

interface Props {
    banner: IBanner;
}

function BannerItem({ banner }: Props) {
    return (
        <BannerItemStyle>
            <div className="img">
                <img src={banner.image} alt={banner.title} />
            </div>
        </BannerItemStyle>
    );
}

const BannerItemStyle = styled.div``;

export default BannerItem;
