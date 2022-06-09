import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";
const Register = () => {
    const [username, setUsername] = useState('');
    const [userid, setUserId] = useState('');
    const [pw, setPw] = useState('');
    let navigate = useNavigate();
    const onChange = (event) => {
        const { name, value } = event.target
        if (name === 'name') {
            setUsername(value)
        }
        else if (name === 'id') {
            setUserId(value)
        }
        else if (name === 'pw') {
            setPw(value)
        }
    }
    const onSubmit = async(event) =>{
        event.preventDefault();
        const res = await axios.post('http://localhost:8080/register', {
            username:username,
            userid: userid,
            pw: pw
        })
        if (res.data==='fail'){
            window.alert('회원가입 실패')
        }
        else if (res.data==='success'){
            window.alert('회원가입 성공')
            navigate('/login')
        }
    }
    return (
        <div>
            <form
                style={{ flexDirection: 'column', display: 'flex', width: '200px' }}
                onSubmit={onSubmit}
            >
                <input onChange={onChange} value={username} name='name' type='text' placeholder="이름"></input>
                <input onChange={onChange} value={userid} name='id' type='text' placeholder="아이디"></input>
                <input onChange={onChange} value={pw} name='pw' type='password' placeholder="비밀번호"></input>
                <input type='submit' value='회원가입' />
            </form>
        </div>
    )
}

export default Register