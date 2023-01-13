function login() {
    return (
        <div className="login-form-box">
            <form className="login-form">
                 <div className="login-title">
                    
                        <h4>Login</h4>
                    </div>
                    <div className="form-group mt-3">
                    <label >Email address</label>
                    <input type="email" className="form-control mt -1" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                 </div>

                <div className="form-group mt-3">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control mt-1" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                 
            <button type="submit" className="btn btn-primary mt -3">Submit</button>
            </form>

        </div>
    )
}

export default login