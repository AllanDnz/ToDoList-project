const connection = require('./connection');

//The purpose of this function is to return all the tasks registered in the database. 
const getAll = async () => {
//Use array destructuring to get the first element of the array returned by the execute method.
  const [tasks] = await connection.execute('SELECT * FROM tasks');
  return tasks;  
};




module.exports = {
    getAll,
    };




// aula parada no minuto 59:48
//Para isso, é necessário importar o model Task e chamar o método findAll. 
//O método findAll é um método do Sequelize que retorna todas as tarefas cadastradas no banco de dados. 
//Por fim, a função getAll retorna o resultado da chamada do método findAll.