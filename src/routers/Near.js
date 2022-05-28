/* global kakao */
import { useEffect } from "react";
import { useLocation } from "react-router-dom"

const Near = () =>{
    const {state} = useLocation();
    useEffect(()=>{
        let container = document.getElementById('map');
        let options = {
            center: new window.kakao.maps.LatLng(37.52645515114125, 126.85272799966204),
            level: 6,
        }
        let map = new window.kakao.maps.Map(container,options)
    },[])
    return(
    <div>
        {state?
        <h2>Searching {state}...</h2>    :
        <h2>Searching Nerby...</h2>
    }
    {/* 카카오 맵 연동 -> 주변 맛집,놀거리 찾기 */}
    <div>
        <div id='map' style={{width:'100%',height:"400px"}}></div>        
    </div>
    </div>
    
    )
}

export default Near