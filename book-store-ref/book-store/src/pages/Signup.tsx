import { styled } from 'styled-components';
import Title from '../components/common/Title';
import InputText from '../components/common/InputText';
import Button from '../components/common/Button';
import { Link } from 'react-router-dom';

function Signup() {
   return (
    <>
        <Title size="large">회원가입</Title>
        <SignupStyle>
            <form>
                <fieldset>
                    <InputText placeholder='이메일' />
                </fieldset>
                <fieldset>
                    <InputText placeholder='비밀번호' />
                </fieldset>
                <fieldset>
                    <Button size="medium" scheme='primary'>
                        회원가입
                    </Button>
                </fieldset>
                <div className="info">
                    <Link to='/reset'>비밀번호 초기화</Link>
                </div>
            </form>
        </SignupStyle>
    </>
   );
}

const SignupStyle = styled.div`
    max-width: ${({theme}) => theme.layout.width.small};
    margin: 80px auto;

    fieldset {
        border: 0;
        padding: 0 0 8px 0;
        .error-text {
            color: red;
        }
    }

    input {
        width: 100%;
    }

    button {
        width: 100%;
    }

    .info {
        text-align: center;
        padding: 16px 0 0 0;
    }
`;

export default Signup
