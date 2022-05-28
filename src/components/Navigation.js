import { Link } from "react-router-dom";
import Searching from "./Searching";

const Navigation = () => {
    return (
        <div style={{ justifyContent: 'space-between' }}>
            <a href="/">홈</a>
            <div>
                <Searching />
                <Link to='/near'>내 주변</Link>
                <Link to='/booklist'>예약내역</Link>
                <span>더보기</span>
                <Link to="/login">로그인</Link>
            </div>
        </div>)
}

export default Navigation;