package com.springboot.app.service;

import java.util.Map;

import org.springframework.http.ResponseEntity;

public interface ProductoService {

	public ResponseEntity<Map<String, Object>> listarProductos();
	
}
