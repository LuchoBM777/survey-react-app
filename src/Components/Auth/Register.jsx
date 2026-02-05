import "../Styles/Register.css";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();

    return (
        <div className="auth register-screen">
            <div className="logo">
                <img src="/images/logo.svg" alt="Logo" />
            </div>

            <div className="login-wrapper">
                <div className="left">
                    <h1 className="title">Regístrate</h1>
                    <h2>Te invitamos a crear tu cuenta</h2>
                </div>

                <p className="login">
                    Si ya tienes una cuenta puedes{" "}
                    <span onClick={() => navigate("/login")}>
                        Iniciar sesión aquí!
                    </span>
                </p>

                <img src="/images/imagen1.png" className="person" />

                <div className="right">
                    <h3>Registro</h3>

                    <input type="text" placeholder="Email" />
                    <input type="text" placeholder="Nombre de usuario" />
                    <input type="number" placeholder="Número de celular" />
                    <input type="password" placeholder="Contraseña" />
                    <input type="password" placeholder="Confirmar contraseña" />

                    <a className="forgot">Olvidé mi contraseña</a>

                    <button
                        className="btn-login"
                        onClick={() => navigate("/login")}
                    >
                        Registrarte
                    </button>

                    <p className="continue">o continúa con</p>

                    <div className="socials">
                        <span className="fb">f</span>
                        <span className="apple"></span>
                        <span className="google">G</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
