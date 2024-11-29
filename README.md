# 🌟 Proyecto Full-Stack: Evaluación Técnica 🌟

## 📝 Descripción General

Este proyecto full-stack integra un frontend desarrollado con **Next.js** el framework de **React** y un backend creado con **Node.js** y **Express**. La solución completa está diseñada para demostrar habilidades avanzadas en desarrollo de software moderno, con un enfoque en la modularidad, la optimización y la escalabilidad.

---

## 🚀 Funcionalidades Implementadas

### Frontend: **Next.js con React**
- **Diseño Profesional:** Uso de **TailwindCSS** para garantizar un diseño atractivo y accesible.
- **Rutas Dinámicas:** Generación de contenido basado en parámetros de URL.
- **Consumo de API:** Gestión de datos desde el backend con llamadas optimizadas.
- **Manejo de Estado:** Uso de \`useState\` y \`useEffect\` para una interacción fluida.
- **Optimización:** Implementación de renderizado estático y dinámico según las necesidades.

### Backend: **Node.js con Express**
- **Estructura Modular:** Organización clara en controladores, middlewares y rutas.
- **Gestión de Variables de Entorno:** Configuración sencilla para adaptarse a entornos de desarrollo y producción.
- **Conexión a Base de Datos:** Integración eficiente con bases de datos a través de \`DATABASE_URL\`.

---

## 📂 Estructura del Proyecto

```
📦 evaluacion-para-informatica-UPA
┣ 📂 front               # Frontend con Next.js el framwork de React
┣ 📂 back                # Backend con Node.js y Express
┣ 📜 script.sql          # Script sql para crear toda la información en la base de datos
```

---

## 🛠️ Configuración Inicial

### 1️⃣ Clona el repositorio

```bash
git clone https://github.com/davidsolis41/evaluacion-para-informatica-UPA.git
```

### 2️⃣ Configura el **Backend**

```bash
cd evaluacion-para-informatica-UPA/back
npm install
```

Configura las variables de entorno en el archivo \`.env\`:

```plaintext
DATABASE_URL="mysql://admin:12345678@localhost:3306/evaluacion_david_solis"
```

Inicia el servidor backend:

```bash
npm run dev
```

El backend estará disponible en [http://localhost:3000](http://localhost:3000).

### 3️⃣ Configura el **Frontend**

```bash
cd evaluacion-para-informatica-UPA/front
npm install
```

Inicia el servidor frontend:

```bash
npm run dev
```

El frontend estará disponible en [http://localhost:4000](http://localhost:4000).

---

## 🧑‍💻 Tecnologías Utilizadas

### Frontend
- **Next.js**: Framework de desarrollo web moderno.
- **React**: Librería de UI.
- **TypeScript**: Tipado estático para mayor seguridad.
- **TailwindCSS**: Estilización modular.

### Backend
- **Node.js**: Entorno de ejecución.
- **Express**: Framework backend.
- **Prisma**: ORM para la conexión a bases de datos.
- **TypeScript**: Tipado estático.

---

## 📜 Licencia

Este proyecto está licenciado bajo la [MIT License](LICENSE).

---

🎉 **¡Gracias por explorar este proyecto!** Si tienes dudas o sugerencias, no dudes en contactarme. 🚀
