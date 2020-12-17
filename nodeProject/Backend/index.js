// // *******************************************************
// //**** */ EVENTS...Useful for cpu intensive tasks... ***/
// const { EventEmitter } = require ('events');
// const eventEmitter = new EventEmitter();

// eventEmitter.on('one', () => {console.log('EventEmiiter was a success...')});
// eventEmitter.on('two', () => {console.log('EventEmiiter was a success...')});
// eventEmitter.on('three', () => {console.log('EventEmiiter was a success...')});
// eventEmitter.on('name', (name) => console.log("hello " + name));
// eventEmitter.on('anotherEvent', () => eventEmitter.emit('anotherEvent'));


// eventEmitter.emit('one');
// eventEmitter.emit('two');
// eventEmitter.emit('three');
// eventEmitter.emit('name', 'nowrin...');
// eventEmitter.emit('anotherEvent');
// // *******************************************************
// // *******************************************************








// *******************************************************
// *******************************************************
const { readFile, readFileSync } = require('fs');

// // always has to run in order; in sync.... blocking...
// const syncTxt = readFileSync('../Frontend/hello.txt', 'utf8'); 

// async; and non-blocking...
readFile('../Frontend/hello.txt', 'utf8', (err, txt) => {
        console.log(txt);
});
// console.log(syncTxt);
console.log('Show this first...');

// *******************************************************
// *******************************************************













// // using promises results in cleaner code compared to when using Callbacks...
// const { readFile } = require('fs').promises; 
// async function hello() {
//         const file = await readFile('../Frontend/hello.txt', 'utf8');
// }



// // using Callbacks... but recommended is to use Promises...
// readFile('../Frontend/hello.txt', 'utf8', (err, txt) => { console.log(txt)});

// console.log('do this one first...');