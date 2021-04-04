#Command Pattern

> The command pattern is a great solution to providing loose coupling. The system should not know much information about each specific payment method processing. 
To achieve that, this pattern will separate the code that requests an operation from the ones that execute the actual implementation.

```javaScript
var commandPattern = (function(){
  var commandSet = {
    doSomething: function(arg1, arg2) {
      return "This is argument 1 "+ arg1 + "and this is arg 2 "+ arg2;
    },
    doSomethingElse: function(arg3) {
      return "This is arg 3 "+arg3;
    },
    executeCommands: function(name) {
      return commandSet[name] && commandSet[name].apply( commandSet, [].slice.call(arguments, 1) ); //gives arguments list
    }
  }
  return commandSet;
  
})();

commandPattern.executeCommands( "doSomethingElse", "Ferrari", "14523" );
commandPattern.executeCommands( "doSomething", "Ford Mondeo", "54323" );
```

##### Reference
[7 JavaScript Design Patterns Every Developer Should Know](https://javascript.plainenglish.io/7-javascript-design-patterns-every-developer-should-know-df9c40e7debf)