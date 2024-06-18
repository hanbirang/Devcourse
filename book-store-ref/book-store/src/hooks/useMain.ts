import { fetchBestBooks, fetchBooks } from "@/api/books.api";
import { fetchReviewAll } from "@/api/review.api";
import { Book, BookReviewItem } from "@/models/book.model";
import { useEffect, useState } from "react";

export const useMain = () => {
    const [ reviews, setReviews ] = useState<BookReviewItem[]>([]);
    const [ newBooks, setNewBooks ] = useState<Book[]>([]);
    const [ bestBooks, setBestBooks ] = useState<Book[]>([]);

    useEffect(() => {
        fetchReviewAll().then((reviews) => {
            setReviews(reviews);
        });

        fetchBooks({
            category_id: undefined,
            newBook: true,
            currentPage: 1,
            limit: 4
        }).then(({ books }) => {
            if (books)
                setNewBooks(books);
        });
    }, []);

    fetchBestBooks().then((books) => {
        setBestBooks(books);
    });
    return { reviews, newBooks, bestBooks };
};
