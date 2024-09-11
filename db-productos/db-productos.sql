#Crear una base de datos en MySql de nombre -> appcibertec2024
CREATE DATABASE appcibertec2024;
USE appcibertec2024;
CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `descripcion` varchar(50) NOT NULL,
  `precio` double(10,2) NOT NULL,
  `cantidad` int(10) NOT NULL,
  `enable` varchar(1) NOT NULL DEFAULT 'S'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `productos` (`id`, `descripcion`, `precio`, `cantidad`, `enable`) VALUES
(1, 'Producto', 100.00, 9, 'N'),
(2, 'Laptop Lenovo', 2000.00, 2, 'S'),
(3, 'Monitor Teros 32 pulgadas', 450.00, 10, 'S'),
(4, 'Monitor AOC 21 pulgadas', 280.00, 3, 'S');

ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;
COMMIT;

SELECT id, descripcion from productos;