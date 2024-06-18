import { Book } from "@/models/book.model";
import { styled } from "styled-components";
import BookItem from "./BookItem";

interface Props {
    book: Book;
    itemIndex: number;
}

function BookBestItem({ book, itemIndex }: Props) {
    return (
        <BookBestItemStyle>
            <BookItem book={book} view="grid" />
            <div className="rank">{itemIndex + 1}</div>
        </BookBestItemStyle>
    );
}

const BookBestItemStyle = styled.div``;

export default BookBestItem;
