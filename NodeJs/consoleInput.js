const fs = require('fs');
const arg = process.argv;

if(arg[2]==="add"){
    fs.writeFileSync(arg[3],arg[4]);
    console.log(`File Created ${arg[3]}`);
}else if(arg[2]==="remove"){
    fs.unlinkSync(arg[3]);
    console.log(`File Deleted ${arg[3]}`)
}else{
    console.log("Invalid Argument");
}