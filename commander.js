const {program, description, action} = require('commander');
const {addCustomer} = require('./index') 
program
       .version('1.0.0')
       .description('Client Managment System')
        


program
      .command('add <firstname> <lastname> <phone> <email>')
      .alias('-a')
      .description('Add customer')
      .action((firstName , lastName , phone , email)=>{
        addCustomer({firstName , lastName , phone , email})
      })


program.parse(process.argv)









