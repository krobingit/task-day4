var obj1 = { name: "Person 1", age: 5 };
var obj2 = { age: 5, name: "Person 1" };  //true or false

const isEqual = (obj1, obj2) => {

    obj1keys = Object.keys(obj1)
    obj2keys = Object.keys(obj2)

    return (obj1keys.length == obj2keys.length) && obj1keys.every(key => obj1[key] == obj2[key])

}

console.log(isEqual(obj1, obj2)) //true