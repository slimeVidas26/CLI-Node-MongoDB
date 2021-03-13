const {program, description, action} = require('commander');
const {addCustomer , findCustomer} = require('./index') 

program
       .version( require('./package.json').version)
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
      .alias('f')
      .option('-f, --find', 'Find Customer')
      .description('Find customer')
      .action((param)=>{
        findCustomer({param})  
      })


       program.parse(process.argv)

     









