package com.springboot.application.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.application.model.Usuario;
import com.springboot.application.repository.UsuarioRepository;
import com.springboot.application.service.UsuarioService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/usuario")
// @Controller
public class UsuarioController {

	@Autowired
	private UsuarioRepository usuarioRepository;

	@Autowired
	private UsuarioService usuarioService;

	public UsuarioController(UsuarioService usuarioService) {
		super();
		this.usuarioService = usuarioService;
	}

	// :::::::::::::::::::::::::::::::::: CRUD ::::::::::::::::::::::::::::::::::::

	// ::::: CREATE
	@PostMapping("/cadastrar")
	public Map<String, String> cadastrar(Usuario usuario) {
		usuarioRepository.save(usuario);
		Map<String, String> json = new HashMap<>();
		json.put("Resposta","Cadastro concluído!");
		return json;
	}

	// ::::: READ
	@GetMapping("/listar")
	public List<Usuario> listarTodos(Usuario usuario) {
		return usuarioRepository.findAll();
	}
	public Optional<Usuario> listar(Usuario usuario) {
		return usuarioRepository.findById(usuario.getId());
	}

	// ::::: UPDATE
	@GetMapping("/editar/{id}")
	public Optional<Usuario> editarUsuarioLer(@PathVariable("id") Long id) {
		Optional<Usuario> usuario = usuarioRepository.findById(id);
		return listar(usuario.get());
	}
	@PostMapping("/editar/{id}")
	public Optional<Usuario> editarUsuarioEscrever(@PathVariable("id") Long id, Usuario usuario) {
		cadastrar(usuario);
		return listar(usuario);
	}

	// ::::: DELETE
	@GetMapping("/remover/{id}")
	public Map<String, String> remover(@PathVariable("id") Long id) {
		Optional<Usuario> usuario = usuarioRepository.findById(id);
		usuarioRepository.delete(usuario.get());
		Map<String, String> json = new HashMap<>();
		json.put("Resposta", "Registro apagado!");
		return json;
	}
	// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	
	@PostMapping("**/buscarPorNome") // aqui faz a busca pelo nome
	public List<Usuario> buscarPorNome(@RequestParam("nome") String nome) {
		return usuarioRepository.buscarPorNome(nome);
	}

	// // @PostMapping("/salvar")
	// public void salvarUsuario(@Valid Usuario usuario, BindingResult result,
	// 		RedirectAttributes redirectAttributes) throws Exception {

	// 	if (result.hasErrors()) {
	// 		redirectAttributes.addFlashAttribute("mensagem", "deu merda a parada");
	// 	}
	// 	try {
	// 		servicoGeral.salvar(usuario);
	// 		redirectAttributes.addFlashAttribute("mensagem", "cadastrado com sucess");
	// 	} catch (Exception e) {
	// 		redirectAttributes.addFlashAttribute("mensagem", "Nao cadastrou pow!");
	// 	}
	// }

	// @GetMapping("/exportarCsv")
	// public void exportCSV(HttpServletResponse response) throws Exception {
	// 	String filename = "usuario.csv";

	// 	response.setContentType("text/csv");
	// 	response.setHeader(HttpHeaders.CONTENT_DISPOSITION,
	// 			"attachment; filename=\"" + filename + "\"");

	// 	// create a csv writer
	// 	StatefulBeanToCsv<Usuario> writer = new StatefulBeanToCsvBuilder<Usuario>(response.getWriter())
	// 			.withQuotechar(CSVWriter.NO_QUOTE_CHARACTER).withSeparator(CSVWriter.DEFAULT_SEPARATOR)
	// 			.withOrderedResults(false).build();

	// 	// write all employees to csv file
	// 	writer.write(usuarioRepository.findAll());
	// }

	// @RequestMapping(value = "/objetosCadastradosQuantidade", method = RequestMethod.GET, produces = "application/json")
	// public @ResponseBody String retornaQuantidadeDeObjetosCadastrados() {
	// 	ArrayList QuantidadeDosObjetos = new ArrayList();

	// 	int listaUsuario = usuarioRepository.quantidadeDeObjetos();
	// 	int listaProduto = produtoRepository.quantidadeDeObjetosProduto();
	// 	int listaEstoque = estoqueRepository.quantidadeDeObjetosEstoque();
	// 	int listaDispositivo = dispositivoRepository.quantidadeDeObjetosDispositivo();

	// 	QuantidadeDosObjetos.add(listaUsuario);
	// 	QuantidadeDosObjetos.add(listaProduto);
	// 	QuantidadeDosObjetos.add(listaEstoque);
	// 	QuantidadeDosObjetos.add(listaDispositivo);

	// 	Gson gson = new GsonBuilder().setPrettyPrinting().create();
	// 	// System.out.println(gson.toJson(variosObjetos));
	// 	return gson.toJson(QuantidadeDosObjetos);
	// }
}