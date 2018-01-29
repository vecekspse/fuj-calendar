'use strict'
let date = new Date();
let mesic = date.getMonth()
let denVtydnu = date.getDay()
let rok = date.getFullYear()
let datum = date.getDate()
let datum1= new Date(rok , mesic+1, 0)
console.log(datum1)
let prvniDen = new Date(rok, mesic, 1)
console.log(prvniDen)
let prvniDenVtydnu = prvniDen.getDay()
let pocitadlo = prvniDen.getDate()
let pocetRadku = Math.round((datum1.getDate() + prvniDenVtydnu) / 7)
console.log(pocetRadku)
document.write("<table>")
for(let i = 0; i < pocetRadku; i++) {
  document.write("<tr>")
  for(let j = 0; j < 7; j++) {
    if(prvniDenVtydnu > 0) {
      prvniDenVtydnu--
      document.write("<td> </td>")
    } else {      
      if(pocitadlo < datum1.getDate() +1) {
        document.write("<td> " + pocitadlo + " </td>") 
      } else {
        document.write("<td> </td>")
      }
      pocitadlo++
    }
  }
  document.write("</tr>")
}
document.write("</table>")








/*
let date = new Date('February 17, 2017 14:24:00');
console.log(date)
console.log(date.getDate())
console.log(date.getDay())
console.log(date.getMonth())
console.log(date.getFullYear())
console.log(Date.now())*/


/*
let cisla = [5, 10, 15]

let a = cisla[0]
let b = cisla[1]
let c = cisla[2]

let [a, b, c] = cisla
console.log(a, b, c)

let clovek = ['Pepa', 'Vomáčka', 'zedník', 65, 'Housle']
let [jmeno, , povolani, , konicek] = clovek

console.log(jmeno, povolani, konicek) 

let zmrzlina2 = {
  prichut: 'Jahodová',
  kopecky: 3,
  pridavky: ['čokolada, zrmzlina, lentilky']
}
let {prichut, kopecky, pridavky} = zmrzlina2
console.log(prichut, kopecky, pridavky)

function zmrzlina({prichut = 'Jahodová', kopecky = 2, pridavky = ['čoko']} = {}) {
  return `<div class="zmrzlina">  
        <h1>Zmrzlina: ${prichut}</h1>
        <h2>Počet kopečků: ${kopecky}</h2>
        <p>Přídavky: ${pridavky.join()}</p>
       </div>`;
}

let body = document.querySelector('body')
let div = document.createElement('div')
div.innerHTML = zmrzlina()
body.appendChild(div)
let div2 = document.createElement('div')
div2.innerHTML = zmrzlina({prichut: 'citronová'})
body.appendChild(div2)
let div3 = document.createElement('div')
div3.innerHTML = zmrzlina({prichut: 'malinová', kopecky: 5})
body.appendChild(div3)
let div4 = document.createElement('div')
div4.innerHTML = zmrzlina({prichut: 'malinová', kopecky: 5, pridavky: ['lentilky, šlehačka']})
body.appendChild(div4)

*/










/*
// Template literals
let clovek = {
  jmeno: 'Karel',
  prijmeni: 'Gott',
  povolani: 'Zpevak',
  vek: 150
}

let str = 'Člověk jménem \n\n' + clovek.jmeno + ' ' + clovek.prijmeni + ' se \nživí jako ' + clovek.povolani + ' a je mu ' +
          clovek.vek + ' let';
console.log(str)
let str2 = `Člověk jménem ${clovek.jmeno} ${clovek.prijmeni}
            se živí jako ${clovek.povolani} a je mu ${clovek.vek}`;


let card = `<div class="card">
              <h1>${clovek.jmeno} ${clovek.prijmeni}</h1>
              <p>Povolání: <strong>${clovek.povolani}</strong></p>
            </div>`;

document.querySelector('body').innerHTML = card


*/

/*
// SPREAD operátor
let pole1 = [5,6,7,89,1]
let pole2 = [9,6,8,7,6,3,1]
let pole3 = [...pole1, ...pole2];
console.log(pole3)
// REST parametr
function scitej(...pole3) {
  let sum = 0
  for(let cislo of pole3) {
    sum += cislo
  }
  return sum / pole3.length
}
console.log(scitej(1,2,3,45, 8))
// -----------------------------------

*/