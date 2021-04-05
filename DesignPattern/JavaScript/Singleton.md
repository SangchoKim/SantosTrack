#Singleton Pattern

> We use this pattern to restrict a class to have only one instance and it can be accessed globally. It’s super useful when you need something to handle specific tasks from everywhere in the whole application.

```javaScript

var mySingleton = (function() {
  
  function init(options) {
    //some private variables
    var x = '1', y = 2, z = 'Abc', pi = Math.PI;
    //return public methods(accessing private variables if needed.)
    return {
      X : x,
      getPi : function() {
        return pi;
      }
    }
  }
  //There must be exactly one instance of a class, 
  //and it must be accessible to clients from a well-known access point
  var instanceOfSingleton;
  return {
    initialize: function(options) {
      //initialize only if not initialized before
      if(instanceOfSingleton === undefined) {
        instanceOfSingleton = init(options);
      }
      return instanceOfSingleton;
    }
  };

})();

var singleton = mySingleton.initialize();
console.log(singleton.X); //'1'
console.log(singleton.getPi());//3.141592653589793
```

##### Reference
[7 JavaScript Design Patterns Every Developer Should Know](https://javascript.plainenglish.io/7-javascript-design-patterns-every-developer-should-know-df9c40e7debf)