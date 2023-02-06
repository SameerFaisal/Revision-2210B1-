//Loops in JavaScript
//While
//Do..While
//For
//For in
//For of


// let number=2

// while(number>=10){
//     document.write("Hello World "+number+"<br>")
//     number++
// }

// let number=2

// do{
//     document.write("Hello World "+number+"<br>")
//     number++
// }while(number>=10)

// var colors=["Red","Green","White","Blue"]
// var age=23
// for(let i=0;i<=colors.length-1;i++){
//     document.write(colors[i]+"<br>")
// }

// for(let i in colors){
//     document.write(colors[i]+"<br>")
// }


// let text=""
// document.write(typeof(colors))
// for(let i of colors){
//     text+=i
// }
// document.write(typeof(text))
// document.write(text)



//JavaScript DOM

// function greet(){
//     let email=document.getElementById("em").value
//     let pwd=document.getElementById("pw").value
//     // alert("Welcome "+fn+" "+ln)
//     // document.getElementById("output").innerHTML="Welcome "+fn+" "+ln
//     if(email==="someone@example.com"&&pwd==="123456"){
//         document.getElementById("output").setAttribute('class','success')
//         document.getElementById("output").innerHTML="Login Successful"
//     }
//     else{
//         document.getElementById("output").setAttribute('class','negative')
//         document.getElementById("output").innerHTML="E-Mail or password is incorrect"

//     }

// }


//Return Statement
// let num1=+prompt("Enter first number")
// let num2=+prompt("Enter second number")

// function add(n1,n2){
//     let result=n1+n2
//    return result
// }

// let answer=add(num1,num2)
// document.write("The result of addition is "+answer)

//Array Methods
// var colors=["Red","Green","White","Blue"]
// document.write("<h1>Original Array</h1>: "+colors+"<br>")
// colors.pop()//Deletes last element
// document.write("<h1>Modified Array</h1>"+colors)
// colors.push("Yellow","Purple","Pink") //Adds an element in the last
// document.write("<h1>Modified Array</h1>"+colors)

// alert(colors.length)

// let newarr=colors.slice(3,4)

// alert(newarr)

//Array User Input

// let arr=[]

// let num=prompt("Enter How Many Value You Want To Enter?")

// for(let i=0;i<parseInt(num);i++){
//     arr[i]=prompt("Enter "+i+" th Value")
// }

// document.write(arr)