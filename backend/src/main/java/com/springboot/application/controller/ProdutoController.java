package com.springboot.application.controller;

import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.HashMap;
import java.util.Optional;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.opencsv.CSVWriter;
import com.opencsv.bean.StatefulBeanToCsv;
import com.opencsv.bean.StatefulBeanToCsvBuilder;
import com.springboot.application.model.Estoque;
import com.springboot.application.model.Produto;
import com.springboot.application.model.Usuario;
import com.springboot.application.repository.EstoqueRepository;
import com.springboot.application.repository.ProdutoRepository;
import com.springboot.application.service.ProdutoService;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/produto")
// @Controller
public class ProdutoController {

	@Autowired
	private ProdutoRepository produtoRepository;

	@Autowired
	private ProdutoService produtoService;

	@Autowired
	private EstoqueRepository estoqueRepository;

	public ProdutoController(ProdutoService produtoService) {
		super();
		this.produtoService = produtoService;
	}



	// :::::::::::::::::::::::::::::::::: CRUD ::::::::::::::::::::::::::::::::::::

	// ::::: CREATE
	@PostMapping("/cadastrar")
	public Map<String, String> cadastrar(Produto produto) {
		produtoRepository.save(produto);
		Map<String, String> json = new HashMap<>();
		json.put("Resposta","Cadastro concluído!");
		return json;
	}

	// ::::: READ
	@GetMapping("/listar")
	public List<Produto> listarTodos(Produto produto) {
		return produtoRepository.findAll();
	}
	public Optional<Produto> listar(Produto produto) {
		return produtoRepository.findById(produto.getId());
	}

	// ::::: UPDATE
	@GetMapping("/editar/{id}")
	public Optional<Produto> editarProdutoLer(@PathVariable("id") Long id) {
		Optional<Produto> produto = produtoRepository.findById(id);
		return listar(produto.get());
	}
	@PostMapping("/editar/{id}")
	public Optional<Produto> editarProdutoEscrever(@PathVariable("id") Long id, Produto produto) {
		cadastrar(produto);
		return listar(produto);
	}

	// ::::: DELETE
	@GetMapping("/remover/{id}")
	public Map<String, String> remover(@PathVariable("id") Long id) {
		Optional<Produto> produto = produtoRepository.findById(id);
		produtoRepository.delete(produto.get());
		Map<String, String> json = new HashMap<>();
		json.put("Resposta", "Registro apagado!");
		return json;
	}
	// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	
	@PostMapping("**/buscarPorNome") // aqui faz a busca pelo nome
	public List<Produto> buscarPorNome(@RequestParam("nome") String nome) {
		return produtoRepository.buscarPorNome(nome);
	}

	// @GetMapping("/produto/exportarCsv")
	// public void exportCSV(HttpServletResponse response) throws Exception {

	// 	// set file name and content type
	// 	String filename = "produto.csv";

	// 	response.setContentType("text/csv");
	// 	response.setHeader(HttpHeaders.CONTENT_DISPOSITION,
	// 			"attachment; filename=\"" + filename + "\"");

	// 	// create a csv writer
	// 	StatefulBeanToCsv<Produto> writer = new StatefulBeanToCsvBuilder<Produto>(response.getWriter())
	// 			.withQuotechar(CSVWriter.NO_QUOTE_CHARACTER).withSeparator(CSVWriter.DEFAULT_SEPARATOR)
	// 			.withOrderedResults(false).build();

	// 	// write all employees to csv file
	// 	writer.write(produtoRepository.findAll());
	// }

}
