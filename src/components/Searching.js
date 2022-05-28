import { useState } from "react"
import { useNavigate } from "react-router-dom";

const Searching = () => {
    let navigate = useNavigate();
    const [searching, setSearching] = useState(false);
    const [text,setText] = useState('');
    const toggleSearch = ()=>{
        setSearching((prev) => !prev)
        setText('')
    }
    const onSearch =(event) =>{
        event.preventDefault();
        if (text.trim()===''){
            window.alert('검색어를 입력해주세요')
            setText('')
            return
        }
        navigate('/near',{state:text})
        setSearching(false)        
    }
    const onChange = (event) =>{
        setText(event.target.value)
    }
    return (
        <div>
            {searching ?
                <form onSubmit={onSearch}>
                    <input type="submit" value="검색"/>
                    <input 
                    type="text" 
                    placeholder="지역,숙소명"
                    onChange={onChange}
                    value={text}/>
                    <label onClick={toggleSearch}>취소</label>
                </form> :
                <button onClick={toggleSearch}>
                    검색
                </button>
            }

        </div>
    )
}
export default Searching