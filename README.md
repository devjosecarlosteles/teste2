# Workshop - Git

José Carlos Teles - Desenvovledor Backend Pl.

Gama Academy

É uma ferramenta de versionamento de código, criado pelo Linus Torvald.
_VCS - Version Control System_

## Controle de Versão

- Registro e listagem de alterações no projeto
- Reverter para versões anteriores
- Comparar ou lembrar de versões anteriores
- Registrar altor da alteração

## Tipos de Controle de Versão

### Local

Aquele famoso <strong>ctrl + c e ctrl +v</strong>

Resume-se em criar pastas e dados duplicados para que dessa forma seja possível
realizar alterações sem prejucar as outras versões

<table>
  <thead>
    <tr>
      <th>Vantagens</th>
      <th>Desvantagens</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Mais fácil</td>
      <td>Menos produtivo</td>
    </tr>
    <tr>
      <td></td>
      <td>Menos seguro</td>
    </tr>
     <tr>
      <td></td>
      <td>Falta de trabalho compartilhado</td>
    </tr>
  </tbody>
</table>

### Sistemas centralizados

Um sistema compartilhado com auxilio de um servidor.

<table>
  <thead>
    <tr>
      <th>Vantagens</th>
      <th>Desvantagens</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Maior controle das atividades</td>
      <td>Maior custo para manter</td>
    </tr>
    <tr>
      <td>Várias pessoas trabalhando no mesmo projeto</td>
      <td>Maior preocupação com segurança</td>
    </tr>
     <tr>
      <td></td>
      <td>Projetos não ficam na máquina e sim no servidor</td>
    </tr>
  </tbody>
</table>

### Sistemas Distribuidos

Git, Mercurial, são exemplos desse tipo de sistema a ideia deles é pegar o melhor dos dois mundos, a facilidade do sistema local e a capacidade de várias pessoas trabalhando no projeto do sistema centralizado.

<table>
  <thead>
    <tr>
      <th>Vantagens</th>
      <th>Desvantagens</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Repositório local e remoto</td>
      <td>Maior curva de aprendizado</td>
    </tr>
    <tr>
      <td>Mais seguro (pois são projetos abertos ou mantidos por grandes palyers)</td>
      <td>Mais limitação de controle</td>
    </tr>
  </tbody>
</table>

## Repositório

É o local onde ficam armazendas todas ramificações e commits do nosso git

tudo fica armazenado dentro de uma pasta oculta .git

### Criando um repositório local

```shell
git init
```

### Criando um repositório no github

Vamos criar um repositório no github que será o nosso repositório remoto.

### Clonando repositórios

```shell
git clone <url>
```

## Commit

O commit é um comentário na história do nosso repositório, onde explicamos o que foi feito e deixamos marcado na linha do tempo.

Adicionando alterações

```shell
git add .
```

Adicionando arquivos "solitários"

```shell
git add FILENAME.EXTENSION
```

Adicionando arquivo por extensão

```shell
git add *.EXTENSION
```

Realizando commit

```shell
git commit -m "first commit"
```

Agora vamos ver nosso comit usando o _git log_

```shell
git log
```

Filtrando busca por datas

```shell
git log --since=2023-11-01
```

```shell
git log --until=2023-11-01
```

Filtrando busca por autor

```shell
git log --author=devjosecarlosteles
```

Filtrando pro texto

```shell
git log --grep="first"
```

Quando eu faço uma mudança num arquivo eu estou deixando ele no estado de "modified", quando eu uso o _git add_ eu estou deixando arquivo com o estado de "staged" e por fim quando eu comito esse arquivo ele entra no estado "commited"

Usamos _git status_ para ver os estados dos nossos arquivos.

### Comits Semântica

<table>
  <thead>
    <tr>
      <th>Commit</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Build</td>
      <td>Qualquer alteração que impactam exatamente a build, novas dependências, adição de ferramentas.</td>
    </tr>
    <tr>
      <td>docs</td>
      <td>alterações na documentação/td>
    </tr>
    <tr>
      <td>docs</td>
      <td>alterações na documentação/td>
    </tr>
    <tr>
      <td>refactor</td>
      <td>Refatorações, ajustes na qualidade do código e implementação de "clean code"</td>
    </tr>
    <tr>
      <td>feat</td>
      <td>Features (novidades no código), novas funcionalidades na aplicação</td>
    </tr>
    <tr>
      <td>fix</td>
      <td>Correção de bugs</td>
    </tr>
  </tbody>
</table>

## Outros comandos

### Desfazendo alterações

git restore FILENAME.EXTENSION

### Corrigindo mensagem do último commit

Cuidados: ao fazer você pode adicionar novos arquivos no seu último commit

```shell
git commit --amend -m "new message"
```

### Revertendo os commits

```shell
git reset hash --hard

git reset HEAD
```

## Branchs

Criando universos parelelos

```sh
git branch branchname
```

Viajando entre universos

```sh
git branch branchname
```

```sh
git switch branchname
```

## Pull

Baixando dados do nosso repositório remoto

```sh
git pull
```

## Merge

Unificando universos paralelos

```sh
git merge branchname
```

## Pull Request (PR)

## Git ignore

## Terminal

## Ferramentas

- Github desktop
- Git leans
- commitlint
