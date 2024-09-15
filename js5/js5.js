// Question No.1

// var studentNames = [];

// Question No.2

// var studentData = {
//     names: []
//   };

  
// Question No.3

// var stringArray = ["Alia", "Bazil", "zia", "tahir"];

// Question No.4

// var numbersArray = [1, 2, 3, 4, 5];

// Question No.5

// var booleanArray = [true, false, true, false];

// Question No.6

// var mixedArray = [42, "hello", true, { name: "Alice", age: 30 }, [1, 2, 3]];

// Question No.7

// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// document.write("<h1>Education Qualifications in Pakistan</h1>");
// document.write("<ol>");
// for (var i = 0; i < qualifications.length; i++) {
//     document.write("<li>" + qualifications[i] + "</li>");
// }
// document.write("</ol>");


// Question No.8


// var studentNames = ["Alia", "Bazil", "salar"];
// var studentScores = [420, 375, 450];
// var totalMarks = 500;

// document.write("<h1>Student Results</h1>");

// for (var i = 0; i < studentNames.length; i++) {
//     var name = studentNames[i];
//     var score = studentScores[i];
//     var percentage = (score / totalMarks) * 100;
    
//     document.write("<p>Name: " + name + "<br>");
//     document.write("Score: " + score + " out of " + totalMarks + "<br>");
//     document.write("Percentage: " + percentage + "%</p><br>");
// }

// Question No.9

// var colors = ["Red", "Green", "Blue", "Yellow"];

//         alert("Initial Colors: " + colors.join(", "));

     
//         var colorToAddBeginning = prompt("Enter a color to add to the beginning of the array:");
//         colors.unshift(colorToAddBeginning);
//         alert("After adding to the beginning: " + colors.join(", "));

       
//         var colorToAddEnd = prompt("Enter a color to add to the end of the array:");
//         colors.push(colorToAddEnd);
//         alert("After adding to the end: " + colors.join(", "));

      
//         colors.unshift("Orange", "Purple");
//         alert("After adding two more colors to the beginning: " + colors.join(", "));

      
//         colors.shift();
//         alert("After deleting the first color: " + colors.join(", "));

   
//         colors.pop();
//         alert("After deleting the last color: " + colors.join(", "));

       
//         var indexToAdd = parseInt(prompt("Enter the index at which to add a new color:"));
//         var colorToAdd = prompt("Enter the color to add:");
//         colors.splice(indexToAdd, 0, colorToAdd);
//         alert("After adding a color at index " + indexToAdd + ": " + colors.join(", "));

        
//         var indexToDelete = parseInt(prompt("Enter the index at which to delete colors:"));
//         var numberToDelete = parseInt(prompt("Enter the number of colors to delete:"));
//         colors.splice(indexToDelete, numberToDelete);
//         alert("After deleting " + numberToDelete + " color(s) from index " + indexToDelete + ": " + colors.join(", "));


// Question No.10

// var scores = [78, 92, 85, 69, 95, 70];

     
//         document.write("<h1>Student Scores</h1>");
//         document.write("<h2>Original Scores</h2>");
//         document.write("<p>" + scores.join(", ") + "</p>");

        
//         scores.sort(function(a, b) {
//             return a - b;
//         });

//         document.write("<h2>Sorted Scores</h2>");
//         document.write("<p>" + scores.join(", ") + "</p>");

// Question No. 11

var cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia"];


var selectedCities = [];


selectedCities.push(cities[0]); 
selectedCities.push(cities[1]); 
selectedCities.push(cities[2]); 


document.write("<h1>City Arrays</h1>");
document.write("<h2>All Cities</h2>");
document.write("<p>" + cities.join(", ") + "</p>");
document.write("<h2>Selected Cities</h2>");
document.write("<p>" + selectedCities.join(", ") + "</p>");