// through the use of a closure we expose an object as a public API which manages the private objects array

const collection = (function() {
  // private members
  const objects = [];

  // public members
  return {
      addObject: function(object) {
          objects.push(object);
      },
      removeObject: function(object) {
          const index = objects.indexOf(object);
          if (index >= 0) {
              objects.splice(index, 1);
          }
      },
      getObjects: function() {
          return JSON.parse(JSON.stringify(objects));
      }
  };
})();

collection.addObject("Bob");
collection.addObject("Alice");
collection.addObject("Franck");
console.log(collection.getObjects());
// prints ["Bob", "Alice", "Franck"]
collection.removeObject("Alice");
console.log(collection.getObjects());
// prints ["Bob", "Franck"]