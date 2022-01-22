package com.springboot.application.controller;

import java.util.List;
import java.util.Map;
import java.util.HashMap;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.springboot.application.model.Estoque;
import com.springboot.application.repository.EstoqueRepository;

@RestController
@RequestMapping("/estoque")
// @Controller
public class EstoqueController {

	@Autowired
	private EstoqueRepository estoqueRepository;

	// :::::::::::::::::::::::::::::::::: CRUD ::::::::::::::::::::::::::::::::::::

	// ::::: CREATE
	@PostMapping("/cadastrar")
	public Map<String, String> cadastrar(Estoque estoque) {
		estoqueRepository.save(estoque);
		Map<String, String> json = new HashMap<>();
		json.put("Resposta","Cadastro concluído!");
		return json;
	}

	// ::::: READ
	@GetMapping("/listar")
	public List<Estoque> listarTodos(Estoque estoque) {
		return estoqueRepository.findAll();
	}
	public Optional<Estoque> listar(Estoque estoque) {
		return estoqueRepository.findById(estoque.getId());
	}

	// ::::: UPDATE
	@GetMapping("/editar/{id}")
	public Optional<Estoque> editarEstoqueLer(@PathVariable("id") Long id) {
		Optional<Estoque> estoque = estoqueRepository.findById(id);
		return listar(estoque.get());
	}
	@PostMapping("/editar/{id}")
	public Optional<Estoque> editarEstoqueEscrever(@PathVariable("id") Long id, Estoque estoque) {
		cadastrar(estoque);
		return listar(estoque);
	}

	// ::::: DELETE
	@GetMapping("/remover/{id}")
	public Map<String, String> remover(@PathVariable("id") Long id) {
		Optional<Estoque> estoque = estoqueRepository.findById(id);
		estoqueRepository.delete(estoque.get());
		Map<String, String> json = new HashMap<>();
		json.put("Resposta", "Registro apagado!");
		return json;
	}
	// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	
	@PostMapping("**/buscarPorNome") // aqui faz a busca pelo nome
	public List<Estoque> buscarPorNome(@RequestParam("nome") String nome) {
		return estoqueRepository.buscarPorNome(nome);
	}


	// // aqui gera arquivo csv
	// @GetMapping("/estoque/exportarCsv")
	// public void exportCSV(HttpServletResponse response) throws Exception {

	// 	// set file name and content type
	// 	String filename = "estoque.csv";

	// 	response.setContentType("text/csv");
	// 	response.setHeader(HttpHeaders.CONTENT_DISPOSITION,
	// 			"attachment; filename=\"" + filename + "\"");

	// 	// create a csv writer
	// 	StatefulBeanToCsv<Estoque> writer = new StatefulBeanToCsvBuilder<Estoque>(response.getWriter())
	// 			.withQuotechar(CSVWriter.NO_QUOTE_CHARACTER).withSeparator(CSVWriter.DEFAULT_SEPARATOR)
	// 			.withOrderedResults(false).build();

	// 	// write all employees to csv file
	// 	writer.write(estoqueRepository.findAll());

	// }

	// //
	// // @GetMapping("/estoque/exportarPDF")
	// // public void exportar_PDF(List<Estoque> listaEstoque, HttpServletResponse
	// // response) {
	// //
	// // }

	// @GetMapping("/listar")
	// public ModelAndView listaEstoque() {
	// 	ModelAndView mv = new ModelAndView("pdf_estoqueListar");
	// 	mv.addObject("listaEstoque", estoqueRepository.findAll());

	// 	return mv;
	// }

	// @GetMapping("/download-pdf")
	// public void downloadPDFResource(HttpServletResponse response) {
	// 	try {
	// 		Path file = Paths.get(estoquePdfGerar.generatePdf().getAbsolutePath());
	// 		if (Files.exists(file)) {
	// 			response.setContentType("application/pdf");
	// 			response.addHeader("Content-Disposition",
	// 					"attachment; filename=" + file.getFileName());
	// 			Files.copy(file, response.getOutputStream());
	// 			response.getOutputStream().flush();
	// 		}
	// 	} catch (DocumentException | IOException ex) {
	// 		ex.printStackTrace();
	// 	}
	// }

}
