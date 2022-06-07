const Login = ({ isLogin }) => {
    return (
        <div>
            {isLogin ?
                <div>profile</div>:
                <div>Login page</div> 
            }

        </div>
    )
}

export default Login