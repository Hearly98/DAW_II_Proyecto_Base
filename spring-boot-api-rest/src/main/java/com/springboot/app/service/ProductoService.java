package com.springboot.app.service;

import java.util.Map;

import com.springboot.app.model.Producto;
import org.springframework.http.ResponseEntity;

public interface ProductoService {

	public ResponseEntity<Map<String, Object>> listarProductos();
	public ResponseEntity<Map<String, Object>> agregarProductos(Producto producto);
	public ResponseEntity<Map<String, Object>> listarProductosPorId(Long id);
	public ResponseEntity<Map<String, Object>> editarProductos(Producto prod, Long id);
	public ResponseEntity<Map<String, Object>> listarProductosPorEnabled();

	public ResponseEntity<Map<String, Object>> eliminarProductos(Long id);


}
