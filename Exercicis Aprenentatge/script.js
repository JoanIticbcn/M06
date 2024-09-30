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
let num11 = prompt("Entra una paraula")
let paraularesultant = num11.replace(" ",",")
console.log(paraularesultant)
//Exercici 12
let num12 = prompt("Entra una paraula")
let resultatpparaluan = num12.replace(" ","")
console.log(resultatpparaluan)
//Exercici 13
let data = prompt("Entra una hora")
console.log("La hora introduida es "+data.slice(0,2)+data.slice(3,5)+data.slice(6,8))
//Exercici 14
let num14 = prompt("Entra una paraula amb mes de 10 caracters")
num14 = num14.padEnd(10,'*')
//Exercici 15
let num15 = prompt("Entra un codi de 5 digits")
num15 = num15.padStart(5,"0")
console.log("USR-"+num15)
//Exercici 16
//PORRO
//Exercici 17
let num17 = prompt("Entra una paraula")
let arr = []
for(let i=0;i<num17.length;i++){
    arr.push(num17[i])
}
console.log(arr)
//Exercici 18
let num18 = prompt("Entra una paraula")
let arr2 = []
for(let i=0;i<num17.length;i++){
    arr2.push(num17[i])
}
document.getElementById("a18").textContent = arr2
//Exercici 19
const caracters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
let num19 = prompt("Entra la llargada del teu password")
let password =""
for(let i=0;i<num19;i++){
    password+=caracters[Math.floor(Math.random()*caracters.length+1)]
}
console.log(password)
//Exercici 20
const formats = ["jpg", "jpeg", "png", "docx", "pdf", "xlsx"]
let num20 = prompt("Entra el nom de un fitxer")
let extensio20 = num20.slice(num20.indexOf('.')-1)
if(extensio in formats){
    console.log("Esta a dins de la extensio de formats valids")
}
//Exercici 21
function sumaNumeros() {
    let numeros = []; 
    let sumaTotal = 0; 
    for (let i = 0; i < 10; i++) {
        let numero = parseFloat(prompt(`Introdueix el número ${i + 1} de 10:`));
        numeros.push(numero);
        sumaTotal += numero;
        if (sumaTotal > 20) {
            console.log(`Suma total: ${sumaTotal}`);
            console.log(`Última posició usada per sumar: ${i + 1}`);
            break; 
        }
    }
}
sumaNumeros();
//Exercici 22
function numerosmenors10() {
    let numeros2 = []; 
    for (let i = 0; i < 10; i++) {
        let numero = parseFloat(prompt(`Introdueix el número ${i + 1} de 10:`));
        numeros2.push(numero);
        for(let j=0;j<numeros2.length;j++){
            if(numeros2[j]<10){
                numeros2.splice(numeros2[j])
            }
        }
    }
    console.log(numeros2)
}
numerosmenors10();
//Exercici 23
function numerosDeCadaTipus(){
    let numeros3 =[]
    let Cnumeros =0;
    let Cstrings=0;
    let Cbooleans=0;
    for (let i = 0; i < 10; i++) {
        let numero = parseFloat(prompt("Introdueix un numero: "))
        numeros3.push(numero)
    }
    for(let j=0;j<numeros3.length;j++){
        if(typeof numeros3[j]=="number"){
            Cnumeros++;
        }
        if(typeof numeros3[j]=="string"){
            Cstrings++;
        }
        if(typeof numeros3[j]=="boolean"){
            Cbooleans++;
        }
    }
    console.log(Cnumeros)
    console.log(Cstrings)
    console.log(Cbooleans)
}
//Exercici 24
const daten = new Date().toLocaleDateString();
console.log(daten)
//Exercici 25