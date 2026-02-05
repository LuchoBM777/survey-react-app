import { useNavigate } from "react-router-dom";
import "../Styles/Survey.css";

export default function Survey() {

    const navigate = useNavigate();

    return (
        <div className="survey-page">

            <div className="logo">
                <img src="/images/logo.svg" alt="Logo" />
            </div>

            <div className="survey-box">

                <button className="close-btn" onClick={() => navigate("/login")}>
                    ×
                </button>

                <h1 className="survey-title">Encuesta</h1>

                <label className="survey-date-label">Fecha</label>

                <div className="survey-date">
                    <input className="survey-date-input" type="date" />
                </div>

                <div className="survey-questions">
                    <p>Pregunta 1</p>
                    <div className="options">
                        <label><input type="radio" name="q1" /> A</label>
                        <label><input type="radio" name="q1" /> B</label>
                        <label><input type="radio" name="q1" /> C</label>
                        <label><input type="radio" name="q1" /> D</label>
                    </div>

                    <p>Pregunta 2</p>
                    <div className="options">
                        <label><input type="radio" name="q2" /> A</label>
                        <label><input type="radio" name="q2" /> B</label>
                        <label><input type="radio" name="q2" /> C</label>
                        <label><input type="radio" name="q2" /> D</label>
                    </div>

                    <p>Pregunta 3</p>
                    <div className="options">
                        <label><input type="radio" name="q3" /> A</label>
                        <label><input type="radio" name="q3" /> B</label>
                        <label><input type="radio" name="q3" /> C</label>
                        <label><input type="radio" name="q3" /> D</label>
                    </div>

                    <p>Pregunta 4</p>
                    <div className="options">
                        <label><input type="radio" name="q4" /> A</label>
                        <label><input type="radio" name="q4" /> B</label>
                        <label><input type="radio" name="q4" /> C</label>
                        <label><input type="radio" name="q4" /> D</label>
                    </div>
                </div>

                <button className="survey-btn">Enviar</button>

            </div>
        </div>
    );
}
