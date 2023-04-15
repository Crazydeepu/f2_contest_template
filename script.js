/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map(arrMaping);

  function arrMaping(list) {
    if(list.profession === 'developer'){
      console.log(list);
    }
  }
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach(forEachFunc);

  function forEachFunc(items) {
    if(items.profession ==='developer'){
      console.log(items);
    }
  }
}

function addData() {
  //Write your code here, just console.log
  let newObj = {id:4,name:"susan",age:"20",profession:"intern"};
  arr.push(newObj);
  console.log(arr)
}

function removeAdmin() {
  //Write your code here, just console.log
   for(let i=0;i<arr.length;i++){
    if(arr[i].profession ==='admin'){
      arr.splice(i,1)
    }
  }
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let newArray = [
  { id: 5, name: "Joe", age: "30", profession: "developer" },
  { id: 6, name: "Rachel", age: "28", profession: "designer" },
  { id: 7, name: "Ross", age: "31", profession: "fresher" }
  ]
  let combined = arr.concat(newArray);
  console.log(combined);
}
