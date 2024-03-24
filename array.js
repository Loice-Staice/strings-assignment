// no.1
let arr1 =[3,7,34,90,12];
console.log(`last item`,arr1[arr1.length -1])

// no.2
let arr2 = [true, "green","where", 12, 56];
console.log(`last item`,arr2[arr2.concat.length -1])

// no.3 Write a JS script to sort the following array itemsvar arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
var answer = arr3.sort();
console.log(answer)

// no.4 Write a program to remove duplicates from the following array.Console the array without duplicates, and console another array that only contains the duplicates
let arr = ["boy", "man", "girl", "school", "girl", "woman"];
function removeDuplicates(arr)  {
    return[...new Set(arr)]
}
console.log(removeDuplicates(arr))

//
let b =["boy", "man", "girl", "school", "girl", "woman"];
function duplicates(b) {
    return[...new Set(b)]
}
console.log(duplicates(b))

//Write a JS script to search for the following word in the array."food"If the word is present, return it else return "the search word was not found"let arr5 = ["the", "way", "x", 4];
let arr5 = ["the", "way", "x", 4];
let s = arr5.includes("food");
if(s==true){
    console.log("the search word was not found")
}
else{
    console.log("the search word was not found")
}






