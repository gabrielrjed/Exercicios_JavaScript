import readlinesync = require('readline-sync');

const cores = new Array<string>(5);


for(let cor = 0; cor < cores.length; cor++){
    cores[cor] = readlinesync.question('Digite uma cor: ');
}

console.log(cores);

console.log(cores.sort());





