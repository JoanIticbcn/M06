//Exercici1
let num1 = Number(prompt("Entra un numero"))
if (num1>0 || num1<0){
    console.log("El valor "+num1+" es un numero")
}else{
    console.log("El valor "+num1+" NO es un numero")
}
//Exercici2
let num2 = Number(prompt("Entra un numero per exercici 2"))
console.log(Number.isInteger(num2))

//Exercici3
let num3 = Number(prompt("Entra un numero per a exercici 3"))
let tipusConversio = prompt("Entra el tipus de valor entrat C o F")
if(tipusConversio=="F"){
    console.log(9/5*(num3)+32)
}else{
    if(tipusConversio=="C"){
        console.log((num3-32)/0.8)
    }
}
// Exercici 4
let minuts = Number(prompt("Entra els minuts"))
let segons = Number(prompt("Entra els segons"))
console.log((minuts*60)+segons)
//Exercici 5
let num5 = prompt("Entra un numero de 5 digits")
if(num5.length<5){
    alert("El numero no te 5 digits")
}
if(num5[0]==num5[num5.length]){
    console.log("Comença i acaba amb el mateix numero")
}
//Exercici 6
let num6 = prompt("Entra una paraula")
if(num6[num6.length]>0 || num6[num6.length]<0){
    console.log("La paraula acaba en numero")
}else{
    console.log("La paraula acaba en lletra")
}
//Exercici 7
let num7 = prompt("Entra una paraula")
let resultat = num7[0].toUpperCase() + num7.slice(1).toLocaleLowerCase()
console.log(resultat)
//Exercici 8
let num8 = prompt("Entra una paraula")
if(num8.includes('@') && num8.includes('c')){
    console.log("La paraula te @ i c")
}
//Exercici 9
let num9 = prompt("Entra el nom de un fitxer")
let extensio = num9.slice(num9.indexOf('.')-1)
console.log(extensio)
//Exercici 10
let num10 = prompt("Entra una paraula")
if(num10.includes('javascript')){
    let textModificat = text.replace(/javascript/gi, "JS m’agrada!!");
    console.log("Text modificat:", textModificat);
}
//Exercici 11