import "../Styles/Auth.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="auth login-screen">
      <div className="logo">
        <img src="/images/logo.svg" alt="Logo" />
      </div>

      <div className="login-wrapper">
        <div className="left">
          <h1 className="title">Bienvenido</h1>
          <h2>Ingresa y disfruta</h2>
        </div>

        <p className="register">
          Si aún no tienes una cuenta puedes{" "}
          <span onClick={() => navigate("/register")}>
            Regístrate aquí!
          </span>
        </p>

        <img src="/images/imagen1.png" className="person" />

        <div className="right">
          <h3>Iniciar sesión</h3>

          <input type="text" placeholder="Email o nombre de usuario" />
          <div className="password-box">
            <input type="password" placeholder="Contraseña" />
            <i className="eye">👁</i>
          </div>

          <a className="forgot">Olvide mi contraseña</a>

          <button
            className="btn-login"
            onClick={() => navigate("/survey")}
          >
            Iniciar sesión
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
