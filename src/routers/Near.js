/* global kakao */
import { useEffect } from "react";
import { useLocation } from "react-router-dom"

const Near = () => {
    const { state } = useLocation();

    useEffect(() => {
        const infowindow = new kakao.maps.InfoWindow({zIndex:1});
        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(37.566826, 126.9786567),
            level: 9,
        }

        const displayMarker = (place) =>{
            // 마커를 생성하고 지도에 표시합니다
            const marker = new kakao.maps.Marker({
                map: map,
                position: new kakao.maps.LatLng(place.y, place.x) 
            })
            kakao.maps.event.addListener(marker, 'click', ()=> {
                // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
                infowindow.setContent(`<div style=padding:5px;font-size:12px;>${place.place_name}</div>`);
                infowindow.open(map, marker);
            });
        };

        const placesSearchCB = (data, status) => {
            if (status === kakao.maps.services.Status.OK) {
                let lat = 0
                let lng = 0
                const len = data.length
                map.setCenter(new kakao.maps.LatLng(data[0].y,data[0].x))
                for (let i = 0; i < data.length; i++) {
                    lat += Number(data[i].y)
                    lng += Number(data[i].x)
                    displayMarker(data[i]);
                }
                map.setCenter(new kakao.maps.LatLng(lat/len,lng/len))
            }
            
        }
        const map = new kakao.maps.Map(container, options)
        const places = new kakao.maps.services.Places();
        places.setMap(map)
        places.keywordSearch(state, placesSearchCB,{
            category_group_code:'AD5'
        });

        // const geocoder = new kakao.maps.services.Geocoder();
        // geocoder.addressSearch('서울특별시 신정중앙로 8길 11',
        // (result,status) =>{
        //     if (status===kakao.maps.services.Status.OK){
        //         const coords = new kakao.maps.LatLng(result[0].y,result[0].x);

        //         const marker = new kakao.maps.Marker({
        //             map:map,
        //             position:coords
        //         })
        //         map.setCenter(coords)
        //         let infowindow = new kakao.maps.InfoWindow({
        //             content:'<div style="width:150px;text-align:center;padding:6px 0;">장소설명</div>'
        //         })
        //         infowindow.open(map,marker)
        //     }
        // }    
        // )

    }, [])
    return (
        <div>
            {state ?
                <h2>Searching {state}...</h2> :
                <h2>Searching Nerby...</h2>
            }
            {/* 카카오 맵 연동 -> 주변 맛집,놀거리 찾기 */}
            <div>
                <div id='map' style={{ width: '100%', height: "400px" }}></div>
            </div>
        </div>

    )
}

export default Near