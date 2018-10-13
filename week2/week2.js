//1
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
console.log(myString.length);
myString = myString.replace(/,/g, ' ');
console.log(myString);
//2
let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
favoriteAnimals.push("turtle");
console.log(favoriteAnimals);
favoriteAnimals.splice(1, 0, "meerkat");
console.log('blowfish', 'meerkat', 'capricorn', 'giraffe', 'turtle')
console.log(favoriteAnimals);
console.log('The array has a length of: ' + favoriteAnimals.length);
favoriteAnimals.splice(3,1);
console.log(favoriteAnimals);
let meerkatIndex = favoriteAnimals.indexOf('meerkat');
console.log('The item you are looking for is at index: ' + meerkatIndex);