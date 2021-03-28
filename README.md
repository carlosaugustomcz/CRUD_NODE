CRUD
Projeto API CRUD

Back-End Challenge
    
Como Executar
clonar o projeto do repositório (GitHub)
instalar o Docker
baixar a imagem do Mysql 5.7
executar o comando no prompt na pasta do projeto: "docker-compose up"
Irá criar o componente fluxocaixa.


Conexão com o MySQL Workbench Baixando o MySQL Workbench Comece baixando o MySQL Workbench https://www.mysql.com/products/workbench/ .

Conectando-se à sua instância MySQL Em seguida, faça uma nova conexão como:

HostNmae: 127.0.0.1
UserName: root
password: root
port: 3306
No command prompt na pasta onde baixou o projeto: excute:

yarn sequelize db:migrate

Irá criar as tabelas na database : fluxocaixa

cartegorias
movimentacoes
SequelizeMeta
Como executar a API:
na pasta do projeto no command prompt execute:

yarn Build
depois execute

yarn prod
