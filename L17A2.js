const path = require('path')

console.log(path.dirname('Users/WebTechnology/Lab Program'))
console.log(path.basename('Users/WebTechnology/Lab Program'))
console.log(path.extname('Users/WebTechnology/Lab Program.txt'))
console.log(path.join('Users/WebTechnology/Lab Program.txt','abc','hello'))
console.log(path.normalize('Users//../WebTechnology//Lab Program.txt'))
console.log(path.resolve('Users/WebTechnology/Lab Program.txt'))
//d-drive i.e je file ma thi run  kayru  ema nu 
console.log(path.relative('C:Users/WebTechnology/Lab Program.txt','ghng/ghg'))

