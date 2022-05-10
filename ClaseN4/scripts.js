function par_impar(){
    num1=document.getElementById("n1").value;
      console.log(num1);
      if(num1.length>0 && !isNaN(num1)){
        if(num1%2==0){
            document.getElementById("rs").innerHTML="es par";
        }
        else{
          document.getElementById("rs").innerHTML="es impar";
        }
       
      } else{
        alert("ingrese un numero")
        document.getElementById("n1").focus();
    }
      
}
function ACPI(){
  radio=document.getElementById("n2").value;
  const pi=3.14;
  var a;
  a=pi*radio*radio;
  let msg="El área del circulo es: "+a;
  document.getElementById("rsp").innerHTML=msg;
}
function grado(){
  a=document.getElementById("na").value;
  b=document.getElementById("nb").value;
  c=document.getElementById("nc").value;
  var resu1=((((-1)*b)-(Math.sqrt(Math.pow(b,2))-(4*a*c))))/(2*a);
  var resu2=((((-1)*b)+(Math.sqrt(Math.pow(b,2))-(4*a*c))))/(2*a);
  let msg="El primer resultado es: "+resu1;
  let msg2="El segundo resultado es: "+resu2;
  document.getElementById("rsp").innerHTML=msg;
  document.getElementById("rsp2").innerHTML=msg2;
}
function nota(){
 
  n1=document.getElementById("nta1").value;
  n2=document.getElementById("nota2").value;
 
  var pro;
  pro=n1+n2;
  let msg="El promedio es: "+pro;
  document.getElementById("rsp").innerHTML=msg;
   /*nt=document.getElementById("nota").value;
  var suma
  for (var i=0; i<11; i++) {
    let msgs="La nota "+i+ " es: "+nt;
    document.getElementById("rsp").innerHTML=msg;
    for (nt  = 0;  nt < i; nt++) {
    }
  }*/
}