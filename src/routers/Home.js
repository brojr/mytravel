import { useNavigate } from "react-router-dom";
const Home = () => {
    const imgURL = `${process.env.PUBLIC_URL}/img/ocean.jpg`
    let navigate = useNavigate();
    const onClick = (event) => {
        const { innerText } = event.target
        navigate('/near', { state: innerText })
    }
    return (
        <div>
            <img src={imgURL} alt="메인화면 이미지" style={{ width: '100%' }} />
            <div onClick={onClick} style={{
                width: '50%',
                display: 'flex',
                justifyContent: 'space-between',
                cursor: 'pointer'
            }}>
                <span>서울경기</span>
                <span>제주</span>
                <span>강원</span>
                <span>충청</span>
                <span>전라남북</span>
                <span>경상남북</span>
            </div>
        </div>
    )
}

export default Home