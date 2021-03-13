const {program, description, action} = require('commander');
const {addCustomer , findCustomers} = require('./index') 
program
       .version('1.0.0')
       .description('Client Managment System')
        

//add customer
program
      .command('add <firstname> <lastname> <phone> <email>')
      .alias('a')
      .option('-a, --add', 'Add New Customer')
      .description('Add customer')
      .action((firstName , lastName , phone , email)=>{
        addCustomer({firstName , lastName , phone , email})
      })

      //find customer
      program
      .command('find <param>')
      .alias('-f')
      .description('Find customers')
      .action((param)=>{
        findCustomers({param})  
      })


       program.parse(process.argv)

     









