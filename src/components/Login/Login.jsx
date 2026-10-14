import { use, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../context/AuthContext/AuthContext";

const Login = () => {
    const [success, setSuccess] = useState(false)
    const { signIn } = use(AuthContext)
    const handleLogin = (event) => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        signIn(email, password)
            .then(result => {
                console.log(result.user);
                setSuccess(true)
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div className="">
            <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Login now!</h1>
            </div>
            <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <form onSubmit={handleLogin}>
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input
                                name="email"
                                type="email"
                                className="input"
                                placeholder="Email" />
                            <label className="label">Password</label>
                            <input
                                name="password"
                                type="password"
                                className="input"
                                placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <p>
                                Don't Have an Account
                                <Link to='/registration' className="text-blue-600 font-bold ml-1">
                                    Sign Up
                                </Link>
                            </p>
                            <button className="btn btn-neutral mt-4">Login</button>
                            {
                                success &&
                                <p className="font-medium text-green-500">
                                    Account login Successful!
                                </p>
                            }
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;