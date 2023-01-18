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
            <div style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                cursor: 'pointer'
            }}>
                <span onClick={onClick}>서울</span>
                <span onClick={onClick}>부산</span>
                <span onClick={onClick}>제주</span>
                <span onClick={onClick}>대구</span>
                <span onClick={onClick}>광주</span>
                <span onClick={onClick}>전주</span>
                <span onClick={onClick}>대전</span>
                <span onClick={onClick}>춘천</span>
                <span onClick={onClick}>구월동</span>
            </div>
        </div>
    )
}

export default Home