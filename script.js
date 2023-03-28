
// TASK 1
const FRUITS = ["Banana", "Orange", "Apple"];
console.log(FRUITS);
// Remove the last item of the FRUITS array.
FRUITS.pop();
console.log(FRUITS);

// Add "Kiwi" to the FRUITS array at the end.
FRUITS.push('Kiwi');
console.log(FRUITS);

// Add "Tomato" to the FRUITS array at the front.
FRUITS.unshift('Tomato');
console.log(FRUITS);

// Remove "Orange" and "Apple" from the FRUITS array
FRUITS.push('Apple');
console.log(FRUITS);

let index1=FRUITS.indexOf('Orange');
FRUITS.splice(index1, 1);
let index2=FRUITS.indexOf('Apple');
FRUITS.splice(index2, 1);
console.log(FRUITS);

// Sort the FRUITS array alphabetically
FRUITS.sort();
console.log(FRUITS);




// TASK 2
function varTest() {
    var x = 1;
    {
        var x = 2;
        console.log(x); // 2, x is declared and initialized in previous line
    }
    console.log(x); // 2, var does not provide block scope and can be accessed from outside the block.
}
varTest();
function letTest() {
    let x = 1;
    {
        x = 2;
        console.log(x); // 2,  x is declared and initialized in previous line 
    }
    console.log(x); // 2, let provides block scope so it cannot be accessed from outside the block 
}
letTest();




// TASK 3.
/* Iterate through the array and
print out something that looks like:
You have not seen "In Bruges" - 5 stars
You have watched "Frozen" - 3 stars
You have watched "Mad Max Fury Road" - 4 stars
You have not seen "Les Miserables" - 3.5 stars */
let movies = [ 
    { title: 'Frozen', rating: 3, hasWatched: true },
    { title: 'In Bruges', rating: 5, hasWatched: false }, 
    { title: 'Mad Max Fury Road', rating: 4, hasWatched: true },
    { title: 'Les Miserables', rating: 3.5, hasWatched: false },
];

// for(let i=0;i<movies.length;i++){
//     if(movies[i].hasWatched == true){
//         console.log(`You have watched "${movies[i].title}" - ${movies[i].rating} stars`);
//     }
//     else{
//         console.log(`You have not seen "${movies[i].title}" - ${movies[i].rating} stars`);
//     }
// }

for(let i=0;i<movies.length;i++){
    if(movies[i].hasWatched==true){
        console.log(`You have watched "${movies[i].title}" - ${movies[i].rating} stars`);
    }
    else{
        console.log(`You have not seen "${movies[i].title}" - ${movies[i].rating} stars`);
    }
}