let decide = prompt('What would you like to calculate?\nd - distance\nt - time\ns - speed').toLowerCase()
try{
    console.log(decide);
 if (!(/d|t|s/.test(decide)) )
    throw 'Please enter d, t, or s';
    console.log(decide)
} catch(err) {
    console.log(err);
}

if (decide == 'd'){
    let time = Number(prompt('Please enter the amount of time'));
    let speed = Number(prompt('Please enter the speed'));
    
}
