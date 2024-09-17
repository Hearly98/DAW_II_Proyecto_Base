package com.springboot.app.controller;

import java.util.Map;

import com.springboot.app.model.Producto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.springboot.app.service.ProductoService;

@RestController
@RequestMapping("/api/productos")
public class ProductoController {

	@Autowired
	private ProductoService service;
	
	@GetMapping("/")
	public ResponseEntity<Map<String, Object>> allProducto(){
		return service.listarProductos();
	}
	@GetMapping("/{id}")
	public ResponseEntity<Map<String, Object>> obtenerProductoPorId(@PathVariable("id") Long id){
		return service.listarProductosPorId(id);
	}
	@PostMapping("/save")
	public ResponseEntity<Map<String, Object>> guardarProducto(@RequestBody Producto producto){
		return service.agregarProductos(producto);
	}
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<Map<String, Object>> eliminarProducto(@PathVariable("id") Long id){
		return service.eliminarProductos(id);
	}
	@GetMapping("/enable")
	public ResponseEntity<Map<String, Object>> listarPorEnable(){
		return service.listarProductosPorEnabled();
	}

}
