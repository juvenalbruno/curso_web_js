function pessoa(nome){
    this.nome = nome

    this.falar = function (){
        console.log(`Meu nome é ${nome}`)
    }
}
const p1 = new pessoa('Juvenal')
p1.falar()