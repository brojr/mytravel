import { Link } from "react-router-dom";
import Info from "./Info";
import Searching from "./Searching";

const Navigation = ({isLogin}) => {
    return (
        <header style={{ display: 'flex' ,justifyContent:'space-between', marginBottom:50}}>
            <a href="/">홈</a>
            <div style={{ display: 'flex' }}>
                <Searching />
                <Link to='/near'>내 주변</Link>
                <Link to='/booklist'>예약내역</Link>
                <Info />
                <Link to="/login">{isLogin? "내 정보":"로그인"}</Link>
            </div>
        </header>)
}

export default Navigation;