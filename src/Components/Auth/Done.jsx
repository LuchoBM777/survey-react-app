import "../Styles/Done.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUsersWithSurvey } from "../../services/userService";

export default function Done() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const surveyLocal = JSON.parse(
    localStorage.getItem(`survey_${user?.user}`)
  );

  const [open, setOpen] = useState(false);
  const [surveyApi, setSurveyApi] = useState(null);

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  // 🔥 CONSULTA AL BACKEND CUANDO ABRES EL PERFIL
  const openProfile = async () => {
    setOpen(!open);

    try {
      const res = await getUsersWithSurvey();

      console.log("PERFIL - RESPUESTA API:");
      console.log(res);
      /*
        {
          message: "Consulta Exitosa",
          data: [ ... ]
        }
      */

      if (res.message === "Consulta Exitosa") {
        const found = res.data.find(u => u.user === user.user);

        if (found && found.survey) {
          const parsed = JSON.parse(found.survey);

          setSurveyApi({
            user: found.user,
            mail: found.mail,
            phone: found.phone,
            survey: parsed
          });
        }
      }

    } catch (err) {
      console.log("Error cargando perfil:", err);
    }
  };

  const finalSurvey = surveyApi || surveyLocal;

  return (
    <div className="done-page">
      <div className="logo">
        <img src="/images/logo.svg" alt="Logo" />
      </div>

      <div className="top-actions">
        <button className="profile-btn" onClick={openProfile}>
          👤
        </button>
        <button className="logout-btn" onClick={logout}>
          Cerrar sesión
        </button>
      </div>

      <div className="done-center">
        <h1>Ya realizaste la encuesta</h1>
        <p>Gracias por tu participación 💚</p>
      </div>

      {open && finalSurvey && (
        <div className="profile-card">
          <h3>Perfil</h3>
          <p><b>Usuario:</b> {finalSurvey?.user || user?.user}</p>
          <p><b>Correo:</b> {finalSurvey?.mail || user?.mail}</p>
          <p><b>Teléfono:</b> {finalSurvey?.phone || user?.phone}</p>

          <h4>Respuestas</h4>
          <p>Fecha: {finalSurvey?.survey?.fecha}</p>

          {Object.entries(finalSurvey.survey).map(
            ([k, v]) =>
              k !== "fecha" && <p key={k}>{k}: {v}</p>
          )}
        </div>
      )}
    </div>
  );
}