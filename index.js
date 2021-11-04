// Importa o módulo express para esse arquivo
const express = require("express");
// Instancia uma referência do express no projeto
const app = express();
const port = 3000; // Const para armanezar a porta do servidor

const path = require("path");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

app.set("view engine", "ejs");

// Declarando uma var chamada message com uma string vazia, ela vai ser usada para ser passada para o HTML como mensagem de confirmação
let message = "";

// Rota principal que recebe uma função de callback que recebe dois parametros: 
// req de requisição
// res de resposta
// Substituição de function por arrow function
app.get("/", (req, res) => {
    const lista1 = ["Backend", "Frontend", "Fullstack"];
    // const pokedex = [{numero: 25, nome: "Gabriel"},{numero:},{}];
    const analyticsList = ["Engenharia de dados", "Ciência de dados"];
    // Renderizo o arquivo "index.ejs", o EJS já busca dentro da pasta views.
    // Junto com ele estou enviando alguns dados para serem usados na página

    // Fazer com que a variavel message fique "vazia" depois de 1 segundo.
    // Isso vai fazer com que ela não apareça novamente quando recarregar a página
    setTimeout(() => {
      message = "";
    }, 1000);

    res.render("index", {
      nome: "Juliane", 
      devList: lista1, 
      analyticsList: analyticsList,
      message
    });
});

// Essa rota está sendo chamada pelo formulário do ejs, ela não pode ser acessada pela URL
// rotas do tipo POST não podem ser acessadas pela URL, e os dados são passados pelo corpo da requisição, tornando mais segura a transação
app.post("/subscription", (req, res) => {
  const { nome, email } = req.body;
  message = `Parabéns ${nome}, sua inscrição foi realizada com sucesso! Um e-mail foi enviado para: ${email}`;
  res.redirect("/");
});

// Liga o servidor na porta especificada em port
// Adicionando a const port e uma arow function de callback para mostrar no console que o servidor está rodando.
app.listen(port, () => console.log(`Projeto funcionando: http://localhost:${port}`));