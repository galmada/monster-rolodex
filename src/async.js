const myPromise = new Promise((resolve,reject)=> {
    if(true){
        setTimeout(()=> {
            resolve("I have succeeded");
        },1000)
    }
  else{
      reject('I jave failed');
  }
});

myPromise
.then(value => value + "!!!")
.then(newValue => console.log(newValue))
.catch(rejectValue => console.log(rejectValue));
