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

b1.onclick = function() {
  document.getElementById('Title').innerHTML= "2nd Wisconsin";
};
b2.onclick = function() {
  document.getElementById('Title').innerHTML= "14th Brooklyn";
};
b3.onclick = function() {
  document.getElementById('Title').innerHTML= "2nd U.S Sharpshooters";
};
b4.onclick = function() {
  document.getElementById('Title').innerHTML= "19th Indiana";
};
b5.onclick = function() {
  document.getElementById('Title').innerHTML= "24th Michigan";
};
b6.onclick = function() {
  document.getElementById('Title').innerHTML= "1st Maryland Cavalry";
//   if(rank-disp.ClassName == "rank-menu") {
//     //change menu to troopers
//
// }
};
b7.onclick = function() {
  document.getElementById('Title').innerHTML= "4th U.S Battery";
};

vol.onclick = function() {
  document.getElementById('photo').src= "./img/Uniforms/14thNY/Vol.jpg";
};

pvt.onclick = function() {
  document.getElementById('photo').src= "./img/Uniforms/14thNY/Vol.jpg";
};

vpvt.onclick = function() {
  document.getElementById('photo').src= "./img/Uniforms/14thNY/Cpl.jpg";
};

cpl.onclick = function() {
  document.getElementById('photo').src= "./img/Uniforms/14thNY/Cpl.jpg";
};

sgt.onclick = function() {
  document.getElementById('photo').src= "./img/Uniforms/14thNY/Sgt.jpg";
};

fsgt.onclick = function() {
  document.getElementById('photo').src= "./img/Uniforms/14thNY/FSgt.jpg";
};

slt.onclick = function() {
  document.getElementById('photo').src= "./img/Uniforms/14thNY/SLt.jpg";
};
