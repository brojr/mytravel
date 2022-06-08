import axios from "axios"
import { useState } from "react"
const Login = ({ isLogin }) => {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
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
        const response = await axios.post('http://localhost:8080/register', {
            id: id,
            pw: pw
        })
        console.log(response.status)
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