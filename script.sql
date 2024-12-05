CREATE DATABASE evaluacion_david_solis CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE evaluacion_david_solis;

-- Tabla Usuario
CREATE TABLE Usuario (
  id INT AUTO_INCREMENT PRIMARY KEY, 
  nombre VARCHAR(100) NOT NULL,
  fecha DATETIME NOT NULL,
  telefono INT NOT NULL,
  correo VARCHAR(100) NOT NULL UNIQUE, 
  creacion DATETIME DEFAULT CURRENT_TIMESTAMP,
  EstadoUsuarioId INT,
  
  -- clave foránea hacia la tabla EstadoUsuario
  CONSTRAINT FK_EstadoUsuario FOREIGN KEY (EstadoUsuarioId) REFERENCES EstadoUsuario(id)
    ON DELETE SET NULL
    ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Tabla EstadoUsuario
CREATE TABLE EstadoUsuario (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(100) NOT NULL,
  clave VARCHAR(100) NOT NULL 
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO EstadoUsuario (titulo, clave) VALUES ('Activo', 'activo');
INSERT INTO EstadoUsuario (titulo, clave) VALUES ('Baja Permanente', 'baja');

-- Usuarios fijos
INSERT INTO Usuario (nombre, fecha, telefono, correo, creacion, estadoUsuarioId)
VALUES
('Usuario1', '2024-11-29', 12345678, 'usuario1@gmail.com', '2024-11-29', 1),
('Usuario2', '2024-11-29', 13245867, 'usuario2@gmail.com', '2024-11-29', 1),
('Usuario3', '2024-10-29', 87562314, 'usuario3@gmail.com', '2024-10-29', 2),
('Usuario4', '2024-10-29', 74514358, 'usuario4@gmail.com', '2024-10-29', 2);

CREATE TABLE punteo_usuario (
  id INT AUTO_INCREMENT PRIMARY KEY,
  idUsuario INT,
  punteo INT,
  CONSTRAINT FK_IDUsuario FOREIGN KEY (idUsuario) REFERENCES Usuario(id)
    ON DELETE SET NULL
    ON UPDATE CASCADE
);