import "../Styles/Auth.css";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { login } from "../../services/authService";

export default function Login() {
  const [emailOrUser, setEmailOrUser] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const msg = location.state?.message;
    if (msg) {
      setSuccess(msg);
      const t = setTimeout(() => setSuccess(""), 5000);
      return () => clearTimeout(t);
    }
  }, [location.state]);

  const validate = () => {
    const err = {};
    if (!emailOrUser.trim())
      err.emailOrUser = "Usuario o correo obligatorio";

    if (!password.trim())
      err.password = "Contraseña obligatoria";
    else if (password.length < 6)
      err.password = "Mínimo 6 caracteres";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const res = await login(emailOrUser, password);
      console.log("Respuesta backend:", res.data);

      if (res.data?.message === "Inicio de sesión exitoso") {
        localStorage.setItem("user", JSON.stringify(res.data.data));

        const user = res.data.data;
        const savedSurvey = localStorage.getItem(`survey_${user.user}`);

        if (savedSurvey) {
          navigate("/done");
        } else {
          navigate("/survey");
        }
      } else {
        setErrors({ api: res.data?.message || "Credenciales incorrectas" });
      }
    } catch (err) {
      console.log("Error login:", err.response?.data || err.message);

      if (err.response?.status === 404) {
        setErrors({ emailOrUser: "El usuario no existe" });
      } else if (err.response?.status === 401) {
        setErrors({ api: "Credenciales incorrectas" });
      } else {
        setErrors({ api: "Error del servidor" });
      }
    }
  };

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

        <form className="right" onSubmit={handleSubmit}>
          <h3>Iniciar sesión</h3>

          <input
            type="text"
            placeholder="Email o nombre de usuario"
            value={emailOrUser}
            onChange={(e) => setEmailOrUser(e.target.value)}
          />
          {errors.emailOrUser && <p className="error">{errors.emailOrUser}</p>}

          <div className="password-box">
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <i className="eye">👁</i>
          </div>

          {errors.password && <p className="error">{errors.password}</p>}
          {errors.api && <p className="error">{errors.api}</p>}
          {success && <p className="success">{success}</p>}

          <a className="forgot">Olvidé mi contraseña</a>

          <button className="btn-login" type="submit">
            Iniciar sesión
          </button>

          <p className="continue">o continúa con</p>

          <div className="socials">
            <span className="fb">f</span>
            <span className="apple"></span>
            <span className="google">G</span>
          </div>
        </form>
      </div>
    </div>
  );
}