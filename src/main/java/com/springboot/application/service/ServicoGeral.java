package com.springboot.application.Service;

import com.springboot.application.Model.Usuario;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ServicoGeral {

	@Autowired
	private UsuarioServicoTeste usuarioServicoTeste;

	public boolean salvar(Usuario usuario) throws Exception {
		if (!usuarioServicoTeste.validar(usuario)) {
			throw new Exception("Usuario nao existe");
		}

		usuarioServicoTeste.salvar(usuario);

		return true;
	}
}