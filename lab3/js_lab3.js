
/*
  1.
  Create a method for all arrays to sum an array of numbers.
  If any element in the array is not a number, the method should
  throw an error with a message: 'Target array must contain numbers only'.
*/
[1, 2, 3].sum() // Output: 6

Object.prototype.sum = function (){
  var sum=0;
  this.forEach(element =>{
    try
    {
        if(!Number.isInteger(element))
          throw new Error('Target array must contain numbers only');

        sum+=element;

    }
    catch(error)
    {
          console.log(error.message);
    }
  
  });
  return sum;
}




//==========================================================================================================================




/*
  2. When trying to convert an object to string, the output is always '[object object]'.
  a. Change the default output for all objects to be 'This is an object'.
*/
const objj = {};
String(objj); // Output: 'This is an object'.

// b. Make String(obj) of only the following object return the content of the message
// while the all other objects still return 'This is an object'.
const obj = { message: 'This is a message' };
String(obj) // Output: 'This is a message'.

function String (valu)
    {
        if(typeof valu === 'object')
        {
          for (key in valu)
          {
            if (key === 'message')
                return valu[key];
          } 
          return 'This is an object';
        }
        return valu.toString();
    }
//==========================================================================================================================



/*
  3.
  a. You're developing a game which has different types of animals. All animals can walk, run,
  eat and attack. They also have color and weight properties.
  The game also has birds which do all these actions in addition to flying.
  Represent this data using OOP. 
  
  Notes:
  - Write the code twice; using ES5 function constructors and using ES6 classes.
  - Leave the implementation of the 'walk', 'run', 'eat' and 'attack' methods empty
  or write a console.log statement inside each of them.
  - Maintain the count of all created animals in the code and limit the number of
  total created animals to 100. Throw an error if the code tries to create the 101st animal.

  b. Write a function that detects wether an animal is a bird or not.
  isBird(animal) // Output: true or false.
*/


function Animal(name='animal',color='color',weight=12)
{
  try
  {
    if(Animal.count>=100)
      throw new Error('You exceed the number of animal objects you can create');
    this.name=name;
    this.color=color;
    this.weight=weight;
    Animal.count++;
  }
  catch(error)
  {
        console.log(error.message);
  }
}

Animal.count=0
Animal.prototype.walk=function(){
  console.log(`the ${this.name} can walk`)
};
Animal.prototype.run =function(){
  console.log(`the ${this.name} can run`)
};
Animal.prototype.eat =function(){
  console.log(`the ${this.name} can eat`)
};

function Bird(name,color,weight)
{
  Animal.call(this,name,color,weight);
}

Bird.prototype.__proto__ == Animal.prototype;



Bird.prototype.fly = function(){
  console.log(`the ${this.name} can fly`)
};



var animal= new Animal(); 
var bird  = new Bird('woowoow','white','2');

var isBird = (animal)=>Bird.prototype === animal.__proto__;


//==========================================================================================================================

class Animal
{
  name;
  color;
  weight;
  static count = 0;
  constructor(name,color,weight)
  {
    try
    {
      if(count>=100)
        throw new Error('You exceed the number of animal');
      this.name=name;
      this.color=color;
      this.weight=weight;
      count++;
    }
    catch(error)
    {
          console.log(error.message);
    }
  }
  walk(){console.log(`the ${this.name} can walk`);}
  eat(){console.log(`the ${this.name} can eat`);}
  run(){console.log(`the ${this.name} can run`);}
}

class Bird extends Animal
{
  constructor(name,color,weight)
  {
    super(name,color,weight);
  }
  fly(){console.log(`the ${this.name} can fly`);}

}
var isBird = (animal)=>Bird.prototype===animal.__proto__;
