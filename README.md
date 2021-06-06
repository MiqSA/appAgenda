# 📲 Agenda Telefônica

Essa aplicação contempla as funcionalidades básicas de uma agenda de contatos telefônicos.

## Sobre
Essa agenda possui o back-end desenvolvido em Python através do framework Django e o front-end desenvolvido em NodeJS através do framework Angular.

### Back-End

Responsável pela API REST de lista de contatos telefônicos. Como endpoints, destaca-se:
- Um endpoint para listar todos os contatos;
- Um endpoint para inserção de contatos, que não permita inserir um telefone já cadastrado;
- Um endpoint para atualização de contatos, que não permita inserir um telefone já cadastrado.

### Front-End
Responsável pelo consumo da API REST. Entre as funcionalidades básicas, destaca-se:

- O usuário deve poder ver a lista de todos os contatos;
- O usuário deve poder adicionar contatos;
- O usuário deve poder atualizar dados de um contato;
- O usuário deve poder deletar contatos.

## Demonstração da Aplicação

<p align="center">
<img src="frontend/to_readme/app_working.gif">
</p>


## Tecnologias Utilizadas

- [Angular](https://angular.io/)
- [NodeJs](https://nodejs.org/en/)
- [Django](https://www.djangoproject.com/)
- [Django REST Framework](https://www.django-rest-framework.org/)
- [POSTMAN](https://www.postman.com/)
- [Python](https://www.python.org/)

## Como utilizar

Para clonar essa aplicação, você precisará ter instalado em seu computador: [Git](https://git-scm.com) para clonar o repositório. Para o front-end: [Angular](https://angular.io/) e [NodeJs](https://nodejs.org/en/). Para o back-end: [Python](https://www.python.org/),  [Django](https://www.djangoproject.com/) e [Django REST Framework](https://www.django-rest-framework.org/). Do ser terminal digite:

```bash
# Clonar esse repositório
$ git clone https://github.com/MiqSA/appAgenda.git

# Entrar no repositório
$ cd appAgenda

# Entrar na pasta do back-end
$ cd back-end

# Criar ambiente virtual
$ python3 -m venv venv

# Ativar ambiente virtual
$ source venv/bin/activate

# Instalar dependências do back-end
$ pip install -r requirements.txt 

# Realizar o migrate
$ python manage.py migrate

# Subir aplicação API-REST
$ python manage.py runsever

# Aplicação estará rodando em http://localhost/8000/

# Em outra janela do terminal vá para pasta do front-end
 $ cd front-end/agenda-front

# Instale as dependências do node
 $ npm i

# Inicie o servidor
 $ ng server

# Aplicação estará rodando em http://localhost/4200/









