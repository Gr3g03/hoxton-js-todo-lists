
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
 let todoAlert = ''

for(const todo of todos) {
todoAlert += `This is the full To do title list :
:${todo.title}`
}
alert(todoAlert)

const showAlert = confirm(`do you want to see the todo title?`)

if( showAlert){
alert(`${users[newId].username}  ${todos[newId ].title}`)
}

let todoDeletId = []

let deletedPrompt = prompt(`if you want to delete a todo please enter the ID  of the todo that you want to delete`)

todoDeletId.push(deletedPrompt)

delete todos[todoDeletId]


confirm(`do you want to see another user?`)
let seeAnotherUser = []
let anotherUserId = prompt(`please enter a new user ID`)
seeAnotherUser.push(anotherUserId)

if(users[seeAnotherUser]){
    console.log(users[seeAnotherUser])
}



// console.log("users: ", users);

// console.log("todos: ", todos);
