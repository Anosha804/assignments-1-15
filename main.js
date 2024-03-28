// Q2: Person's name & print simple message with that person's name.
var personName = "Aysha";
console.log("hello !", personName, "Would you like to learn python today?");
// Q3: Name cases: print person's name in lowercase, uppercase & title case
var firstName = "Anosha Fatima";
console.log(firstName.toLowerCase());
console.log(firstName.toUpperCase());
console.log(firstName.replace(/\b\w/g, function (abc) { return abc.toUpperCase(); }));
// Q4: Famous Qoute
console.log("Quaid-e-Azam said \"There is no power that can undo Pakistan\"");
// Q5: Famous Quotes part 2
var famous_person = "Abraham Lincoln";
var message = "once said, \"Democracy is the Government of the people by the people and for the people\"";
console.log(famous_person, message);
// Q6: Stripping names
var whiteSpaceName = "\n\t Mohammad Ali Jinnah \t\n";
console.log(whiteSpaceName);
var withoutWhiteSpace = whiteSpaceName.trim();
console.log(withoutWhiteSpace);
// Q7 & 8: Arthemetic operators
console.log(4 + 4);
console.log(2 * 4);
console.log(12 - 4);
console.log(16 / 2);
// Q9: favourite number
var favNum = 7;
var message2 = "My favorite number is:";
console.log(message2, favNum);
// Q11: Names of friends
var friendsNames = ["Nida", "Habiba", "Kiran", "Zainab"];
friendsNames.forEach(function (friendname) { return console.log(friendname); });
// Q12: Friends names with personalized messages
var friendNames = ["Nida", "Habiba", "Kiran", "Zainab"];
friendsNames.forEach(function (friendname) { return console.log("Hello ".concat(friendname, " how are you?")); });
// Q13: Our own array
var favTransport = ["Bike", "Car", "Sports Car", "Bus"];
favTransport.forEach(function (transport) { return console.log("I would like to own a ".concat(transport)); });
// Q14 & 15 Guest list...
var guestList = ["Nida", "Filza", "Sakina", "Mysha", "Habiba"];
guestList.forEach(function (oneGuest) { return console.log("As salam-o-alikum ".concat(oneGuest, ", I would like to invite you for dinner at my place.")); });
var guestNotComing = guestList[4];
console.log(guestNotComing, "Is not coming");
guestList.splice(4, 1, "Mehak");
guestList.forEach(function (guest) { return console.log("As salam-0-alikum ".concat(guest, ", Would you like to join me for dinner tonight?")); });
