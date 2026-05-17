let marks = 90;
let grade = (marks >= 90) ? "A" :
    (marks >= 70) ? "B" :
        (marks >= 60) ? "C" :
            (marks >= 50) ? "D" : fail;
console.log(grade);