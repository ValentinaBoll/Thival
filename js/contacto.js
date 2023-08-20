import react from 'react'
export default function loginForm() {
    return(
        <>
        <div Classname = "SingIn">
            <div classname = "content">
                <h2>Sign In</h2>
                <div className = "form">
                    <div className = "inputBox">
                        <input type = "text" required = "" /> <i>Username</i>
                    </div>
                    <div className = "inputBox">
                        <input type = "password" required = "" /> <i>Password</i>
                    </div>
                    <div className = "links">
                        <a href = "#">Forgot Password</a> <a href = "#">Sing Up</a>
                    </div>
                    <div className = "inputBox">
                        <input type = "submit" defaultValue = "login" /> <i>Username</i>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}