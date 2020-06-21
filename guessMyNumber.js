function guess(){
  let numbers = [1,2,3,4,5,6,7,8,9,10];
  let random = numbers[Math.floor(Math.random()*10)];
  for(let i = 0; i < 5; i++){
    let guess = prompt("What is you guess(1-10)");
    if(guess != random){
      alert("Wrong, you have "+eval(5-(i+1))+" guesses left");
      
    }
    if(guess == random){
      alert("You got it!");
      i = 5;
    }
    if((5-(i+1)) == 0){
      alert("The final answer is "+ random);
    }
  }
  console.log(random);
}
guess();