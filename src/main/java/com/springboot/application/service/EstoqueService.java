package com.springboot.application.Service;

import java.util.List;

import com.springboot.application.Model.Estoque;

import org.springframework.data.jpa.repository.JpaRepository;

public interface EstoqueService extends JpaRepository<Estoque, Long> {

	List<Estoque> buscarTodosOsEstoques();

	Estoque salvarEstoque(Estoque estoque);

	Estoque pegarEstoquePeloId(Long id);

	Estoque atualizarEstoque(Estoque estoque);

	void apagarEstoquePeloId(Long id);

}
