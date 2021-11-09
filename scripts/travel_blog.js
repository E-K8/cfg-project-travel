 function check() {
	var i=0;
	var q1= document.quiz.question1.value;
	var q2= document.quiz.question2.value;
	var q3= document.quiz.question3.value;
	var q4= document.quiz.question4.value;
	var results= document.getElementById("results");
	var quiz= document.getElementById("quiz");
	if(q1 == "Wellington") {i++}
	if(q2 == "Jerusalem") {i++}
	if(q3 == "Bern") {i++}
	if(q4 == "Brasilia") {i++}
	quiz.style.display= "none";

	if (i<= 3) {
	  results.textContent= `Your result is ${i}.You don't know all of your capitals! Maybe you should travel more!`

	}else {
	    results.textContent= `Well done. You know your Capital Cities! Your result is ${i}.Use our website to visit some more`

	}
}

