package com.springboot.application.repository;


import java.util.List;

import com.springboot.application.model.Estoque;
import com.springboot.application.model.Produto;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface EstoqueRepository extends JpaRepository<Estoque, Long> {

	@Query(value = "select u from Estoque u where u.nome like %?1% ")
	List<Estoque> buscarPorNome(String nome);

	@Query(value = "select count(*) from Estoque")
	int quantidadeDeObjetosEstoque();
}
