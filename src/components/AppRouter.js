import { BrowserRouter , Route, Routes } from "react-router-dom"
import Home from "routers/Home"
import Login from "routers/Login"

const AppRouter = () =>{
    return(
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    )
}

export default AppRouter
