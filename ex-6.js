// Exercise #6: Reverse the String
let companyName = "TechUp Thailand";
let reversedCompanyName = "";

let index = companyName.length-1;

for(let letter in companyName){
     reversedCompanyName = reversedCompanyName + companyName[index];
     index--;
}


console.log(reversedCompanyName);
