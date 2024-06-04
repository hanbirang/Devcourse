import { styled } from 'styled-components';
import { Pagination as IPagination } from '../../models/pagination.model';
import { LIMIT } from '../../constants/pagination';
import Button from '../common/Button';

interface Props {
   pagination: IPagination;
}
function Pagination({pagination}: Props) {
   const { totalCount, currentPage } = pagination;
   const pages: number = Math.ceil(totalCount / LIMIT);

   return (
      <PaginationStyle>
         {
            pages > 0 && (
               <ol>
                  {
                     Array(pages).fill(0).map((_, index) => (
                        <li>
                           <Button size='small' scheme='normal'>
                              {index + 1}
                           </Button>
                        </li>
                     ))
                  }
               </ol>
            )
         }
      </PaginationStyle>
   );
}

const PaginationStyle = styled.div`
`;

export default Pagination;
