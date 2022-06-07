import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "routers/Home"
import Login from "routers/Login"
import Navigation from "./Navigation"
import Near from "routers/Near"
import BookList from "routers/BookList"

const AppRouter = ({isLogin}) => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login isLogin={isLogin}/>} />
        <Route exact path="/near" element={<Near />} />
        <Route exact path="/booklist" element={<BookList isLogin={isLogin}/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
