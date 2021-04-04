#ConstuctorPattern

>You are familiar with constructors as functions that initialize objects with specific properties and methods.
The constructor pattern is similar to that definition. We use this pattern to create multiple instances of the same object.

```javaScript
function aFunction(a,b) {
  this.a = a;
  this.b = b;
}

aFunction.prototype.protoFunction = function(){
  return this.a;
}

var aA = new aFunction('a','b');
console.log(aA.protoFunction());//'a'; 
```

##### Reference
[7 JavaScript Design Patterns Every Developer Should Know](https://javascript.plainenglish.io/7-javascript-design-patterns-every-developer-should-know-df9c40e7debf)