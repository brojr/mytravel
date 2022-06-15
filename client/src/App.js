import AppRouter from "components/AppRouter";
import { useEffect, useState } from "react";

function App() {
  const [isLogin,setIsLogin] = useState(false)
  useEffect(()=>{
    const login = localStorage.getItem('login-token')
    if (login) setIsLogin(login)
  },[])
  //로그인 처리시 -> setIsLogin=>true (redux구현)
  return (
    <div className="App" style={{margin:20}}>
      <AppRouter isLogin={isLogin}/>
    </div>
  );
}

export default App;
