import { BookReviewItem } from '@/models/book.model';
import { styled } from 'styled-components';

interface Props {
    reviews: BookReviewItem[];
}
function BookReview({ reviews }: Props) {
    return (
        <BookReviewStyle></BookReviewStyle>
    );
}

const BookReviewStyle = styled.div`
`;

export default BookReview;
