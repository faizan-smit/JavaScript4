var arr1, arr2, useInp, total, percentage, grade;
arr1 = ['Computer', 'Physics', 'Urdu', 'Islamiat', 'Maths'];
arr2 = [];
total = 0;
for(i=0; i<arr1.length; i++){
    
    useInp = parseInt(prompt('Please enter Marks of' + arr1[i]));
    
    arr2[i] = useInp;

}
document.write("<table border=1>");

 for(i=0; i<arr1.length; i++){
    document.write("<tr> <td> "+ arr1[i] + "</td> <td>"+ arr2[i] + "</td>  <tr/>");
 }

 for(i=0; i<arr1.length; i++){
    total+= arr2[i]
 }
percentage = (total*100)/500
if(percentage<=100 && percentage>=80){
    grade = 'A+'
}
else if(percentage<=79 && percentage>=70){
    grade = 'A'
}
else if(percentage<=69 && percentage>=60){
    grade = 'B'
}
else if(percentage<=59 && percentage>=50){
    grade = 'C'
}
else if(percentage<=49 && percentage>=40){
    grade = 'D'
}
else if(percentage<40){
    grade = 'Fail'
}
else {
    grade = 'not valid'
}

document.write("<tr> <td> Total </td> <td>"+ total + " out of 500</td>  <tr/>");
document.write("<tr> <td> Percentage </td> <td>"+ percentage + "%</td>  <tr/>");
document.write("<tr> <td> Grade </td> <td>"+ grade + "</td>  <tr/>");
 
document.write("</table>");