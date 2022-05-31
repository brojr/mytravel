/* global kakao */
import { useEffect } from "react";
import { useLocation } from "react-router-dom"

const Near = () => {
    const { state } = useLocation();
    const bounds = new kakao.maps.LatLngBounds();
    useEffect(() => {
        const infowindow = new kakao.maps.InfoWindow({zIndex:1});

        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(37.566826, 126.9786567),
            level: 9,
        }

        const displayMarker = (place) =>{
            // 마커를 생성하고 지도에 표시합니다
            const point = new kakao.maps.LatLng(place.y,place.x)
            const marker = new kakao.maps.Marker({
                map: map,
                position: point
            })
            bounds.extend(point)
            kakao.maps.event.addListener(marker, 'click', ()=> {
                // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
                infowindow.setContent(`<div style=padding:5px;font-size:12px;>${place.place_name}</div>`);
                infowindow.open(map, marker);
            });
            
        };

        const placesSearchCB = (data, status) => {
            if (status === kakao.maps.services.Status.OK) {
                for (let i = 0; i < data.length; i++) {
                    displayMarker(data[i]);
                }
                map.setBounds(bounds);
            }
            
        }
        const map = new kakao.maps.Map(container, options)
        const places = new kakao.maps.services.Places();
        places.setMap(map)
        places.keywordSearch(state, placesSearchCB,{
            category_group_code:'AD5'
        });

        kakao.maps.event.addListener(map,'click',()=>{
            infowindow.close()
        })


    }, [state])
    return (
        <div>
            {state ?
                <h2>Searching {state}...</h2> :
                <h2>Searching Nerby...</h2>
            }
            <div>
                <div id='map' style={{ width: '100%', height: "600px" }}></div>
            </div>
        </div>

    )
}

export default Near