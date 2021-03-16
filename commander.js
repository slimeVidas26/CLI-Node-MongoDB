const {program, description, action} = require('commander');
const {addCustomer ,
   findCustomer ,
    getAllCustomers,
    updateCustomer,
    
    deleteCustomer
  } = require('./index') 

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
        findCustomer(param)  
      })

//get all customers
program
.command('getAll')
.alias('ga')
.option('-ga, --getAll', 'get all Customers')
.description('Get list of customers')
.action(()=>{
  getAllCustomers()  
})

program
.option('-u, --update', 'update Customer')
.option('-fn, --firstname', 'update Customer FirstName')
.option('-ln, --lastname', 'update Customer LastName')
.option('-ph, --phone', 'update Customer Phone')
.option('-em, --email', 'update Customer Email')

var options = program.opts()

var firstName = options.firstName;
var lastName = options.lastName;
var phone = options.phone;
var email = options.email;

console.log(options)

//update customer
program
      .command('update <_id> <firstname> <lastname> <phone> <email> ') 
      .alias('u')
      .description('Update customer')
      .action((_id ,firstName , lastName , phone , email)=> updateCustomer(_id,firstName , lastName , phone , email))
    
      
program
      .command('remove <_id>')
      .alias('r')
      .description('Remove customer')
      .action((_id)=> deleteCustomer(_id))
    


 program.parse(process.argv)

 

     









