package com.springboot.app.serviceImplement;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.springboot.app.model.Producto;
import com.springboot.app.repository.ProductoRepository;
import com.springboot.app.service.ProductoService;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

@Service
public class ProductoServiceImplement implements ProductoService{
	@Autowired
	private EntityManager entityManager;

	@Autowired
	private ProductoRepository dao;
	
	@Override
	public ResponseEntity<Map<String, Object>> listarProductos() {
		Map<String,Object> respuesta = new HashMap<>();	
		List<Producto> productos = dao.findAll();
		
		if(!productos.isEmpty()) {
			respuesta.put("mensaje", "Lista de productos");
			respuesta.put("productos", productos);
			respuesta.put("status", HttpStatus.OK);
			respuesta.put("fecha", new Date());	
			return ResponseEntity.status(HttpStatus.OK).body(respuesta);
		}else {
			respuesta.put("mensaje", "No existen registros");
			respuesta.put("status", HttpStatus.NOT_FOUND);
			respuesta.put("fecha", new Date());	
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(respuesta);
		}
		
	}

	@Override
	public Optional<Producto> obtenerPorId(Long id){
		Producto producto = entityManager.find(Producto.class, id);
		return Optional.ofNullable(producto);
	}

	@Transactional
	@Override
	public Producto guardarProducto(Producto producto){
		if(producto.getId() == null){
			entityManager.persist(producto);
		}else {
			producto = entityManager.merge(producto);
		}
		return producto;
	}

	@Transactional
	@Override
	public void eliminarProducto(Long id){
		Producto producto = entityManager.find(Producto.class, id);
		if(producto != null) {
			entityManager.remove(producto);
		}
	}
}
