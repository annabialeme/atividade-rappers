import { Router } from "express";

const rappersRoutes = Router();

let rappers = [
    {
        id: Number(Math.floor(Math.random() * 999999) +1),
        nome: "Beyoncé",
        idade: 43,
        descriçãoFisica : "morena, cabelo loiro, cantora",
        envolvimentoNoCrime: true,
        
    },
    {
        id: Number(Math.floor(Math.random() * 999999) +1),
        nome: "Jay-Z",
        idade: 54,
        descriçãoFisica : "negro, cabelo preto, casado",
        envolvimentoNoCrime: true,
    },
    {
        id: Number(Math.floor(Math.random() * 999999) +1),
        nome: "Justin Bieber",
        idade: 30,
        descriçãoFisica : "branco, cabelo castanho claro, cantor",
        envolvimentoNoCrime: false,
    }, 
    {
        id: Number(Math.floor(Math.random() * 999999) +1),
        nome: "Selena Gomez",
        idade: 32,
        descriçãoFisica : "branca, cabelo castanho escuro, cantora",
        envolvimentoNoCrime: false,
    }
];

// Rota para listar todos os rappers 
rappersRoutes.get("/", (req, res) => {
    return res.status(200).json(rappers);
});

// Rota para buscar um rapper pelo id
rappersRoutes.get("/:id", (req, res) => {
    const { id } = req.params;

// Busca um rapper pelo id no array de rappers
  const rapper = rappers.find((rapper) => rapper.id == id);

// Verifica se o rapper foi encontrado
  if (!rapper) {
    return res
      .status(404)
      .json({ message: `Rapper com id ${id} não encontrado!` });
  }

  return res.status(200).json(rapper);
});

// Rota para atualizar um rapper pelo id
rappersRoutes.put("/:id", (req, res) => {
    const { id } = req.params;
    const { nome, idade, descriçãoFisica, envolvimentoNoCrime } = req.body;

// Busca um rapper pelo id no array de rappers
  const rapper = rappers.find((r) => r.id == id);

// Validação dos campos obrigatórios
if (!nome) {
    return res.status(400).json({
      message: "O campo nome é obrigatório!",
    });
  }
// Validação de existência no envolvimento no crime
if (envolvimentoNoCrime != "sim" && envolvimentoNoCrime != "não") {
    return res.status(400).send({
      message: "Digite 'sim' ou 'não'!",
    });
  }

// Validação da idade como um número inteiro
if (Number.isInteger(idade) == false) {
    return res.status(400).send({
      message: "A idade do rapper deve ser um número inteiro!",
    });
  }
  
    rapper.nome = nome;
    rapper.idade = idade;
    rapper.descriçãoFisica = descriçãoFisica;
    rapper.envolvimentoNoCrime = envolvimentoNoCrime || [];
  
    return res.status(200).json({
      message: "Rapper atualizado com sucesso!",
      rapper,
    });
  });

// Rota para deletar um rapper
rappersRoutes.delete("/:id", (req, res) => {
    const { id } = req.params;

// Busca rappers pelo id no array de rappers
const rappers = rappers.find((rappers) => rappers.id == id);

// Verifica se o rapper foi encontrado
if (!rapper) {
    return res
      .status(404)
      .json({ message: `Rapper com id ${id} não encontrado!` });
    }