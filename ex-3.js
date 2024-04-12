// Exercise #3: Find a Minimum Score
let scores = [100, 20, 3, 1000];
let minScore;

let temp = scores[0];
for(let i = 1; i < scores.length; i++) {
     if(temp > scores[i]){
          temp = scores[i];
     }
}
minScore = temp;

console.log(minScore);
