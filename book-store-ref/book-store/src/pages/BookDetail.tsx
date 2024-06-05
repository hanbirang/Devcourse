import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import { useBook } from '../hooks/useBook';
import { getImgSrc } from '../utils/image';
import Title from '../components/common/Title';
import { BookDetail as IBookDetail } from '../models/book.model';

const bookInfoList = [
   {
      label: "카테고리",
      key: "categoryName"
   },
   {
      label: "포맷",
      key: "form"
   },
   {
      label: "페이지",
      key: "pages"
   },
   {
      label: "ISBN",
      key: "isbn"
   },
   {
      label: "출간일",
      key: "pubDate"
   },
   {
      label: "가격",
      key: "price"
   }
];

function BookDetail() {
   const bookId = useParams().id;
   const { book } = useBook(bookId);

   console.log(book);
   if (!book) return null;

   return (
      <BookDetailStyle>
         <header className="header">
            <div className="img">
               <img src={getImgSrc(book.img)} alt={book.title} />
            </div>
         </header>
         <div className="info">
            <Title size='large' color='text'>{book.title}</Title>
            {
               bookInfoList.map((item) => (
                  <dl>
                     <dt>{item.label}</dt>
                     <dd>{book[item.key as keyof IBookDetail]}</dd>
                  </dl>
               ))
            }
         </div>
         <div className="content">

         </div>
      </BookDetailStyle>
   );
}

const BookDetailStyle = styled.div`
`;

export default BookDetail;
