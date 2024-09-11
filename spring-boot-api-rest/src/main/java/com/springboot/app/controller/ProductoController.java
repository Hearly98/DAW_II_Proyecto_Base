package com.springboot.app.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.app.service.ProductoService;

@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:4200/")
public class ProductoController {

	@Autowired
	private ProductoService service;
	
	@GetMapping("/productos")
	public ResponseEntity<Map<String, Object>> allProducto(){
		return service.listarProductos();
	}
}
