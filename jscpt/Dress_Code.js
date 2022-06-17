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
  else if (uni.classList.contains('2ndWI') == true) {
    document.getElementById('photo').src= "./img/Uniforms/2ndWI/Vol.jpg";
  }
  else if (uni.classList.contains('2USS') == true) {
    document.getElementById('photo').src= "./img/Uniforms/2USS/Vol.jpg";
  }
  else if (uni.classList.contains('19thIN') == true) {
    document.getElementById('photo').src= "./img/Uniforms/19thIN/Vol.jpg";
  }
  else if (uni.classList.contains('24thMI') == true) {
    document.getElementById('photo').src= "./img/Uniforms/24thMI/Vol.jpg";
  }
  else if (uni.classList.contains('1stMDCav') == true) {
    document.getElementById('photo').src= "./img/Uniforms/1stMDCav/Vol.jpg";
  }
  else if (uni.classList.contains('4thUS') == true) {
    document.getElementById('photo').src= "./img/Uniforms/4thUS/Vol.jpg";
  }
};

pvt.onclick = function() {
  if (uni.classList.contains('14thNY') == true) {
    document.getElementById('photo').src= "./img/Uniforms/14thNY/Vol.jpg";
  }
  else if (uni.classList.contains('2ndWI') == true) {
    document.getElementById('photo').src= "./img/Uniforms/2ndWI/Vol.jpg";
  }
  else if (uni.classList.contains('2USS') == true) {
    document.getElementById('photo').src= "./img/Uniforms/2USS/Vol.jpg";
  }
  else if (uni.classList.contains('19thIN') == true) {
    document.getElementById('photo').src= "./img/Uniforms/19thIN/Vol.jpg";
  }
  else if (uni.classList.contains('24thMI') == true) {
    document.getElementById('photo').src= "./img/Uniforms/24thMI/Vol.jpg";
  }
  else if (uni.classList.contains('1stMDCav') == true) {
    document.getElementById('photo').src= "./img/Uniforms/1stMDCav/Vol.jpg";
  }
  else if (uni.classList.contains('4thUS') == true) {
    document.getElementById('photo').src= "./img/Uniforms/4thUS/Vol.jpg";
  }
};

vpvt.onclick = function() {
  if (uni.classList.contains('14thNY') == true) {
    document.getElementById('photo').src= "./img/Uniforms/14thNY/Cpl.jpg";
  }
  else if (uni.classList.contains('2ndWI') == true) {
    document.getElementById('photo').src= "./img/Uniforms/2ndWI/Cpl.jpg";
  }
  else if (uni.classList.contains('2USS') == true) {
    document.getElementById('photo').src= "./img/Uniforms/2USS/Cpl.jpg";
  }
  else if (uni.classList.contains('19thIN') == true) {
    document.getElementById('photo').src= "./img/Uniforms/19thIN/Cpl.jpg";
  }
  else if (uni.classList.contains('24thMI') == true) {
    document.getElementById('photo').src= "./img/Uniforms/24thMI/Cpl.jpg";
  }
  else if (uni.classList.contains('1stMDCav') == true) {
    document.getElementById('photo').src= "./img/Uniforms/1stMDCav/Cpl.jpg";
  }
  else if (uni.classList.contains('4thUS') == true) {
    document.getElementById('photo').src= "./img/Uniforms/4thUS/Cpl.jpg";
  }
};

cpl.onclick = function() {
  if (uni.classList.contains('14thNY') == true) {
    document.getElementById('photo').src= "./img/Uniforms/14thNY/Cpl.jpg";
  }
  else if (uni.classList.contains('2ndWI') == true) {
    document.getElementById('photo').src= "./img/Uniforms/2ndWI/Cpl.jpg";
  }
  else if (uni.classList.contains('2USS') == true) {
    document.getElementById('photo').src= "./img/Uniforms/2USS/Cpl.jpg";
  }
  else if (uni.classList.contains('19thIN') == true) {
    document.getElementById('photo').src= "./img/Uniforms/19thIN/Cpl.jpg";
  }
  else if (uni.classList.contains('24thMI') == true) {
    document.getElementById('photo').src= "./img/Uniforms/24thMI/Cpl.jpg";
  }
  else if (uni.classList.contains('1stMDCav') == true) {
    document.getElementById('photo').src= "./img/Uniforms/1stMDCav/Cpl.jpg";
  }
  else if (uni.classList.contains('4thUS') == true) {
    document.getElementById('photo').src= "./img/Uniforms/4thUS/Cpl.jpg";
  }
};

sgt.onclick = function() {
  if (uni.classList.contains('14thNY') == true) {
    document.getElementById('photo').src= "./img/Uniforms/14thNY/Sgt.jpg";
  }
  else if (uni.classList.contains('2ndWI') == true) {
    document.getElementById('photo').src= "./img/Uniforms/2ndWI/Sgt.jpg";
  }
  else if (uni.classList.contains('2USS') == true) {
    document.getElementById('photo').src= "./img/Uniforms/2USS/Sgt.jpg";
  }
  else if (uni.classList.contains('19thIN') == true) {
    document.getElementById('photo').src= "./img/Uniforms/19thIN/Sgt.jpg";
  }
  else if (uni.classList.contains('24thMI') == true) {
    document.getElementById('photo').src= "./img/Uniforms/24thMI/Sgt.jpg";
  }
  else if (uni.classList.contains('1stMDCav') == true) {
    document.getElementById('photo').src= "./img/Uniforms/1stMDCav/Sgt.jpg";
  }
  else if (uni.classList.contains('4thUS') == true) {
    document.getElementById('photo').src= "./img/Uniforms/4thUS/Sgt.jpg";
  }
};

fsgt.onclick = function() {
  if (uni.classList.contains('14thNY') == true) {
    document.getElementById('photo').src= "./img/Uniforms/14thNY/FSgt.jpg";
  }
  else if (uni.classList.contains('2ndWI') == true) {
    document.getElementById('photo').src= "./img/Uniforms/2ndWI/FSgt.jpg";
  }
  else if (uni.classList.contains('2USS') == true) {
    document.getElementById('photo').src= "./img/Uniforms/2USS/FSgt.jpg";
  }
  else if (uni.classList.contains('19thIN') == true) {
    document.getElementById('photo').src= "./img/Uniforms/19thIN/FSgt.jpg";
  }
  else if (uni.classList.contains('24thMI') == true) {
    document.getElementById('photo').src= "./img/Uniforms/24thMI/FSgt.jpg";
  }
  else if (uni.classList.contains('1stMDCav') == true) {
    document.getElementById('photo').src= "./img/Uniforms/1stMDCav/FSgt.jpg";
  }
  else if (uni.classList.contains('4thUS') == true) {
    document.getElementById('photo').src= "./img/Uniforms/4thUS/FSgt.jpg";
  }
};

slt.onclick = function() {
  if (uni.classList.contains('14thNY') == true) {
    document.getElementById('photo').src= "./img/Uniforms/14thNY/SLt.jpg";
  }
  else if (uni.classList.contains('2ndWI') == true) {
    document.getElementById('photo').src= "./img/Uniforms/2ndWI/SLt.jpg";
  }
  else if (uni.classList.contains('2USS') == true) {
    document.getElementById('photo').src= "./img/Uniforms/2USS/SLt.jpg";
  }
  else if (uni.classList.contains('19thIN') == true) {
    document.getElementById('photo').src= "./img/Uniforms/19thIN/SLt.jpg";
  }
  else if (uni.classList.contains('24thMI') == true) {
    document.getElementById('photo').src= "./img/Uniforms/24thMI/SLt.jpg";
  }
  else if (uni.classList.contains('1stMDCav') == true) {
    document.getElementById('photo').src= "./img/Uniforms/1stMDCav/SLt.jpg";
  }
  else if (uni.classList.contains('4thUS') == true) {
    document.getElementById('photo').src= "./img/Uniforms/4thUS/SLt.jpg";
  }
};
