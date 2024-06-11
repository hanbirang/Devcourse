import { BookReviewItem } from "@/models/book.model";
import { http, HttpResponse } from "msw";

export const reviewsById = http.get("http://localhost:6250/reviews/:bookId", () => {
    const data: BookReviewItem[] = [];
    return HttpResponse.json(data, {
        status: 200
    });
});
