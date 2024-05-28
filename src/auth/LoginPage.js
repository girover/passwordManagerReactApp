import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../components/forms/FormInput";
import Button from "../components/buttons/Button";
import Card from "../components/cards/Card";
import db from "../data";
import ErrorMessage from "../components/messages/ErrorMessage";
import { useAuth } from "./AuthProvider";

const LoginPage = () => {

    const { user, login } = useAuth(); // import useAuth hook
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [errorMassage, setErrorMassage] = useState('');
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        // Authentication logic here
        const userToAuthenticate = db.users.find(user => user.username === username && user.password === password);
        if (!userToAuthenticate) {
            setErrorMassage('Invalid username or password');
            setShowErrorMessage(true);
            return;
        }
        // Navigate to home on successful login
        login(userToAuthenticate);
    };

    useEffect(() => {
        if (user !== null) {
            console.log(user);
            navigate('/');
        }
        if (showErrorMessage) {
            setTimeout(() => {
                setShowErrorMessage(false);
            }, 4000);
        }

    }, [showErrorMessage, user]);

    return (
        // <div className="vh-100 vw-100 d-flex justify-content-center align-content-center align-items-center">
        //     <div>
        //         <Card title="Login" icons={['fa fa-sign-in-alt']} fs="5" classes="mx-auto" styles={{width: '500px' }}>
        //             <div className="login-container">
        //                 <form onSubmit={handleLogin}>
        //                     <FormInput id="username" name="username" label="Username" value={username} onChangeHandler={e => setUsername(e.target.value)} />
        //                     <FormInput id="password" name="password" label="Password" value={password} onChangeHandler={e => setPassword(e.target.value)} />
        //                     <Button type="submit" icons={['fa fa-right-to-bracket']} text="Login" color="primary" classes="bg-blue-900 text-white" />
        //                 </form>
        //             </div>
        //         </Card>
        //     </div>
        //     <ErrorMessage title="Login Error" content={errorMassage} showErrorMessage={showErrorMessage} onClickHandler={() => setShowErrorMessage(false)} />
        // </div>
        <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

                        <div className="d-flex justify-content-center py-4">
                            <a href="index.html" className="logo d-flex align-items-center w-auto">
                                <img src="/img/pm_logo.webp" alt="A logo image for the password manager app" />
                            </a>
                        </div>

                        <div className="card mb-3 shadow">

                            <div className="card-body">

                                <div className="pt-4 pb-2">
                                    <h1 className="card-title text-center pb-0 fs-4">Login to Your Account</h1>
                                    <p className="text-center small">Enter your username & password to login</p>
                                </div>

                                <form className="row g-3" novalidate onSubmit={handleLogin}>

                                    <div className="col-12">
                                        <label htmlFor="username" className="form-label">Username</label>
                                        <div className="input-group">
                                            <span className="input-group-text" id="input-group-username">@</span>
                                            <input type="text" name="username" className="form-control" id="username" required onChange={e => setUsername(e.target.value)} />
                                            <div className="invalid-feedback">Please enter your username.</div>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <div className="input-group">
                                            <span className="input-group-text" id="input-group-password">
                                                <i className="fa fa-key"></i>
                                            </span>
                                            <input type="password" name="password" className="form-control" id="password" required onChange={e => setPassword(e.target.value)} />
                                            <div className="invalid-feedback">Please enter your password!</div>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe" />
                                            <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary bg-blue-700 w-100" type="submit">Login</button>
                                    </div>
                                </form>

                            </div>
                        </div>

                        <div className="credits">
                            Designed by <b>Rasmus V, Ulrikke, Rasmus K, Majed</b>
                        </div>

                    </div>
                </div>
            </div>
            <ErrorMessage title="Login Error" content={errorMassage} showErrorMessage={showErrorMessage} onClickHandler={() => setShowErrorMessage(false)} />
        </section>
    );
}

export default LoginPage;