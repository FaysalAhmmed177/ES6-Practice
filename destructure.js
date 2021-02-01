const person = { name:"Faysal", age:24 , job:"Web Developer" , phone:2134354657 , friends:["Mahmudul","Kabir","Anik","Imran"]};
// const {salary , name , phone} = person;

// // const name = person.name;
// // const phone = person.phone;
// console.log(salary , name, phone);
// console.log(name , phone);
// console.log(name , phone);

const friends = ["Mahmudul","Shakhawat","Anik","Imran"];
const [firstFriend,secondFrined, ...restFriends] = friends;
console.log(firstFriend,secondFrined,restFriends);