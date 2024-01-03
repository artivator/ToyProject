for (let i = 0; i < 10; i++) {
   console.log(i); 
}

const users = ['a', 'b', 'c'];

for (const user of users) {
    console.log(user);
}



const loggedInUser = {
    name: 'pty',
    age: 32,
    isAdmin: true
};

for (const propertyName in loggedInUser) {
    console.log(propertyName);
    console.log(loggedInUser[propertyName]);
}



let isFinished = false;

while (!isFinished) {
    isFinished = confirm('퀴즈를 시작할까');
}

console.log('Done!');