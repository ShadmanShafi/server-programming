//Synchronous and Asynchronous Functiom

//readFile
//writeFile
//appendFile
//delete
//rename

const fs = require("fs");

// fs.writeFileSync("./contents/demoFile.txt", "Learning NodeJS.");
// fs.appendFileSync("./contents/demoFile.txt", "\nBut Are We???");

// fs.rename("./contents/demoFile.txt", "./contents/RenamedFile.txt", (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Rename Successful");
//     }
// });

// fs.readFile("./contents/RenamedFile.txt", "utf-8", (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

// console.log("Before");
// fs.readFile("./contents/RenamedFile.txt", "utf-8", (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         fs.appendFile("./contents/RenamedFile.txt", "Is this a Synchronous Process?", (err) => {
//             console.log(err);
//         });
//         fs.readFile("./contents/RenamedFile.txt", "utf-8", (err, data) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 console.log(data);
//             }
//         })
//     }
// });
// console.log("After");

fs.unlink("./contents/RenamedFile.txt", (err) => {
    if (!err) console.log("Deleted Successfully.");
});