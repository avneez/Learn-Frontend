//array is an object in JS

const lang = ['js', 'py', 'c'];

const actors = [
    {
        name: 'salman',
        pay: 100
    },
    {
        name: 'shahrukh',
        pay: 200
    },
    {
        name: 'hritik',
        pay: 300
    },
    {
        name: 'varun',
        pay: 50
    },
]

//cutting 10 rs for everyone
for (let i = 0; i < actors.length; i++) {
    actors[i].pay -= 10;
}

actors.forEach((actor, index) => {
    if (index < 3) { actor.pay -= 10; }
})


for (let i in actors) {
    if (i < 3) { actors[i].pay -= 10; }
}

// console.log(actors);


//filter

const students = [
    {
        name: 'st1',
        marks: 20
    },
    {
        name: 'st2',
        marks: 18
    },
    {
        name: 'st3',
        marks: 6
    },
    {
        name: 'st4',
        marks: 15
    }
];

const failed = students.filter((student) => {
    return student.marks < 8;
    // if(student.marks<8){
    //     return true;
    // } else return false;
});

const passed = students.filter((student) => student.marks > 8);
// console.log(failed);
// console.log(passed);


//map
const users = [
    {
        fname: 'brad',
        lname: 'pitt'
    },
    {
        fname: 'tom',
        lname: 'cruise'
    },
    {
        fname: 'mohit',
        lname: 'kumar'
    },
    {
        fname: 'kim',
        lname: 'kumar'
    },
];

const finalUsers = users.map((user) => {
    return {
        // fullName: user.fname +' '+ user.lname
        fullName: `${user.fname} ${user.lname}`
    };
});

// console.log(finalUsers);


//reduce
const movies = [
    {
        name: 'Interstellar',
        rating: 9.5
    },
    {
        name: 'Train To Busan',
        rating: 8
    },
    {
        name: 'Matrix',
        rating: 7
    },
    {
        name: 'Spiderman',
        rating: 9
    },
]
// let total=0;
// movies.forEach((movie)=>{
//      total+= movie.rating;
// });

const totalRating = movies.reduce((total, movie) => {
    total += movie.rating
    return total;
}, 0)
// console.log(totalRating);

//indexOf
const admins = [2, 1, 5];

const user = {
    name: 'avneez',
    id: 1
}

// const isAdmin = admins.indexOf(user.id) > -1;
// console.log(isAdmin);

//Includes
// console.log(admins.includes(user.id));

// find
const players= [
    {
        name:'xyz',
        id:1
    },
    {
        name:'abc',
        id:2
    },
    {
        name:'pqr',
        id:3
    },
]

// const p = players.find((player)=>{
//     if(player.id===2){
//         return true;
//     } else return false;
// });

const p = players.find((player)=>{
 return player.name==='pqr';
});

// console.log(p);

//slice
const names = ['John', 'Jane','Thor','Avneez'];

names.splice(1,3); //delete 3 items from index 1
console.log(names);