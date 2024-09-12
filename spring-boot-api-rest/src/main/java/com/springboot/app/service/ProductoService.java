package com.springboot.app.service;

import java.util.Map;
import java.util.Optional;

import com.springboot.app.model.Producto;
import org.springframework.http.ResponseEntity;

public interface ProductoService {

	public ResponseEntity<Map<String, Object>> listarProductos();
	Producto guardarProducto(Producto producto);
	Optional<Producto> obtenerPorId(Long id);
	void eliminarProducto(Long id);


}
