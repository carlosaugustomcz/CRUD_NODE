# Projeto API CRUD

# Back-End Challenge

API responsável para importar os dados da API "https://randomuser.me/api", incluído no banco de dados e execuntando um CRUD.

# Como Executar:

* Clonar o projeto do repositório (GitHub), 
* Instalar o Docker
* Executar os comandos abaixo no prompt da pasta do projeto:
  * "npm install" - para instalar as denpendência necessária para executar 
  * "docker-compose up", irá criar o banco de dados Postgres com a base de dados "crud". 
  *  npm run typeorm migration:run
  *  npm run dev:server

# Documentação dos Endpoints

GET

Listar Usuários

# http://localhost:3333/users

GET

Busca um Usuario

# http://localhost:3333/users/95cc8f79-e04d-4408-ba52-521e2165895b

Authorization

Bearer Token

Token

<token>
  
Request Params

155e77ee-ba6d-486f-95ce-0e0c0fb4b919
  
GET

REST Back-end Challenge 20201209 Running

# http://localhost:3333/

DEL

Remover Usuário

# http://localhost:3333/users/81f42e1d-a9ae-41a3-ac71-f52c8517770b

Make things easier for your teammates with a complete request description.

Authorization

Bearer Token

Token

<token>
 
PUT

Alterar Usuário

# http://localhost:3333/users/95cc8f79-e04d-4408-ba52-521e2165895b

Authorization

Bearer Token

Token

<token>
  
Request Params

155e77ee-ba6d-486f-95ce-0e0c0fb4b920

Bodyraw (json)

{
  "login_uuid": "95cc8f79-e04d-4408-ba52-521e2165895b",
  "login_username": "silverswan carlos",
  "login_password": "firewall1234455",
  "login_salt": "TQA1Gz7qqqqqx",
  "login_md5": "dc523cb313b63dfe5be2140b0c05b3bcqqqq",
  "login_sha1": "7a4aa07d1bedcc6bcf4b7f8856643492c191540dqqqq",
  "login_sha256": "74364e96174afa7d17ee52dd2c9c7a4651fe1254f471a78bda0190135dcd3480qqqqq",
  "dob_date": "2021-07-20T09:44:18.674Z",
  "dob_age": 21,
  "registered_date": "2021-05-21T10:59:49.966Z",
  "registered_age": 21,
  "phone": "011-962-2021",
  "cell": "081-454-2021",
  "id_name": "PPS21",
  "id_value": "0390511T21",
  "picture_large": "https://randomuser.me/api/portraits/men/21.jpg",
  "picture_medium": "https://randomuser.me/api/portraits/med/men/21.jpg",
  "picture_thumbnail": "https://randomuser.me/api/portraits/thumb/men/21.jpg",
  "nat": "IE",
  "gender": "male",
  "name_title": "mr",
  "name_first": "brad",
  "name_last": "gibson",
  "location_street": "9278 new road",
  "location_city": "kilcoole",
  "location_state": "waterford",
  "location_postcode": "93027",
  "coordinates_latitude": "20.9267",
  "coordinates_longitude": "-7.9310",
  "timezone_offset": "-3:30",
  "timezone_description": "Newfoundland",
  "imported_t": "2021-03-21T14:59:07.960Z",
  "status": "published",
  "created_at": "2021-03-21T14:59:07.960Z",
  "updated_at": "2021-03-21T14:59:07.960Z"
}
  
POST

Autentication session

# http://localhost:3333/sessions

Bodyraw (json)

JSON
{
  "login_uuid": "c24aba34-0d4e-4bb7-83e0-716884a3886c",
  
  "login_password": "cloud9"
}
