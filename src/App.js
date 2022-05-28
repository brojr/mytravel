import AppRouter from "components/AppRouter";
import { useState } from "react";

function App() {
  const [isLogin,setIsLogin] = useState(false)
  //로그인 처리시 -> setIsLogin=>true
  return (
    <div className="App" style={{margin:20}}>
      <AppRouter isLogin={isLogin}/>
    </div>
  );
}

export default App;
