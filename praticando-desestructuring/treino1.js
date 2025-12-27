const obj = {
    nome: 'Victor',
    idade: 25,
    email: 'victorameno@hotmail.com'
}

Teste(obj);

function Teste({ nome, idade, email }) {
    console.log("Nome: " + nome, "Idade: " + idade, "E-mail: " + email);
}