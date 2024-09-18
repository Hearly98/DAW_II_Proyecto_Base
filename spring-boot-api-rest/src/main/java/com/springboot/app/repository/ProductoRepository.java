package com.springboot.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.springboot.app.model.Producto;

import java.util.Collection;
import java.util.List;
import java.util.Optional;


@Repository
public interface ProductoRepository extends JpaRepository<Producto, Long>{
    @Query(
            value = "SELECT * FROM PRODUCTOS pd WHERE pd.enable = :enabled",
            nativeQuery = true)
    List<Producto> findByEnable(String enabled);
}
