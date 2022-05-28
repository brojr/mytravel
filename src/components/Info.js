import { useState } from "react"

const Info = () => {
    const [over, setOver] = useState(false)
    return (
        <div 
            onMouseOver={() => setOver(true)}
            onMouseLeave={() => setOver(false)}
            >
            <span>더보기</span>
            {over &&
                <div style={{position:'absolute',width:200,right:-40}}>
                    <ul>
                        <li>공지사항</li>
                        <li>이벤트</li>
                        <li>자주묻는질문</li>
                        <li>1:1문의</li>
                        <li>약관 및 정책</li>
                    </ul>
                </div>
            }
        </div>
    )
}

export default Info