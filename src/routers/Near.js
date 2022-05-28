import { useLocation } from "react-router-dom"

const Near = () =>{
    const {state} = useLocation();
    return(
    <div>
        {state?
        <h2>Searching {state}...</h2>    :
        <h2>Searching Nerby...</h2>
    }
    {/* 네이버 맵 연동 -> 주변 맛집,놀거리 찾기 */}
    </div>
    
    )
}

export default Near