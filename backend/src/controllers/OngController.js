//Pacote que vem com o node, para criptografia
const crypto = require("crypto");

//Configurações de conexão com o DB
const connection = require("../database/connection");

module.exports = {
	//Listar ONGs
	async index(request, response){
		const ongs = await connection("ongs").select("*");

		return response.json(ongs);
	},
	
	//Cadastrar ONG
	async create(request, response) {
		//Retorna o que foi inserido como query na url
		const query = request.query;
		//Retorna os parâmetros
		const params = request.params;

		//Desestruturação, para pegar apenas o que deseja e evitar informações a mais
		const { name, email, whatsapp, city, uf } = request.body;

		//Gerar 4 bytes de caracteres aleatórios que serão convertidos em uma hash hexadecimal
		const id = crypto.randomBytes(4).toString("HEX");

		await connection("ongs").insert({
			id,
			name,
			email,
			whatsapp,
			city,
			uf
		});

		return response.json({ id });
	}
};