
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


let newId = []
let promptID = prompt(`please enter a user ID`)
newId.push(promptID)

 if (users[newId]){
    console.log(users[newId])
 }else{
     console.log(`you have enterd a worng ID please try again`);
 }



 //  - Display an alert with the username and all the todos titles that belong to that user 
const showAlert = confirm(`do you want to see the todos titles?`)

if( showAlert){
alert(`${users[newId].username}  ${todos[newId ].title}`)
}






// console.log("users: ", users);

// console.log("todos: ", todos);
