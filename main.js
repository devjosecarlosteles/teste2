class Pessoa {
  constructor () {
    this.pessoa = {
      nome: 'José',
      idade: 18
    }
  }

  novaPessoa(nome) {
    return this.pessoa = { nome }
  }

  buscaPessoa() {
    return this.pessoa
  }
}