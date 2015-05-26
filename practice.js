//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer  This makes a function dynamic.  The call customizes the function...by allowing the function to work for whatever is passed in the call.  It allows you to eliminate a method in each object.  Easier to change code if your need to.

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer
      /*
      Implicit:  Something is happening because of the way JS is designed so that whatever that is to the left of the . will be what the 'this' is referencing.  Used most of the time...90% of the time per Tyler.
      Explicit:  .call, .apply, .bind;  These are explicit calls. .call will act like a argument/parameter for the call.  .apply is just like .call except that you can pass an array and not just a single argument/parameter.  .bind is used to generate a new function with a call that binds the information passed to that function.  When that function is called it with then execute.
      new Binding
      default Binding:  If there is nothing to the left of the . call, or there is not an explicit binding, and nothing is being passed...then the default for this will be the window object in the browser.
      */

  // 3) What is the difference between call and apply?

      //Answer  .call would be used to pass a few bits of information like argument/parameters, .apply would be used if you want to send an array instead of individual arguments/parameters

  // 4) What does .bind do?

      //Answer  .bind creates a new function that binds the information passed to that function.  Therefore, when you call the function, it generates the already passed information.


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    //Code Here
var user = {
  username: 'Brandt',
  email: 'brandtbird@yahoo.com',
  getUsername: function() {
    alert(this.username);
    //return this.username;
  }
};

user.getUsername();

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.

user.getUsername();

//Next Problem


// Write the function definitions which will make the following function invocations function properly.

  //Function Invocations Here

var Car = function(paraMK, paraMD, paraYR) {
  return {
    maker: paraMK,
    model: paraMD,
    year: paraYR,
    move: 0,
    moveCar: function() {
      return this.move = this.move + 10;
    }
  };
};

var prius = Car('Toyota', 'Prius', 2011);
var mustang = Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments prius' move property by 10. Returns the new move property.

//Hint, you'll need to write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the write object (prius vs mustang).



//Continuation of previous problem

var getYear = function(paraObj){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

  //Code Here

getYear.call(prius);
getYear.call(mustang);

//New Problem



var user = {
  username: 'iliketurtles',
  age: 13,
  email: 'iliketurtles@gmail.com'
};

var getUsername = function(){
  console.log(this.username);
};

setTimeout(getUsername.bind(user), 5000);

//Above you're given an object, a function, and a setTimeout invocation. After 5 seconds, what will the getUsername function return?

  //Answer Here <'iliketurtles'> <== This is the wrong answer.  When I ran this, I got a number 37462.  This is probably something from the window.

//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //Answer Here  

//Fix the setTimeout invocation so that the user object will be the focal object when getUsername is ran.

