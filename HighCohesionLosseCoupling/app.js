var student = {
    name : "",
    type: "student"
}

document.addEventListener('DOMContentLoaded' , contentLoaded);

function contentLoaded(event){
    document.getElementById('name').addEventListener('keyup' , keyUp);
}

function keyUp(event){
    calculateNumericOutput();
}
/**
 * THIS FUNCTION IS THE PERFECT EXAMPLE OF LOW COHENSION.
 * IT IS DOING MANY RELATED ACTIVITY. 
 * FIRST TAKEN STUDENT NAME WITH name ID , 
 * THEN CALCLATING ASCII VALUE 
 * THEN SETTING THE OUTPUT IN OUTPUT ELEMENT WHERE 1ST AND LAST OPERATION ARE NOT RELATED TO CALCULATING NUMERIC VALUE FOF NAME
 * IN MICROCOSM , IT IS TOTALLY LOW COHESION. 
 */
function calculateNumericOutput(){
    student.name = document.getElementById('name').value;
    var totalNameValue = 0;
    for (var i=0; i<student.name.length; i++){
        totalNameValue += student.name.charCodeAt(i);
    }
    // insert result into the page
    var output = "Total Numeric Value of Person's Name is " + totalNameValue;
    document.getElementById('output').innerText = output;
}