import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import express from 'express';
import compression from 'compression';
import usuarioRoutes from "./routes/usuarioRoutes"

const app = express();

app.use(morgan("dev"));

// Headers de seguridad
app.use(helmet());

// añadiendo json a la configuración
app.use(express.json());

// opciones del url
app.use(express.urlencoded({ extended: true }));

// sanitizando la request
app.use(require('xss-clean')());

// añadiendo compresión gzip
app.use(compression());

// Configurando cors
app.use(cors());
app.options('*', cors());

// rutas
app.use('/', usuarioRoutes);


// exportando el servidor configurado
export default app;