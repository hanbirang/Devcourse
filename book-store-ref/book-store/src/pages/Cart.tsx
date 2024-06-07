import { styled } from 'styled-components';
import Title from '../components/common/Title';
import CartItem from '../components/cart/CartItem';
import { useCart } from '../hooks/useCart';
import { useState } from 'react';

function Cart() {
    const { carts } = useCart();
    const [ checkedItems, setCheckedItems ] = useState<number[]>([]);
    const handleCheckItem = (id: number) => {
        if(checkedItems.includes(id)) {
            // 언체크
            setCheckedItems(checkedItems.filter((item) => item !== id))
        } else {
            // 체크
            setCheckedItems([
                ...checkedItems,
                id
            ]);
        }

        
    };

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
                                onCheck={handleCheckItem}
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
