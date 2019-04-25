// single line comment
// alert("This is from external JS file!");

/*

	Multiple 
	Lines
	Comment

*/

// variables
// var xyz;
// xyz = 100;
// var price = 55.5;
// document.write(price);

// var name = "Shajeel Afzal";
// var profession = ""Software Developer"";

// var isActive = true;
// var isHoliday = false;

// document.write(xyz);

var x = 1;
var y = 100;
var z = 20;

document.write("<br><br><u>do-while Loop</u><br><br>");

/*
	Syntax:
	function name(){
		// statements
	}
*/

function calculations(){
	var u = 10;
	var i = 12;
	document.write(u+i);
	document.write("<br>");
	document.write(u-i);
	document.write("<br>");
	document.write(u*i);
	document.write("<br>");
	document.write(u/i);
	document.write("<br>");
	document.write("<br>");
}

calculations();

var zz = 1;
do{
	document.write(zz + "<br>");
	zz++;
}while(zz<10);


document.write("<br><br><u>do-while Loop</u><br><br>");

/*
	do{
		STATEMENTS;	
	}while(CONDITION);
*/

var zz = 1;
do{
	document.write(zz + "<br>");
	zz++;
}while(zz<10);

// do-while always executes atleast 1 time 

document.write("<br>");

var zz = 1;
do{
	document.write(zz + "<br>");
	zz++;
}while(false);


document.write("<br><br><u>while Loop</u><br><br>");

/*
	while(condition){

	}
*/

var z=0;
while(z<10){
	document.write(z + "<br>");
	z++;
}

document.write("<br>");

while(0){
	document.write("eRozgaar<br>");

	z++;
	if (z==10) {
		break;
	}
}

// For Loop
/*
	for(statements1; statements2; statements3){
		statements;
	}
*/

document.write("<h1>For Loop</h1>");

for(document.write("Test"); 
	false; 
	document.write("Another Test")){

	document.write("Will this execute?");

}

document.write("<br><br><u>continue keyword in loops</u><br><br>");

for(var y=0; y<10; y++){
	if(y==5){
		continue;
	}
	document.write(y+"<br>");
}

document.write("<br><br>");


document.write("<br><br><u>break statement in loops</u><br><br>");

for(var y=0; y<10; y++){
	document.write(y);
	break;
}


document.write("<br><br>");

var x = 1;
for(document.write("for loop statement 1<br>"); 
	x <= 2; 
	document.write("for loop statement 3<br>"))
{
	document.write("eRozgaar<br>");	
	x++;
}


document.write("<br><br>");

document.write("<table><tr><th>ID</th><th>Name</th><th>CNIC</th><th>Domain</th></tr>");
for(var z=0; z<=100; z++){
	document.write("<tr><td>"+ z +"</td><td>Shajeel</td><td>35302</td><td>Domain</td></tr>");
}
document.write("</table>");

document.write("<br><br>");

var z=1;
for(;z<=9;){
	z++;
	document.write("eRozgaar<br>");
}

document.write("<br><br>");

for(var i=11; i<10; i=i+1){
	document.write("eRozgaar<br>");
}

document.write("--------------<br>");

// switch statement
/*
	switch(expression){
		case n1:
			statements;
			break;
		default:
			statements;
			break;
		case n2:
			statements;
			break;
		
	}
*/
switch(x){
	case 1:
		document.write("Case 1<br>");
		break;
	case 2:
		document.write("Case 2<br>");
		break;
	case 3:
		document.write("Case 3");
		break;
	case 50:
		document.write("Case 50<br>");
		break;
	default:
		document.write("Default Case<br><br>");
		break;
}

switch(x){
	case 1:
	case 2:
		document.write("Case 1<br>");
		document.write("Case 2<br>");
		break;
	case 3:
		document.write("Case 3");
		break;
	case 50:
		document.write("Case 50<br>");
		break;
	default:
		document.write("Default Case<br><br>");
		break;
}


// Conditional Operators
if (x > y) {
	document.write("x is greater than y<br>");
} else {
	document.write("x is not greater than y<br>");
}


if (x > y) {
	document.write("X > Y<br>");	
} else if(x < y){
	document.write("X < Y<br>");	
} else if(x == y){
	document.write("X = Y<br>");	
} 

// Comparison Operator

document.write(x == y);
document.write("<br>");

document.write(x === y);
document.write("<br>");

document.write(x != y);
document.write("<br>");

document.write(x !== y);
document.write("<br>");

document.write(x > y);
document.write("<br>");

document.write(x < y);
document.write("<br>");

document.write(x >= y);
document.write("<br>");

document.write(x <= y);
document.write("<br>");

// Logical Operator
// AND=&&, OR=||, NOT=!
document.write((x > 10) && (y > 20));
document.write("<br>");

document.write((x > 10) || (y > 20));
document.write("<br>");

document.write(!(x > 10));
document.write("<br>");

// ternory operator
var age = 14;
var result = (age > 18) ? "adult" : "not adult";
document.write(result);

// Concatination
var firstName = "Shajeel";
var lastName = "Afzal";

document.write(firstName + " " + lastName);


















