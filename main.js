
////////////////// 1 /////////////////
// var num = Number(window.prompt('Enter Number'));
// console.log(num);

////////////////// 2 /////////////////
// var num = Number(window.prompt('Enter Number'));
// if (num % 3 == 0 && num % 4 == 0)
// {
//     console.log("yes");
// }
// else
//     console.log("no");

////////////////// 3 /////////////////
// var firstNum = Number(window.prompt('Enter Number'));
// var secondNum = Number(window.prompt('Enter Number'));

// if (firstNum > secondNum)
// {
//     console.log(firstNum);
// }
// else
//     console.log(secondNum);

////////////////// 4 /////////////////
// var num = Number(window.prompt('Enter Number'));

// if (num >= 0)
// {
//     console.log('postive');
// }
// else
//     console.log('negative');

////////////////// 5 /////////////////
// var firstNum = Number(window.prompt('Enter Number'));
// var secondNum = Number(window.prompt('Enter Number'));
// var thirdNum = Number(window.prompt('Enter Number'));
// var max;
// var min;

// if (firstNum > secondNum && firstNum > thirdNum)  
// {
//     max = firstNum;
// }
// else if (secondNum > firstNum && secondNum > thirdNum)
// {
//     max = secondNum;
// }
// else
//     max = thirdNum;


// if (firstNum < secondNum && firstNum < thirdNum)  
// {
//     min = firstNum;
// }
// else if (secondNum < firstNum && secondNum < thirdNum)
// {
//     min = secondNum;
// }
// else
//     min = thirdNum;

// console.log('max element = ' + max, 'min element = ' + min);

////////////////// 6 /////////////////
// var num = Number(window.prompt('Enter Number'));

// if (num % 2 == 0)
//     console.log('even');
// else
//     console.log("odd");

////////////////// 8 /////////////////
// var char = window.prompt('Enter character');

// if (char == 'a' || char == 'e' || char == 'l' || char == 'o' || char == 'u')
//     console.log("vomel");
// else
//     console.log("consonant");

////////////////// 9 /////////////////
// var num = Number(window.prompt('Enter Number'));

// for (var i = 0; i < num; i++)
// {
//     console.log(i + 1);
// }

////////////////// 10 /////////////////
// var num = Number(window.prompt('Enter Number'));

// for (var i = 0; i < 12; i++)
// {
//     console.log(num * (i + 1));
// }

////////////////// 11 /////////////////
// var num = Number(window.prompt('Enter Number'));

// for (var i = 1; i < num; i++)
// {
//     if (i % 2 == 0)
//     {
//         console.log(i);
//     }
// }

////////////////// 12 /////////////////
// var subject1 = Number(window.prompt('Enter Mark'));
// var subject2 = Number(window.prompt('Enter Mark'));
// var subject3 = Number(window.prompt('Enter Mark'));
// var subject4 = Number(window.prompt('Enter Mark'));
// var subject5 = Number(window.prompt('Enter Mark'));

// var totalMark = subject1 + subject2 + subject3 + subject4 + subject5;
// console.log("Total Markes = " + totalMark);
// var average = totalMark / 5;
// console.log("Average Marks = " + average);
// var maxMarks = 500;
// var percentage = (totalMark / maxMarks) * 100;
// console.log("Percentage = " + percentage);

////////////////// 13 /////////////////
// var monNum = Number(window.prompt('Month Number:'));

// if (monNum == 1)
//     console.log("Days in Month: " + 31);
// else if (monNum == 2)
//     console.log("Days in Month: " + 28 + " or " + 29);
// else if (monNum == 3)
//     console.log("Days in Month: " + 31);
// else if (monNum == 4)
//     console.log("Days in Month: " + 30);
// else if (monNum == 5)
//     console.log("Days in Month: " + 31);
// else if (monNum == 6)
//     console.log("Days in Month: " + 30);
// else if (monNum == 7)
//     console.log("Days in Month: " + 31);
// else if (monNum == 8)
//     console.log("Days in Month: " + 31);
// else if (monNum == 9)
//     console.log("Days in Month: " + 30);
// else if (monNum == 10)
//     console.log("Days in Month: " + 31);
// else if (monNum == 11)
//     console.log("Days in Month: " + 30);
// else if (monNum == 12)
//     console.log("Days in Month: " + 31);

////////////////// 14 /////////////////
// var Physics = Number(window.prompt('Enter Physics Mark'));
// var Chemistry = Number(window.prompt('Enter Chemistry Mark'));
// var Biology = Number(window.prompt('Enter Biology Mark'));
// var Mathematics = Number(window.prompt('Enter Mathematics Mark'));
// var Computer = Number(window.prompt('Enter Computer Mark'));

// var totalMark = Physics + Chemistry + Biology + Mathematics + Computer;
// var maxMarks = 500;
// var percentage = (totalMark / maxMarks) * 100;

// if (percentage >= 90)
//     console.log("Grade A");
// else if (percentage >= 80)
//     console.log("Grade B");
// else if (percentage >= 70)
//     console.log("Grade C");
// else if (percentage >= 60)
//     console.log("Grade D");
// else if (percentage >= 40)
//     console.log("Grade E");
// else if (percentage < 40)
//     console.log("Grade F");

////////////////// 15 /////////////////
// var monNum = Number(window.prompt('Month Number:'));

// switch (monNum)
// {
//     case 1:
//         console.log("Days in Month: " + 31);
//         break;
//     case 2:
//         console.log("Days in Month: " + 28 + " or " + 29);
//         break;
//     case 3:
//         console.log("Days in Month: " + 31);
//         break;
//     case 4:
//         console.log("Days in Month: " + 30);
//         break;
//     case 5:
//         console.log("Days in Month: " + 31);
//         break;
//     case 6:
//         console.log("Days in Month: " + 30);
//         break;
//     case 7:
//         console.log("Days in Month: " + 31);
//         break;
//     case 8:
//         console.log("Days in Month: " + 31);
//         break;
//     case 9:
//         console.log("Days in Month: " + 30);
//         break;
//     case 10:
//         console.log("Days in Month: " + 31);
//         break;
//     case 11:
//         console.log("Days in Month: " + 30);
//         break;
//     case 12:
//         console.log("Days in Month: " + 31);
//         break;
//     default:
//         console.log("Invalid");
// }

////////////////// 16 /////////////////
// var char = window.prompt('Enter character');

// switch (char)
// {
//     case 'a':
//     case 'e':
//     case 'l':
//     case 'o':
//     case 'u':
//         console.log("vomel");
//         break;
//     default:
//         console.log("consonant");
// }

////////////////// 17 /////////////////
// var num1 = Number(window.prompt('Enter Number:'));
// var num2 = Number(window.prompt('Enter Number:'));
// var max;

// switch(true) {
//   case num1 > num2:
//     max = num1;
//     break;
//   case num2 > num1:
//     max = num2;
//     break;
//   default:
//     max = "equal";
// }

// console.log(max);

////////////////// 18 /////////////////
// var num = Number(window.prompt('Enter Number:'));
// var modulas = num % 2;

// switch (modulas)
// {
//     case 0:
//         console.log("even");
//         break;
//     default:
//         console.log("odd");
// }

////////////////// 19 /////////////////
// var num = Number(window.prompt('Enter Number:'));

// switch(true)
// {
//     case num == 0:
//         console.log("Zero");
//         break;
//     case num > 0:
//         console.log("positive");
//         break;
//     default:
//         console.log("negative");
// }

////////////////// 20 /////////////////
// var num1 = Number(window.prompt('Enter Number:'));
// var num2 = Number(window.prompt('Enter Number:'));
// var operation = window.prompt('Enter operation:');

// switch (operation)
// {
//     case '+':
//         console.log(num1 + num2);
//         break;
//     case '-':
//         console.log(num1 - num2);
//         break;
//     case '*':
//         console.log(num1 * num2);
//         break;
//     case '/':
//         console.log(num1 / num2);
//         break;
//     default:
//         console.log("Invalid Operation");
// }
