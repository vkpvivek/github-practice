const posts = [{title: 'POST1'},{title:'POST2'}];
console.log('person1 shows ticket');
console.log('person2 shows ticket');

const preMovie = async () => {

  const person3PromiseToShowTicketWhenWifeArrives = new Promise((resolve, reject) => {
    setTimeout(() => resolve('ticket'), 3000);
  });
  const getPopcorn =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('popcorn'), 3000);
  });
  
  const getButter =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('butter'), 3000);
  });
  
   const getCoke =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('coke'), 3000);
  });


  let ticket = await person3PromiseToShowTicketWhenWifeArrives;
  
    let [ popcorn, butter, coke ] =
    await Promise.all([ getPopcorn, getButter, getCoke]);

    console.log(`got ${popcorn}, ${butter}, ${coke}`);

  
  return ticket;
  
};

preMovie().then((t) => console.log(`person3 shows ${t}`))
    .then()

//console.log('person4 shows ticket');