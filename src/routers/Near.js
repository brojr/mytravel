import { useLocation } from "react-router-dom"

const Near = () =>{
    const {state} = useLocation();
    return(
    <div>
        {state?
        <h2>Searching {state}...</h2>    :
        <h2>Searching Nerby...</h2>
    }
    </div>
    
    )
}

export default Near