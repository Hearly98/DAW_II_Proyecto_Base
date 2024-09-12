package com.springboot.app.controller;

import java.util.Map;

import com.springboot.app.model.Producto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.springboot.app.service.ProductoService;

@RestController
@RequestMapping("/api/")
public class ProductoController {

	@Autowired
	private ProductoService service;
	
	@GetMapping("/productos")
	public ResponseEntity<Map<String, Object>> allProducto(){
		return service.listarProductos();
	}
	@GetMapping("/productos/{id}")
	public ResponseEntity<Producto>obtenerProductoPorId(@PathVariable("id") Long id){
		return service.obtenerPorId(id)
				.map(producto -> new ResponseEntity<>(producto, HttpStatus.OK))
				.orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
	}
	@PostMapping("/productos/save")
	public ResponseEntity<Producto> guardarProducto(@RequestBody Producto producto){
		Producto guardarProducto = service.guardarProducto(producto);
		return new ResponseEntity<>(guardarProducto, HttpStatus.CREATED);
	}
	@DeleteMapping("/productos/delete/{id}")
	public ResponseEntity<Void> eliminarProducto(@PathVariable("id") Long id){
		service.eliminarProducto(id);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
}
