const {program, description, action} = require('commander');
const {addCustomer ,
   findCustomer ,
    getAllCustomers,
    updateCustomer,
    updateFirstName,
    updateLastName,
    updatePhone,
    updateEmail,
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
        findCustomer({param})  
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
console.log(options)
var firstName = options.firstName;
var lastName = options.lastName;
var phone = options.phone;
var email = options.email;

//update customer
program
      .command('update <_id>  <param>')
      .alias('u')
      
      .description('Update customer')
       .action((_id ,param)=>{
  if(firstName) updateFirstName(_id ,param)  
  else if(lastName) updateLastName(_id , param)
  else if(phone) updatePhone(_id , param)
  else if(email)  updateEmail(_id , param)
      })


 program.parse(process.argv)

 

     









