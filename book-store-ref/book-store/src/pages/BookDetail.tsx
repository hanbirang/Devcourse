import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import { useBook } from '../hooks/useBook';

function BookDetail() {
   const bookId = useParams().id;
   const { book } = useBook(bookId);

   console.log(book);
   if (!book) return null;

   return (
      <BookDetailStyle>
         {book.title}
      </BookDetailStyle>
   );
}

const BookDetailStyle = styled.div`
`;

export default BookDetail;
