import "../Styles/Register.css";
import { useState } from "react";
import { register } from "../../services/authService";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const [form, setForm] = useState({
        email: "",
        user: "",
        phone: "",
        password: "",
        confirm: ""
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validate = () => {
        const err = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!form.email.trim())
            err.email = "Correo obligatorio";
        else if (!emailRegex.test(form.email))
            err.email = "Correo inválido";

        if (!form.user.trim())
            err.user = "Usuario obligatorio";

        if (!form.phone.trim())
            err.phone = "Teléfono obligatorio";
        else if (!/^\d{7,}$/.test(form.phone))
            err.phone = "Mínimo 7 números";

        if (!form.password)
            err.password = "Contraseña obligatoria";
        else if (form.password.length < 6)
            err.password = "Mínimo 6 caracteres";

        if (form.confirm !== form.password)
            err.confirm = "No coinciden";

        setErrors(err);
        return Object.keys(err).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) return;  // <-- Aquí se llama a validate antes de enviar

        try {
            const res = await register(form);

            const fixedResponse = {
                message: "Registro exitoso",
                data: res.data
            };

            console.log("RESPUESTA BACKEND:", fixedResponse);

            localStorage.setItem("user", JSON.stringify(fixedResponse.data));

            navigate("/login", {
                state: { message: fixedResponse.message }
            });

        } catch (err) {
            console.error("ERROR REGISTRO:", err.response?.data || err);
            setErrors({
                api: err.response?.data?.message || "Error en el servidor"
            });
        }
    };

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
                    <button
                        type="button"
                        className="link-button"
                        onClick={() => navigate("/login")}
                    >
                        Iniciar sesión aquí!
                    </button>
                </p>


                <img src="/images/imagen1.png" className="person" />

                <form className="right" onSubmit={handleSubmit}>
                    <h3>Registro</h3>

                    <input
                        placeholder="Email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                    {errors.email && <p className="error">{errors.email}</p>}

                    <input
                        placeholder="Nombre de usuario"
                        value={form.user}
                        onChange={(e) => setForm({ ...form, user: e.target.value })}
                    />
                    {errors.user && <p className="error">{errors.user}</p>}

                    <input
                        placeholder="Número de celular"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                    {errors.phone && <p className="error">{errors.phone}</p>}

                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={form.password}
                        onChange={(e) => setForm({ ...form, password: e.target.value })}
                    />
                    {errors.password && <p className="error">{errors.password}</p>}

                    <input
                        type="password"
                        placeholder="Confirmar contraseña"
                        value={form.confirm}
                        onChange={(e) => setForm({ ...form, confirm: e.target.value })}
                    />
                    {errors.confirm && <p className="error">{errors.confirm}</p>}

                    {errors.api && <p className="error">{errors.api}</p>}

                    <button className="btn-login" type="submit">
                        Registrarte
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
