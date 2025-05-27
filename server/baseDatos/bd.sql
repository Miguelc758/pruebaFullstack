CREATE TABLE IF NOT EXISTS vehiculos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    placa VARCHAR(20) UNIQUE NOT NULL,
    marca VARCHAR(50) NOT NULL,
    linea VARCHAR(50) NOT NULL,
    modelo VARCHAR(10) NOT NULL,
    descripcion VARCHAR(100),
    mId VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS revisiones (
    id INT AUTO_INCREMENT PRIMARY KEY,
    vehiculo_id INT NOT NULL,
    fecha_hora DATETIME NOT NULL,
    estado ENUM('pendiente', 'completada', 'cancelada') DEFAULT 'pendiente',
    tecnico VARCHAR(100) NOT NULL,
    comentarios TEXT,
    FOREIGN KEY (vehiculo_id) REFERENCES vehiculos(id)
);

CREATE TABLE IF NOT EXISTS revision_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    revision_id INT NOT NULL,
    item_nombre VARCHAR(100) NOT NULL,
    resultado ENUM('aprobado', 'rechazado', 'observacion') NOT NULL,
    comentarios TEXT,
    FOREIGN KEY (revision_id) REFERENCES revisiones(id)
);