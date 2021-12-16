package com.springboot.application.Service;

import java.util.List;

import com.springboot.application.Model.Dispositivo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

public interface DispositivoService extends JpaRepository<Dispositivo, Long> {

	List<Dispositivo> buscarTodosDispositivos();

	Dispositivo salvarDispositivo(Dispositivo dispositivo);

	Dispositivo pegarDispositivoPeloId(Long id);

	Dispositivo atualizarDispositivo(Dispositivo dispositivo);

	void apagarDispositivoPeloId(Long id);
}
