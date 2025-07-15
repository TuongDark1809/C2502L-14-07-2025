const students = [
{ id: 1, name: 'An', age: 16, gender: 'Nam', scores: [7, 8, 9] },
{ id: 2, name: 'Bình', age: 17, gender: 'Nam', scores: [6, 6, 5] },
{ id: 3, name: 'Cúc', age: 16, gender: 'Nữ', scores: [9, 9, 10] },
{ id: 4, name: 'Dương', age: 18, gender: 'Nữ', scores: [4, 5, 6] },
{ id: 5, name: 'E', age: 15, gender: 'Nam', scores: [10, 10, 10] }
];

for (let student of students) {
    console.log(student.name + " " +  student.age + " tuổi");
};


let averageScore = function (scores) {
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    return sum / scores.length
};

for (let student of students) {
    console.log(student.name + " Điểm trung bình: " + averageScore(student.scores).toFixed(1));
};

console.log (students.filter(students => averageScore(students.scores) >= 8));

console.log (students.find(students => students.age >= 17));

console.log("Có học sinh nào có điểm trung bình dưới 5 không: " + students.some(students => averageScore(students.scores) < 5));

console.log("Tất cả học sinh có tuổi >= 15 không: " + students.every(students => students.age >= 15));

let averageClassScore = 0;
for (let i = 0; i < students.length; i++) {
    averageClassScore += averageScore(students[i].scores);
}
console.log ("Điểm trung bình toàn bộ lớp: " + averageClassScore/students.length);



