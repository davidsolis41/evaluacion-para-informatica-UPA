# 🌟 Evaluación Node.js con Express 🌟

¡Bienvenido/a a mi prueba técnica! Este es un proyecto backend desarrollado con **Node.js** y **Express** que proporciona un punto de partida para construir una API eficiente y escalable.

---

## 📂 Estructura del Proyecto

```
📦 proyecto-nodejs
┣ 📂 prisma             # Configuración del ORM
┣ 📂 src
┃ ┣ 📂 controllers      # Logica de negocio para los endpoints
┃ ┣ 📂 middlewares      # Middlewares para las distintas acciones
┃ ┣ 📂 routes           # Definición de rutas del API
┃ ┣ 📜 app.ts           # Configuración principal del servidor
┃ ┣ 📜 index.ts         # Punto de inicio del API (mas conocido como MAIN)
┣ 📜 .env               # Ejemplo de archivo .env
┣ 📜 package.json       # Configuración de dependencias
┣ 📜 README.md          # Documentación del proyecto
┗ 📜 tsconfig.json      # Configuración de TypeScript
```
---

## 🚀 Características Principales

- **Framework:** Express.js para crear un servidor rápido y modular.
- **Gestión de Variables de Entorno:** Uso de funcionalidad nativa, integrada en node.js 20.
- **Conexión a Base de Datos:** Integración sencilla con bases de datos mediante la variable de entorno \`DATABASE_URL\`.

---

## 🛠️ Configuración Inicial

Sigue estos pasos para configurar y ejecutar el proyecto:

### 1️⃣ Clona el repositorio

```bash
git clone https://github.com/davidsolis41/evaluacion-para-informatica-UPA.git
cd evaluacion-para-informatica-UPA/back
```

### 2️⃣ Instala las dependencias

```bash
npm install
```

### 3️⃣ Configura las variables de entorno

Modifica el archivo \`.env\` en la raíz del proyecto. 

**Ejemplo de contenido para \`.env\`:**

```plaintext
DATABASE_URL="mysql://admin:12345678@localhost:3306/evaluacion_david_solis"
```

- **\`DATABASE_URL\`**: Es obligatorio cambiar este valor al de tu base de datos.
- Alternativamente, puedes definir la variable \`DATABASE_URL\` directamente en tu sistema.

### 4️⃣ Inicia el servidor

```bash
npm run dev
```

El servidor estará disponible en [http://localhost:3000](http://localhost:3000).

---

## 🔑 Nota Importante

Para que el proyecto funcione correctamente, asegúrate de:

1. Cambiar el string de conexión en el archivo \`.env\` o definir \`DATABASE_URL\` como variable de entorno.
2. Verificar que tu base de datos esté configurada y accesible desde el servidor.
3. Verificar que cuentas con Node.js 20 o superior en tu computadora.

---

## 🧑‍💻 Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución.
- **Express**: Framework de backend.
- **TypeScript**: Lenguaje de programación.

---

## 📜 Licencia

Este proyecto está licenciado bajo la [MIT License](LICENSE).

---

🎉 Si tienes dudas, no dudes en contactarme. 🚀