/* 
- Display an alert with the username and all the todos titles that belong to that user 
*/


// - Create an alert that lists all users, with their ids, names and what city they're from
 
// ---- first alert 
// for(const user of users) {
// alert(` User ID :${user.id} 
// name: ${user.name}
// and the city that this user live is : ${user.address.city}`)
// }

//---- second alert
let alertMesage = ''

for(const user of users) {
alertMesage += ` User ID :${user.id} 
name: ${user.name}
and the city that this user live is : ${user.address.city}`
}
alert(alertMesage)


// - Prompt the user for a user id
let newId = []
let promptID = prompt(`please enter a user ID`)
newId.push(promptID)

 if (users[newId]){
    console.log(users[newId])
 }else{
     console.log(`you have enterd a worng ID please try again`);
 }






// console.log("users: ", users);

// console.log("todos: ", todos);
