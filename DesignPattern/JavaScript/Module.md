#Module Pattern

> This pattern is the design pattern used to implement the concept of software modules. Module pattern is a powerful pattern and commonly used in JavaScript.
You can make functions, variables, and properties inside a module as public or private members.

```javaScript
var a = (function(){
  //private variables & methods
  var privateVar = 'X';
  //public methods and variables
  return {
    getX: function(){
      return privateVar;
    }
  }
})();

a.getX(); //X
```

##### Reference
[7 JavaScript Design Patterns Every Developer Should Know](https://javascript.plainenglish.io/7-javascript-design-patterns-every-developer-should-know-df9c40e7debf)