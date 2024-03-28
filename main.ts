// Q2: Person's name & print simple message with that person's name.

let personName = "Aysha";
console.log("hello !", personName, "Would you like to learn python today?");

// Q3: Name cases: print person's name in lowercase, uppercase & title case

let firstName = "Anosha Fatima";
console.log(firstName.toLowerCase());
console.log(firstName.toUpperCase());
console.log(firstName.replace(/\b\w/g, (abc) => abc.toUpperCase()));

// Q4: Famous Qoute

console.log("Quaid-e-Azam said \"There is no power that can undo Pakistan\"");

// Q5: Famous Quotes part 2

let famous_person = "Abraham Lincoln";
let message = "once said, \"Democracy is the Government of the people by the people and for the people\"";
console.log(famous_person, message);

// Q6: Stripping names

let whiteSpaceName = "\n\t Mohammad Ali Jinnah \t\n";
console.log(whiteSpaceName);
let withoutWhiteSpace = whiteSpaceName.trim();
console.log(withoutWhiteSpace);

// Q7 & 8: Arthemetic operators

console.log(4 + 4);
console.log(2 * 4);
console.log(12 - 4);
console.log(16 / 2);

// Q9: favourite number

let favNum = 7;
let message2 = "My favorite number is:";
console.log(message2, favNum);

// Q11: Names of friends

let friendsNames = ["Nida", "Habiba", "Kiran", "Zainab"];
friendsNames.forEach(friendname => console.log(friendname));

// Q12: Friends names with personalized messages

let friendNames = ["Nida", "Habiba", "Kiran", "Zainab"];
friendsNames.forEach(friendname => console.log(`Hello ${friendname} how are you?`));

// Q13: Our own array

let favTransport = ["Bike", "Car", "Sports Car", "Bus"];
favTransport.forEach(transport => console.log(`I would like to own a ${transport}`));

// Q14 & 15 Guest list...

let guestList =["Nida", "Filza", "Sakina", "Mysha", "Habiba"];
guestList.forEach(oneGuest => console.log(`As salam-o-alikum ${oneGuest}, I would like to invite you for dinner at my place.`));

let guestNotComing = guestList[4];
console.log(guestNotComing, "Is not coming");

guestList.splice(4, 1, "Mehak");
guestList.forEach(guest => console.log(`As salam-0-alikum ${guest}, Would you like to join me for dinner tonight?`));


