<template>
    <div>
        <h1>Usuários</h1>
        <section>
            <h3>Lista de Usuários</h3>
            <form action="/listar" method="get">
                <input type="text" placeholder="Nome">
                <input type="submit" value="Pesquisar">
            </form>
            <button>Cadastrar Usuário</button>
            <table>
                <tr>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Usuário</th>
                    <th>Filial</th>
                    <th>Setor</th>
                    <th>Função</th>
                    <th>Ações</th>
                </tr>
                <!-- <tr v-for="usuario in usuarios">
                    <td>{{ usuario.nome }}</td>
                    <td>{{ usuario.email }}</td>
                    <td>{{ usuario.nomeUsuario }}</td>
                    <td>{{ usuario.filial }}</td>
                    <td>{{ usuario.setor }}</td>
                    <td>{{ usuario.funcao }}</td>
                    <td>
                        <button>Editar</button>
                        <button>Remover</button>
                    </td>
                </tr> -->
                {{usuarios}}
            </table>
        </section>
    </div>
</template>

<script>
export default {
    name: "Usuario",
    data: function() {
        return {
            cabecalho: {
                headers: new Headers().append("Access-Control-Allow-Origin","*")
                },
            usuarios: fetch('http://localhost:8080/usuario/listar', this.cabecalho).then(resposta => {
                console.log(resposta.json())
                return resposta.json()
                }),

        }
    }
}
</script>

<style>

</style>