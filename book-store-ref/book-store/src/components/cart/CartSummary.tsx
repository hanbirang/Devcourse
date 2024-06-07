import { styled } from 'styled-components';
import { formatNumber } from '../../utils/format';

interface Props {
    totalQuantity: number;
    totalPrice: number;
};

function CartSummary({totalQuantity, totalPrice}: Props) {
    return (
        <CartSummaryStyle>
            <h1>주문 요약</h1>
            <dl>
                <dt>총 수량</dt>
                <dd>{totalQuantity} 권</dd>
            </dl>
            <dl>
                <dt>총 금액</dt>
                <dd>{formatNumber(totalPrice)} 원</dd>
            </dl>
        </CartSummaryStyle>
    );
}

const CartSummaryStyle = styled.div`
`;

export default CartSummary;
