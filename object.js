const user = {
    name: 'John Doe',
    email: "ram@gmail.com",
    age: 12,
    // Array of objects
    jobs: [
        {
        company: 'Google',
        role: 'Software Engineer',
        salary: 100000
        }, 
        {
        company: 'Amazon',
        role: 'Software Engineer',
        salary: 120000
        }, 
    ],
};
user.name
user.jobs[1].company;


// object destructuring 

// const name = user.name;
// const age = user.age;
// const email = user.email;

const { name, email, age } = user;

// Array destructuring
const jobs = ["Manager", "Developer", "tester", {name: "Ramesh", age: 12}];
// first = manager, second = developer....fourth whole object this vriables replace there place 
const [first, second, third, fourth] = jobs;
