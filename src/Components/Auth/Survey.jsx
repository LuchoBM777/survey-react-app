import "../Styles/Survey.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { sendSurvey } from "../../services/surveyService";

export default function Survey() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const [date, setDate] = useState("");
  const [answers, setAnswers] = useState({});

  // 🔥 NUEVO: si ya respondió → Done
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const saved = localStorage.getItem(`survey_${user?.user}`);
    if (saved) {
      navigate("/done");
    }
  }, [navigate]);

  const handleSelect = (q, op) => {
    setAnswers({ ...answers, [`Pregunta ${q}`]: op });
  };

  const handleSubmit = async () => {
    if (!date || Object.keys(answers).length < 4) {
      alert("Debes completar fecha y todas las preguntas");
      return;
    }

    const user = JSON.parse(localStorage.getItem("user"));

    const payload = {
      user: user.user,
      survey: {
        fecha: date,
        ...answers
      }
    };

    try {
      const res = await sendSurvey(payload);

      console.log("RESPUESTA BACKEND:", res.data);

      localStorage.setItem(`survey_${user.user}`, JSON.stringify(payload));
      setShowModal(true);
    } catch (err) {
      console.log("ERROR ENCUESTA:", err.response?.data || err.message);
      alert("Error enviando encuesta");
    }

  };

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
          <input
            className="survey-date-input"
            type="date"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="survey-questions">
          {["1", "2", "3", "4"].map((q) => (
            <div key={q} className="question-box">
              <p>Pregunta {q}</p>
              <div className="options">
                {["A", "B", "C", "D"].map((op) => (
                  <label key={op}>
                    <input
                      type="radio"
                      name={`q${q}`}
                      onChange={() => handleSelect(q, op)}
                    />
                    {op}
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        <button className="survey-btn" onClick={handleSubmit}>
          Enviar
        </button>

        {showModal && (
          <div className="modal-overlay">
            <div className="modal-box">
              <div className="modal-icon">✔</div>
              <h2>Tus respuestas se han guardado de manera correcta</h2>
              <button
                className="modal-btn"
                onClick={() => navigate("/done")}
              >
                Terminar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
