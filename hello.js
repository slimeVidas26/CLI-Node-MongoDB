#!/usr/bin/env node

const { program } = require('commander');

//function hello
function hello(param){
    return `Hello ${param}`;
}


//function getList
function getList(names , lower , upper){
    for(var i = 0 ; i < names.length ; i++){
        var msg = hello(names[i])
        var res = msg.split(" ");
       
        var options = program.opts();
        var lower = options.lower;
        var upper = options.upper;
        console.log(program.args)

        if(lower && upper) console.log(msg)
        else if(lower) console.log(`${res[0]}  ${res[1].toLocaleLowerCase()}`)
        else if(upper) console.log(`${res[0]}  ${res[1].toLocaleUpperCase()}`)

    }


}


program
       .version('1.0.0')

      

program
       .option('-l , --lower' , "only use lowercase letters")
        .option('-u , --upper' , "only use uppercase letters")

       
program
       .command('show [names...]')
       .alias('s')
       .description('Show list of names')
       .action((names,lower , upper)=> console.log(getList(names , lower , upper)))


program.parse(process.argv);

       
       

        


        
    




   
