
import { Link } from "react-router";
import { use } from "react";
import { AuthContext } from "../../context/AuthContext/AuthContext";


const Registration = () => {
    // const handleRegistration = (event) => {
    //     event.preventDefault()
    //     const email = event.target.email.value
    //     const password= event.target.password.value
    //     console.log('registration done!', email, password);
    //     createUserWithEmailAndPassword(auth, email, password)
    //     .then(result => {
    //         console.log(result.user);
    //     })
    //     .catch(error => {
    //         console.log(error.message);
    //     })
    // }
    const { createUser } = use(AuthContext)
    const register = (event) => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        createUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div className="">
            <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Registration now!</h1>
            </div>
            <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <form onSubmit={register}>
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
                            <p>
                                Already Have an Account
                                <Link to='/login' className="text-blue-600 font-bold ml-1">
                                    Sign In
                                </Link>
                            </p>
                            <button className="btn btn-neutral mt-4">Login</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;