var b1 = document.getElementById('b1');
var b2 = document.getElementById('b2');
var b3 = document.getElementById('b3');
var b4 = document.getElementById('b4');
var b5 = document.getElementById('b5');
var b6 = document.getElementById('b6');
var b7 = document.getElementById('b7');

var vol = document.getElementById('Vol');
var pvt = document.getElementById('Pvt');
var vpvt = document.getElementById('VPvt');
var cpl = document.getElementById('Cpl');
var sgt = document.getElementById('Sgt');
var fsgt = document.getElementById('FSgt');
var slt = document.getElementById('SLt');
var flt = document.getElementById('FLt');
var cpt = document.getElementById('Cpt');

var uni= document.getElementById('Uniform');


b1.onclick = function() {
  document.getElementById('Title').innerHTML= "2nd Wisconsin";
  document.getElementById('Uniform').className="2ndWI";
};
b2.onclick = function() {
  document.getElementById('Title').innerHTML= "14th Brooklyn";
  document.getElementById('Uniform').className="14thNY";
};
b3.onclick = function() {
  document.getElementById('Title').innerHTML= "2nd U.S Sharpshooters";
  document.getElementById('Uniform').className="2USS";
};
b4.onclick = function() {
  document.getElementById('Title').innerHTML= "19th Indiana";
  document.getElementById('Uniform').className="19thIN";
};
b5.onclick = function() {
  document.getElementById('Title').innerHTML= "24th Michigan";
  document.getElementById('Uniform').className="24thMI";
};
b6.onclick = function() {
  document.getElementById('Title').innerHTML= "1st Maryland Cavalry";
  document.getElementById('Uniform').className="1stMDCav";
//   if(rank-disp.ClassName == "rank-menu") {
//     //change menu to troopers
//
// }
};
b7.onclick = function() {
  document.getElementById('Title').innerHTML= "4th U.S Battery";
  document.getElementById('Uniform').className="4thUS";
};

vol.onclick = function() {
  if (uni.classList.contains('14thNY') == true) {
    document.getElementById('photo').src= "./img/Uniforms/14thNY/Vol.jpg";
  }
  else {
    document.getElementById('photo').src= "";
  }

};

pvt.onclick = function() {
  if (uni.classList.contains('14thNY') == true) {
    document.getElementById('photo').src= "./img/Uniforms/14thNY/Vol.jpg";
  }
  else {
    document.getElementById('photo').src= "";
  }
};

vpvt.onclick = function() {
  if (uni.classList.contains('14thNY') == true) {
    document.getElementById('photo').src= "./img/Uniforms/14thNY/Cpl.jpg";
  }
  else {
    document.getElementById('photo').src= "";
  }
};

cpl.onclick = function() {
  if (uni.classList.contains('14thNY') == true) {
    document.getElementById('photo').src= "./img/Uniforms/14thNY/Cpl.jpg";
  }
  else {
    document.getElementById('photo').src= "";
  }
};

sgt.onclick = function() {
  if (uni.classList.contains('14thNY') == true) {
    document.getElementById('photo').src= "./img/Uniforms/14thNY/Sgt.jpg";
  }
  else {
    document.getElementById('photo').src= "";
  }
};

fsgt.onclick = function() {
  if (uni.classList.contains('14thNY') == true) {
    document.getElementById('photo').src= "./img/Uniforms/14thNY/FSgt.jpg";
  }
  else {
    document.getElementById('photo').src= "";
  }
};

slt.onclick = function() {
  if (uni.classList.contains('14thNY') == true) {
    document.getElementById('photo').src= "./img/Uniforms/14thNY/SLt.jpg";
  }
  else {
    document.getElementById('photo').src= "";
  }
};
