import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
const Login = ({ isLogin }) => {
    const [userid, setUserId] = useState('');
    const [pw, setPw] = useState('');
    let navigate = useNavigate();
    const onChange = (event) => {
        const { name } = event.target
        if (name === "id") {
            setUserId(event.target.value)
        }
        else {
            setPw(event.target.value)
        }

    }
    const onSubmit = async (event) => {
        event.preventDefault();
        // POST형식으로 데이터 서버에 전달
        const res = await axios.post('http://localhost:8080/login', {
            userid: userid,
            pw: pw
        })
        console.log(res)
        if (res.status!==200){
            window.alert(res)
        }
        else {
            const {message} = res.data
            if(message==='noid')
                window.alert('아이디가 존재하지 않습니다.')
            else if(message==='wrongpw'){
                window.alert('비밀번호가 일치하지 않습니다.')
            }
            else if(message==='success'){
                window.alert('로그인 성공')
                // 넘어온 데이터를 global storage에 저장 후 홈으로
                navigate('/')
            }
        }
    }

    return (
        <div>
            {isLogin ?
                <div>profile</div> :
                <form onSubmit={onSubmit}>
                    <input
                        name='id'
                        value={userid}
                        type="text"
                        placeholder="ID"
                        onChange={onChange} />
                    <input
                        name='pw'
                        value={pw}
                        type="password"
                        placeholder="PW"
                        onChange={onChange} />
                    <Link to='/register'>회원가입</Link>
                    <input type="submit" value="로그인" />
                </form>
            }

        </div>
    )
}

export default Login