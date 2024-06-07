import { styled } from 'styled-components';
import { Cart } from '../../models/cart.model';
import Button from '../common/Button';
import Title from '../common/Title';
import { formatNumber } from '../../utils/format';

interface Props {
    cart: Cart;
}

function CartItem({cart}: Props) {
    return (
        <CartItemStyle>
            <div className="info">
                <div>체크 버튼</div>
                <div>
                    <Title size='medium'>{cart.title}</Title>
                    <p className="summary">{cart.summary}</p>
                    <p className="price">{formatNumber(cart.price)} 원</p>
                    <p className="quantity">{cart.quantity} 권</p>
                </div>
            </div>
            <Button size='medium' scheme='normal'>
                장바구니 삭제
            </Button>
        </CartItemStyle>
    );
}

const CartItemStyle = styled.div`
`;

export default CartItem;
