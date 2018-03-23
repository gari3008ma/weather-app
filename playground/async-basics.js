console.log(`starting app`);

setTimeout(() => {
    console.log(`Inside of callback`);
}, 2000 );

setTimeout (() => {
    console.log('Inside the second callback');
},0);
console.log(`ending app`);
