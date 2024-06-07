import { styled } from 'styled-components';
import Title from '../components/common/Title';
import CartItem from '../components/cart/CartItem';
import { useCart } from '../hooks/useCart';
import { useState } from 'react';

function Cart() {
    const { carts } = useCart();
    const [ checkedItems, setCheckedItems ] = useState<number[]>([]);
    return (
        <>
            <Title size='large'>장바구니</Title>
            <CartStyle>
                <div className="content">
                    {
                        carts.map((cart) => (
                            <CartItem 
                                key={cart.id} cart={cart} 
                                checkedItems={checkedItems}
                            />
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
