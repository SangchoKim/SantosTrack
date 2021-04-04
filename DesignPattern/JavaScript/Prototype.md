#Prototype Pattern

> It creates new instances of objects by cloning them from a prototype. The main focus of prototype pattern is to create an object used as a blueprint for each object constructor created.

```javaScript
var obj = {
  name: "My object's name.", 
  objFunc: function () {
    console.log( "Yay! A function!" );
  }
};

//set a new object/function's prototype as another existing one
//here newObj is created with prototype as obj.
var newObj = Object.create( obj );
newObj.gender = 'Female'; 
// Now we can see that one is a prototype of the other
console.log( newObj.name ); //My object's name.
console.log( newObj.gender ); //Female
```

##### Reference
[7 JavaScript Design Patterns Every Developer Should Know](https://javascript.plainenglish.io/7-javascript-design-patterns-every-developer-should-know-df9c40e7debf)