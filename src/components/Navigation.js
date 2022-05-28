import { Link } from "react-router-dom";
import Info from "./Info";
import Searching from "./Searching";

const Navigation = () => {
    return (
        <div style={{ display: 'flex' ,justifyContent:'space-between'}}>
            <a href="/">홈</a>
            <div style={{ display: 'flex' }}>
                <Searching />
                <Link to='/near'>내 주변</Link>
                <Link to='/booklist'>예약내역</Link>
                <Info />
                <Link to="/login">로그인</Link>
            </div>
        </div>)
}

export default Navigation;