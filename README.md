# Proyecto React - Sistema de Login, Registro y Encuesta

Este proyecto es una aplicación web construida con React que incluye funcionalidades de autenticación (login y registro) y una encuesta posterior al inicio de sesión. El diseño está optimizado para dispositivos móviles (responsive).


## Tabla de Contenidos

- [Descripción](#descripción)
- [Características](#características)
- [Tecnologías](#tecnologías)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Funcionalidades](#funcionalidades)
- [Instalación](#instalación)
- [Uso](#uso)
- [Consideraciones de Diseño](#consideraciones-de-diseño)
- [Autores](#autores)
- [Licencia](#licencia)


## Descripción

Esta aplicación permite a los usuarios registrarse, iniciar sesión y completar una encuesta personalizada. La interfaz está diseñada con especial atención al uso en dispositivos móviles, evitando scroll horizontal y garantizando una experiencia limpia y accesible.


## Características

- Registro de usuarios con validación de campos.
- Inicio de sesión con validación y manejo de errores.
- Función para mostrar/ocultar contraseña con icono interactivo.
- Navegación entre pantallas de login, registro y encuesta usando React Router.
- Almacenamiento local de datos de usuario y encuesta para persistencia.
- Diseño responsive adaptado para móviles.
- Integración visual con iconos para redes sociales: Facebook, Apple y Google.
- Control de errores con mensajes claros al usuario.
- Eliminación de imagen decorativa en móviles para mejor visualización.


## Tecnologías

- React 18+
- React Router DOM
- CSS (con media queries para responsive design)
- Servicios REST para autenticación (login/register)
- Vercel para despliegue (opcional)


## Estructura del Proyecto
mi-app-react/
├── public/
│   └── images/
│       ├── logo.svg
│       ├── imagen1.png
│       ├── fb-icon.svg
│       ├── apple-icon.svg
│       └── google-icon.svg
├── src/
│   ├── components/
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   └── Survey.jsx
│   ├── services/
│   │   └── authService.js
│   │   └──api.js
│   │   └── surveyService.js
│   │   └── userService.js     
│   ├── styles/
│   │   ├── Auth.css
│   │   ├── Register.css
│   │   └── Survey.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md




## Funcionalidades Detalladas

### Login

- Campos para usuario/email y contraseña.
- Validación con mensajes de error.
- Icono de ojo para mostrar/ocultar contraseña.
- Navegación a registro si no tiene cuenta.
- Al iniciar sesión, redirige a encuesta o resumen si ya completó la encuesta.

### Registro

- Campos para nuevo usuario, email, contraseña y confirmación.
- Validación de campos con mensajes claros.
- Navegación para iniciar sesión si ya tiene cuenta.

### Encuesta

- Formulario adaptado al tamaño móvil sin scroll horizontal.
- Almacenamiento local para guardar progreso.


## Instalación

1. Clona el repositorio:
https://github.com/LuchoBM777/survey-react-app

2. Entra a la carpeta del proyecto:
cd mi-app-react

3. Instala dependencias:
npm install

4. Ejecuta la aplicación en modo desarrollo:
npm run dev



## Uso

- Accede a la página principal.
- Usa el formulario para iniciar sesión o registrar nuevo usuario.
- Después de iniciar sesión, completa la encuesta.
- El diseño está optimizado para usarse en dispositivos móviles sin scroll horizontal.


## Consideraciones de Diseño

- Se usaron media queries para adaptar el diseño a pantallas menores a 768px.
- Se eliminó la imagen decorativa en móviles para evitar ocupar espacio.
- Los inputs y botones se ajustan al 100% del ancho en móvil.
- El botón de mostrar/ocultar contraseña mejora la usabilidad.


## Autor

- Luis Carlos Baez Montes

Si necesitas ayuda adicional, ¡no dudes en preguntar!
