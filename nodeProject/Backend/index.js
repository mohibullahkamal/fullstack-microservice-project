// *******************************************************
//**** EVENTS...Useful for cpu intensive tasks... ***/
const { EventEmitter } = require ('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('one', () => {console.log('EventEmiiter was a success...')});
eventEmitter.on('two', () => {console.log('EventEmiiter was a success...')});
eventEmitter.on('name', (name) => console.log("hello " + name));

eventEmitter.emit('one');
eventEmitter.emit('two');
eventEmitter.emit('name', 'nowrin...');



// *******************************************************
// // always has to run in order; in sync.... blocking...
// const { readFileSync } = require('fs');
// const syncTxt = readFileSync('../Frontend/hello.txt', 'utf8'); 

// console.log(syncTxt);
// console.log('Show this first...');



// *******************************************************
// // async; and non-blocking...
// const { readFile } = require('fs');

// // using Callbacks... but recommended is to use Promises...
// const asyncTxt = readFile('../Frontend/hello.txt', 'utf8', 
//         (err, txt) => console.log(txt) ); //provide a Callback...

// // console.log(asyncTxt);
// console.log('Show this first...');



// *******************************************************
// // using promises results in cleaner code compared to when using Callbacks...
// // here its same as Callbacks... but only for cleaner code we use async/await..
// const { readFile } = require('fs').promises;
// const myModule = require('./my-module');

// // use async/await... for cleaner code...
// async function hello() {
//         const file = await readFile('../Frontend/hello.txt', 'utf8');
// }

// // console.log(hello());
// console.log('Do this first...');
// // console.log(myModule.name);



// *******************************************************
// // We will use Express to build a fullstack app... with whatever
// // we learned earlier...
// const { readFile } = require ('fs');
// const express = require ('express');
// const app = express();

// app.get('/', (req, res) => {
//    readFile('../Frontend/home.html', 'utf8', (err, html) => {
//       if (err) {
//          res.status(500).send('sorry, server is down...')
//       }
//       res.send(html);
//    })
// })       

// app.listen( process.env.PORT || 3000, () => console.log('App running... Hurraaaay!!'));



// *******************************************************
// // Using the above Express solution which used Callback... these 
// // Callbacks can get very confusing... leading to Callback Hell... 
// // therefore we will use Promises instead...
// const { readFile } = require ('fs').promises;
// const express = require ('express');
// const app = express();

// app.get('/', async(req, res) => {
//    res.send( await readFile('../Frontend/home.html', 'utf8') );
// });

// app.listen( process.env.PORT || 3000, () => console.log('App running using Async/Await...'));



// *******************************************************
// self practice...
const { readFile } = require('fs').promises;
const express = require('express');
const app = express();

// returns Home Page
app.get('/', async(req, res) => {
   res.send( await readFile('../Frontend/home.html', 'utf-8') ); 
})
// returns Home Page... again...lol
app.get('/home', async(req, res) => {
   res.send( await readFile('../Frontend/home.html', 'utf-8') ); 
})
// returns Form page...
app.get('/form', async(req, res) => {
   res.send( await readFile('../Frontend/form.html', 'utf-8') ); 
})
// returns all Users page...
app.get('/all-users', async(req, res) => {
   res.send( await readFile('../Frontend/allUsers.html', 'utf-8'));
})
// returns newUser page...
app.get('/new-user', async(req, res) => {
   res.send( await readFile('../Frontend/newUser.html', 'utf-8'));
})
// returns aboutUs page...
app.get('/about-us', async(req, res) => {
   res.send( await readFile('../Frontend/aboutUs.html', 'utf-8'))
})


app.listen( process.env.PORT || 3000, () => console.log('App running using - self practice..'))


// *******************************************************




// *******************************************************




// *******************************************************




// *******************************************************

