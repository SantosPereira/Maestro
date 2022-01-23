package com.springboot.application.controller;

import java.util.List;
import java.util.Map;
import java.util.HashMap;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.springboot.application.model.Dispositivo;
import com.springboot.application.repository.DispositivoRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/dispositivo")
// @Controller
public class DispositivoController {

	@Autowired
	private DispositivoRepository dispositivoRepository;

	public DispositivoController(DispositivoRepository dispositivoRepository) {
		super();
		this.dispositivoRepository = dispositivoRepository;
	}

	// :::::::::::::::::::::::::::::::::: CRUD ::::::::::::::::::::::::::::::::::::

	// ::::: CREATE
	@PostMapping("/cadastrar")
	public Map<String, String> cadastrar(Dispositivo dispositivo) {
		dispositivoRepository.save(dispositivo);
		Map<String, String> json = new HashMap<>();
		json.put("Resposta","Cadastro concluído!");
		return json;
	}

	// ::::: READ
	@GetMapping("/listar")
	public List<Dispositivo> listarTodos(Dispositivo dispositivo) {
		return dispositivoRepository.findAll();
	}
	public Optional<Dispositivo> listar(Dispositivo dispositivo) {
		return dispositivoRepository.findById(dispositivo.getId());
	}

	// ::::: UPDATE
	@GetMapping("/editar/{id}")
	public Optional<Dispositivo> editardispositivoLer(@PathVariable("id") Long id) {
		Optional<Dispositivo> dispositivo = dispositivoRepository.findById(id);
		return listar(dispositivo.get());
	}
	@PostMapping("/editar/{id}")
	public Optional<Dispositivo> editardispositivoEscrever(@PathVariable("id") Long id, Dispositivo dispositivo) {
		cadastrar(dispositivo);
		return listar(dispositivo);
	}

	// ::::: DELETE
	@GetMapping("/remover/{id}")
	public Map<String, String> remover(@PathVariable("id") Long id) {
		Optional<Dispositivo> dispositivo = dispositivoRepository.findById(id);
		dispositivoRepository.delete(dispositivo.get());
		Map<String, String> json = new HashMap<>();
		json.put("Resposta", "Registro apagado!");
		return json;
	}
	// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	
	@PostMapping("**/buscarPorNome") // aqui faz a busca pelo nome
	public List<Dispositivo> buscarPorNome(@RequestParam("nome") String nome) {
		return dispositivoRepository.buscarPorNome(nome);
	}

	// @GetMapping("/dispositivos/exportarCsv")
	// public void exportCSV(HttpServletResponse response) throws Exception {

	// 	// set file name and content type
	// 	String filename = "dispositivo.csv";

	// 	response.setContentType("text/csv");
	// 	response.setHeader(HttpHeaders.CONTENT_DISPOSITION,
	// 			"attachment; filename=\"" + filename + "\"");

	// 	// create a csv writer
	// 	StatefulBeanToCsv<Dispositivo> writer = new StatefulBeanToCsvBuilder<Dispositivo>(response.getWriter())
	// 			.withQuotechar(CSVWriter.NO_QUOTE_CHARACTER).withSeparator(CSVWriter.DEFAULT_SEPARATOR)
	// 			.withOrderedResults(false).build();

	// 	// write all employees to csv file
	// 	writer.write(dispositivoRepository.findAll());

	// }

}
