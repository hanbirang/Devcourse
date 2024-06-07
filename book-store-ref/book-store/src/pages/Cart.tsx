import { styled } from 'styled-components';
import Title from '../components/common/Title';
import CartItem from '../components/cart/CartItem';
import { useCart } from '../hooks/useCart';

function Cart() {
    const { carts } = useCart();
    console.log(carts);
    return (
        <>
            <Title size='large'>장바구니</Title>
            <CartStyle>
                <div className="content">
                    {
                        carts.map((cart) => (
                            <CartItem key={cart.id} cart={cart} />
                        ))
                    }
                </div>
                <div className="summary">
                    summary
                </div>
            </CartStyle>
        </>
    );
}

const CartStyle = styled.div`
`;

export default Cart;
