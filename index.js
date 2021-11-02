// Importa o módulo express para esse arquivo
const express = require("express");
// Instancia uma referência do express no projeto
const app = express();
const port = 3000; // Const para armanezar a porta do servidor

const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");


// Rota principal que recebe uma função de callback que recebe dois parametros: 
// req de requisição
// res de resposta
// Substituição de function por arrow function
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/index", (req, res) => {
    const lista1 = ["Backend", "Frontend", "Fullstack"];
    const pokedex = [{numero: 25, nome: "Gabriel"},{numero:},{}];
    const analyticsList = ["Engenharia de dados", "Ciência de dados"];
    // Renderizo o arquivo "index.ejs", o EJS já busca dentro da pasta views.
    // Junto com ele estou enviando alguns dados para serem usados na página
    res.render("index", { 
        nome: "Marcos", 
        devList: lista1, 
        analyticsList: analyticsList
    });
});

// Liga o servidor na porta especificada em port
// Adicionando a const port e uma arow function de callback para mostrar no console que o servidor está rodando.
app.listen(port, () => console.log(`Projeto funcionando: http://localhost:${port}`));