package com.springboot.application.Repository;

import java.util.List;

import com.springboot.application.Model.Dispositivo;
import com.springboot.application.Model.Produto;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface DispositivoRepository extends JpaRepository<Dispositivo, Long> {

	@Query(value = "select u from Dispositivo u where u.nome like %?1% ")
	List<Dispositivo> buscarPorNome(String nome);

	@Query(value = "select count(*) from Dispositivo")
	int quantidadeDeObjetosDispositivo();
}