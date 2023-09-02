import { useState } from "react";
import sendLogin from "../services/send-login";
import saveToken from "../services/token/save-token";

function LoginForm() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = sendLogin(formData);
            const tokenSaved = saveToken(response.token);

        } catch(err) {
            console.error(err);
        }
    }

    return(
        <section className="form">
            <form className="login-form" method="post" onSubmit={handleSubmit}>
                <h3>Login</h3>
                <input
                    type="text"
                    name="email"
                    placeholder="e-mail"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />

                <button type="submit" className="login-btn">
                    Log in
                </button>
            </form>
        </section>
    )
}

export default LoginForm