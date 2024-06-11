import { login, signup } from "@/api/auth.api";
import { LoginProps } from "@/pages/Login";
import { useAuthStore } from "@/store/authStore";
import { useAlert } from "./useAlert";
import { useNavigate } from "react-router-dom";
import { SignupProps } from "@/pages/Signup";

export const useAuth = () => {
    const { showAlert } = useAlert();
    const navigate = useNavigate();

    // 상태
    const { isloggedIn, storeLogin, storeLogout } = useAuthStore();

    // 메소드
    const userLogin = (data: LoginProps) => {
        login(data).then((res) => {
            // 상태 변화 
            storeLogin(res.token);
            console.log(res.token);
            showAlert("로그인 완료되었습니다.");
            navigate('/');
        }, (error) => {
            showAlert('로그인이 실패했습니다.');
        });
    };

    const userSignup = (data: SignupProps) => {
        signup(data).then((res) => {
            // 성공
            showAlert('회원가입이 완료되었습니다.');
            navigate('/login');
        });
    };

    // 리턴
    return { userLogin, userSignup };
};
