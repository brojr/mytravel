import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const BookList = ({isLogin}) =>{
    let navigate = useNavigate();
    useEffect(()=>{
        if(!isLogin){
            console.log(isLogin)
            navigate('/login')
        }
    },[])

    return(
        <div>
            {isLogin? 
            <div>
                This is Book List Page
            </div>:
                window.alert('로그인이 필요합니다')
            }
        </div>
   
    )
}

export default BookList