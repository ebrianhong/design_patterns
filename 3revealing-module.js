// we write the entire object logic as private members and
// expose an anonymous object which maps members we wish to reveal
// to their corresponding public members
const namesCollection = (function() {
  // private members
  const objects = [];

  function addObject(object) {
    objects.push(object);
  }

  function removeObject(object) {
    let index = objects.indexOf(object);
    if (index >= 0) {
        objects.splice(index, 1);
    }
  }

  function getObjects() {
    return JSON.parse(JSON.stringify(objects));
  }

  // public members
  return {
    addName: addObject,
    removeName: removeObject,
    getNames: getObjects
  };
})();

namesCollection.addName("Bob");
namesCollection.addName("Alice");
namesCollection.addName("Franck");
console.log(namesCollection.getNames());
// prints ["Bob", "Alice", "Franck"]
namesCollection.removeName("Alice");
console.log(namesCollection.getNames());
// prints ["Bob", "Franck"]