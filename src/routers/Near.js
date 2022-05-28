/* global kakao */
import { useEffect } from "react";
import { useLocation } from "react-router-dom"

const Near = () =>{
    const {state} = useLocation();
    useEffect(()=>{
        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(33.450701, 126.570667),
            level: 6,
        }
        const map = new kakao.maps.Map(container,options)
        const geocoder = new kakao.maps.services.Geocoder();
        geocoder.addressSearch('서울특별시 신정중앙로 8길 11',
        (result,status) =>{
            if (status===kakao.maps.services.Status.OK){
                const coords = new kakao.maps.LatLng(result[0].y,result[0].x);

                const marker = new kakao.maps.Marker({
                    map:map,
                    position:coords
                })
                map.setCenter(coords)
                let infowindow = new kakao.maps.InfoWindow({
                    content:'<div style="width:150px;text-align:center;padding:6px 0;">장소설명</div>'
                })
                infowindow.open(map,marker)
            }
        }    
        )

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