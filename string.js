// no.1
let str = "extravaganza"
let substr = str.substring(8 ,);
console.log(substr);

// no.2
let food = "The quick fox jumped over the lazy dog";
let foodToAdd = "eat";
let IndexPosition = 4;
let newfood = food.substring(0, IndexPosition)+foodToAdd + food.substring(IndexPosition);
console.log(newfood);

//  no.3 
let story = "The quick brown fox jumps over the lazy dog";
console.log((story.match('the')).length);
console.log((story.match('brown')).length);

// no.4
let string1 = "The pupils are reading in the library";
let stringtoFind = "are";
let indexOfAre = string1 .indexOf(stringtoFind);
console.log ({indexOfAre});

let string2 = "The child was sitting at the table before it fell";
let stringFind = "sitting"
let indexOfSitting = string2 .indexOf(stringFind);
console.log({indexOfSitting});

// no.5
let word1 = 'wonderful';
let upperCase = word1 . toUpperCase();
console.log(upperCase);

let word2 = "amaizing";
let lowerCase1 = word2 .toLowerCase();
console.log(lowerCase1);

let word3 = "UndERneath";
let lowerCase2 = word3 .toLowerCase();
console.log(lowerCase2);

function titleCase(str){
    str = str .toLowerCase().split('');
    for (let i = 0; i <str.length; i++){
        str[i] =str[i] .charAt(0) .toUpperCase() + str[i] .slice(1);
    }
    return str .join('');
}
console.log(titleCase("A wonderful world"))



