import { styled } from 'styled-components';
import Button from '../common/Button';
import { FaList, FaTh } from 'react-icons/fa';

const viewOptions = [
   {
      value: 'list',
      icon: <FaList />
   },
   {
      value: 'grid',
      icon: <FaTh />
   }
]

function BooksViewSwitcher() {
   return (
      <BooksViewSwitcherStyle>
         {
            viewOptions.map((option) => (
               <Button size='medium' scheme='normal'>
                  {option.icon}
               </Button>
            ))
         }
      </BooksViewSwitcherStyle>
   );
}

const BooksViewSwitcherStyle = styled.div`
`;

export default BooksViewSwitcher;
