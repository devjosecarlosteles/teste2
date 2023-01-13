class Pessoa {
  constructor () {
    this.pessoa = {
      nome: 'José'
    }
  }

  novaPessoa(nome) {
    return this.pessoa = { nome }
  }

  buscaPessoa() {
    return this.pessoa
  }
}