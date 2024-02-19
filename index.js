


const entrada = require('prompt-sync')({sigint: true});
const notificacao = "Conquer Online diz: ";
const lista = "Escolha sua classe para atacar: Mago (digite 1), Guerreiro (digite 2), Monge (digite 3), Ninja (digite 4)"

class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque = "";

        switch (this.tipo) {
            case "mago":
                ataque = "magia";
                break;

            case "guerreiro":
                ataque = "espada";
                break;

            case "monge":
                ataque = "artes marciais";
                break;

            case "ninja":
                ataque = "shuriken";
                break;

            default:
                ataque = "desconhecido";
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}
const mago = new Heroi("Presto", 15, "mago");
const guerreiro = new Heroi("Eric", 18, "guerreiro");
const monge = new Heroi("Mendel", 55, "monge");
const ninja = new Heroi("Jiraya", 25, "ninja");

console.log (notificacao + lista)

let classeheroi = entrada()
if(classeheroi ==1){
    mago.atacar();
}else if(classeheroi ==2){
    guerreiro.atacar();
}else if(classeheroi ==3){
    monge.atacar();
}else if(classeheroi ==4){
    ninja.atacar();
}else{
    console.log (notificacao + "Vejo que você ainda não se decidiu, tente novamente quando estiver pronto. ")};