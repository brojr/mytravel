import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
const Login = ({ isLogin }) => {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    let navigate = useNavigate();
    const onChange = (event) => {
        const { name } = event.target
        if (name === "id") {
            setId(event.target.value)
        }
        else {
            setPw(event.target.value)
        }

    }
    const onSubmit = async (event) => {
        event.preventDefault();
        // POST형식으로 데이터 서버에 전달
        const res = await axios.post('http://localhost:8080/login', {
            id: id,
            pw: pw
        })
        if (res.data==='fail'){
            window.alert('로그인 실패')
        }
        else if (res.data==='success'){
            window.alert('로그인 성공')
            // 넘어온 데이터를 global storage에 저장 후 홈으로
            navigate('/')
        }
    }

    return (
        <div>
            {isLogin ?
                <div>profile</div> :
                <form onSubmit={onSubmit}>
                    <input
                        name='id'
                        value={id}
                        type="text"
                        placeholder="ID"
                        onChange={onChange} />
                    <input
                        name='pw'
                        value={pw}
                        type="password"
                        placeholder="PW"
                        onChange={onChange} />
                    <input type="submit" value="로그인" />
                </form>
            }

        </div>
    )
}

export default Login