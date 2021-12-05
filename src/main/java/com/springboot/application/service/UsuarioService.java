package com.springboot.application.service;

import java.util.List;

import com.springboot.application.Model.Usuario;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioService extends JpaRepository<Usuario, Long> {

	List<Usuario> buscarTodosUsuarios();

	Usuario salvarUsuario(Usuario usuario);

	Usuario pegarUsuarioPeloId(Long id);

	Usuario atualizarUsuario(Usuario usuario);

	void apagarUsuarioPeloId(Long id);

}
