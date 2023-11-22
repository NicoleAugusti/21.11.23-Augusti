
let listaProdotti = [
{
    id: 1,
    nome: "Iphone",
    prezzo: 1000,
},
{
    id: 2,
    nome: "Mac",
    prezzo: 3000,
},

{
    id: 3,
    nome: "Scrivania",
    prezzo: 200,
},
{
    id: 4,
    nome: "Lampadari",
    prezzo: 600,
},
]

const nome = [ "Iphone", "Mac", "Scrivania", "Lampadari"]
nome.sort();
console.log(nome);
// expected output: Arrey ["Iphone "Lampadari", "Mac", "Scrivania"]

const prezzo = [1000, 3000, 200, 600]
prezzo.sort (function (a, b) {
    return a-b;
});
console.log (prezzo);
//espected output: Arrey [200,600,1000,3000]