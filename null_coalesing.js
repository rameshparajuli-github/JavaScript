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
//null coalesing operator
user?.name
user?.jobs?[1]?.company:

user1
user1.jobs //it shows error undefine reading jobs, it means there is no any jobs in user1

//if we don't want to show an error in 'null coalesing' we can use "?"
// it shows an undefine 
user1?.jobs //if there is any jobs it throught the output otherwise it through undefine value
console.log(user1?.jobs) //it shows undefine