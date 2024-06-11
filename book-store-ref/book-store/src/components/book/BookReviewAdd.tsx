import { BookReviewItemWrite } from '@/models/book.model';
import { useForm } from 'react-hook-form';
import { styled } from 'styled-components';
import Button from '../common/Button';

interface Props {
    onAdd: (data: BookReviewItemWrite) => void;
}

function BookReviewAdd({ onAdd }: Props) {
    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm<BookReviewItemWrite>();

    return (
        <BookReviewAddStyle>
             <form onSubmit={handleSubmit(onAdd)}>
                <fieldset>
                    <textarea></textarea>
                </fieldset>
                <fieldset>
                    <select>
                        <option value="1">1점</option>
                        <option value="2">2점</option>
                        <option value="3">3점</option>
                        <option value="4">4점</option>
                        <option value="5">5점</option>
                    </select>
                </fieldset>
                <Button size='medium' scheme='primary'>
                    작성하기
                </Button>
             </form>
        </BookReviewAddStyle>
    );
}

const BookReviewAddStyle = styled.div`
`;

export default BookReviewAdd;
