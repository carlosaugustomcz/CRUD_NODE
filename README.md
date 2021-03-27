CRUD
Projeto API CRUD

Tecnologias :
    "@types/bcryptjs": "^2.4.2",
    "@types/jsonwebtoken": "^8.5.1",
    "@types/node-fetch": "^2.5.8",
    "bcryptjs": "^2.4.3",
    "date-fns": "^2.19.0",
    "express": "^4.17.1",
    "express-async-errors": "^3.1.1",
    "express-openapi-validator": "^4.12.6",
    "jsonwebtoken": "^8.5.1",
    "node-cron": "^3.0.0",
    "node-fetch": "^2.6.1",
    "pg": "^8.5.1",
    "reflect-metadata": "^0.1.13",
    "swagger-ui-express": "^4.1.6",
    "typeorm": "^0.2.31"
    "@babel/cli": "^7.13.10",
    "@babel/core": "^7.13.10",
    "@babel/plugin-proposal-class-properties": "^7.13.0",
    "@babel/plugin-proposal-decorators": "^7.13.5",
    "@babel/preset-env": "^7.13.12",
    "@babel/preset-typescript": "^7.13.0",
    "@types/express": "^4.17.11",
     "@types/jest": "^26.0.21",
    "@types/multer": "^1.4.5",
    "@types/node-cron": "^2.0.3",
    "@types/swagger-ui-express": "^4.1.2",
    "@typescript-eslint/eslint-plugin": "^4.18.0",
    "@typescript-eslint/parser": "^4.18.0",
    "babel-plugin-module-resolver": "^4.1.0",
    "babel-plugin-transform-typescript-metadata": "^0.3.2",
    "eslint": "^7.22.0",
    "eslint-config-airbnb-base": "^14.2.1",
    "eslint-config-prettier": "^8.1.0",
    "eslint-import-resolver-typescript": "^2.4.0",
    "eslint-plugin-import": "2.22.1",
    "eslint-plugin-prettier": "^3.3.1",
    "jest": "^26.6.3",
    "prettier": "^2.2.1",
    "ts-jest": "^26.5.4",
    "ts-node-dev": "^1.1.6",
    "typescript": "^4.2.3"
    
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
