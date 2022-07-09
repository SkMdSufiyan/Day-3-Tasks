// Day-3 Task-1
// Application of for, for/in, for/of, forEach to a given JSON object
console.log("-------------Day-3 Task-1-------------")


// Creating a JSON object
let person = {
  "firstName": "Mahmmadsufiyan",
  "lastName": "Shaik",
  "age": 30,
  "eduQualification": "M.Tech",
}


var keys = Object.keys(person);

// Iterating using for
console.log("-------------Iterating using for-------------")
for (let k=0; k<keys.length;k++){
  console.log(person[keys[k]])
}
console.log("-----------------------------------------------------------")

// Iterating using for/in
console.log("-------------Iterating using for/in-------------")
for(let i in person){
  console.log(person[i])
}
console.log("-----------------------------------------------------------")

// Iterating using for/of
console.log("-------------Iterating using for/of-------------")
for (const h of keys) {
    console.log(person[h]);
} 
console.log("-----------------------------------------------------------")

// Iterating using forEach
console.log("-------------Iterating using forEach-------------")
Object.keys(person).forEach(key => console.log(person[key]));
console.log("-----------------------------------------------------------")
