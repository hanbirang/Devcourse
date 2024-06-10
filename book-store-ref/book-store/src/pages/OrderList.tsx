import { styled } from 'styled-components';
import Title from '../components/common/Title';
import { useOrders } from '../hooks/useOrders';

function OrderList() {
    const { orders } = useOrders();
    console.log(orders);

    return (
        <>
            <Title size='large'>주문 내역</Title>
            <OrderListStyle>
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>주문일자</th>
                            <th>주소</th>
                            <th>수령인</th>
                            <th>전화번호</th>
                            <th>대표상품명</th>
                            <th>수량</th>
                            <th>금액</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order) => (
                                <tr>
                                    <td>{order.id}</td>
                                    <td>{order.createdAt}</td>
                                    <td>{order.address}</td>
                                    <td>{order.receiver}</td>
                                    <td>{order.contact}</td>
                                    <td>{order.bookTitle}</td>
                                    <td>{order.totalQuantity}</td>
                                    <td>{order.totalPrice}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </OrderListStyle>
        </>
    );
}

const OrderListStyle = styled.div`
`;

export default OrderList;
