$(document).ready(function(){
	$('.icon').click(function(){
	$('.icon').toggleClass('active');
	})
})


function back() {
  window.location="../index.html";
}

function back2() {
  window.location="./index.html";
}

function toggleSidebar(){
	document.getElementById("sidebar").classList.toggle('active');
}

function changeColor(obj, colorName){
	obj.style.backgroundColor = colorName;
}

function Navbar1(){
	document.getElementById("navbartext1").classList.toggle('sactive');
	document.getElementById("navbartext2").classList.toggle('deactive');
	document.getElementById("navbartext3").classList.toggle('deactive');
	document.getElementById("navbartext4").classList.toggle('deactive');
  }
function Navbar2(){
	document.getElementById("navbartext2").classList.toggle('sactive');
	document.getElementById("navbartext1").classList.toggle('deactive');
	document.getElementById("navbartext3").classList.toggle('deactive');
	document.getElementById("navbartext4").classList.toggle('deactive');
  }
function Navbar3(){
	document.getElementById("navbartext3").classList.toggle('sactive');
	document.getElementById("navbartext1").classList.toggle('deactive');
	document.getElementById("navbartext2").classList.toggle('deactive');
	document.getElementById("navbartext4").classList.toggle('deactive');
  }		  
function Navbar4(){
	document.getElementById("navbartext4").classList.toggle('sactive');
	document.getElementById("navbartext2").classList.toggle('deactive');
	document.getElementById("navbartext3").classList.toggle('deactive');
	document.getElementById("navbartext1").classList.toggle('deactive');
  }
function productMenu(){
	document.getElementById("industrial").classList.toggle('showitem');
	document.getElementById("agricultural").classList.toggle('showitem');
  }

function industrialMenu(){
	document.getElementById("ptk1000").classList.toggle('showitem');
	document.getElementById("ptk3000").classList.toggle('showitem');
  }
function agriMenu(){
	document.getElementById("uta").classList.toggle('showitem');
  }

function benefit1(){
	document.getElementById("ben1").className='';
	document.getElementById("ben1").classList.toggle('benactive');
}
function benefit1out(){
	document.getElementById("ben1").className='';
	document.getElementById("ben1").classList.toggle('bendeactive');
}
function benefit2(){
	document.getElementById("ben2").className='';
	document.getElementById("ben2").classList.toggle('benactive');
}
function benefit2out(){
	document.getElementById("ben2").className='';
	document.getElementById("ben2").classList.toggle('bendeactive');
}
function benefit3(){
	document.getElementById("ben3").className='';
	document.getElementById("ben3").classList.toggle('benactive');
}
function benefit3out(){
	document.getElementById("ben3").className='';
	document.getElementById("ben3").classList.toggle('bendeactive');
}
function benefit4(){
	document.getElementById("ben4").className='';
	document.getElementById("ben4").classList.toggle('benactive');
}
function benefit4out(){
	document.getElementById("ben4").className='';
	document.getElementById("ben4").classList.toggle('bendeactive');
}
function benefit5(){
	document.getElementById("ben5").className='';
	document.getElementById("ben5").classList.toggle('benactive');
}
function benefit5out(){
	document.getElementById("ben5").className='';
	document.getElementById("ben5").classList.toggle('bendeactive');
}
function benefit6(){
	document.getElementById("ben6").className='';
	document.getElementById("ben6").classList.toggle('benactive');
}
function benefit6out(){
	document.getElementById("ben6").className='';
	document.getElementById("ben6").classList.toggle('bendeactive');
}
function benefit7(){
	document.getElementById("ben7").className='';
	document.getElementById("ben7").classList.toggle('benactive');
}
function benefit7out(){
	document.getElementById("ben7").className='';
	document.getElementById("ben7").classList.toggle('bendeactive');
}
function benefit8(){
	document.getElementById("ben8").className='';
	document.getElementById("ben8").classList.toggle('benactive');
}
function benefit8out(){
	document.getElementById("ben8").className='';
	document.getElementById("ben8").classList.toggle('bendeactive');
}
function benefit9(){
	document.getElementById("ben9").className='';
	document.getElementById("ben9").classList.toggle('benactive');
}
function benefit9out(){
	document.getElementById("ben9").className='';
	document.getElementById("ben9").classList.toggle('bendeactive');
}
function benefit10(){
	document.getElementById("ben10").className='';
	document.getElementById("ben10").classList.toggle('benactive');
}
function benefit10out(){
	document.getElementById("ben10").className='';
	document.getElementById("ben10").classList.toggle('bendeactive');
}

function benefit11(){
	document.getElementById("ben11").className='';
	document.getElementById("ben11").classList.toggle('benactive');
}
function benefit11out(){
	document.getElementById("ben11").className='';
	document.getElementById("ben11").classList.toggle('bendeactive');
}
function benefit12(){
	document.getElementById("ben12").className='';
	document.getElementById("ben12").classList.toggle('benactive');
}
function benefit12out(){
	document.getElementById("ben12").className='';
	document.getElementById("ben12").classList.toggle('bendeactive');
}
function benefit13(){
	document.getElementById("ben13").className='';
	document.getElementById("ben13").classList.toggle('benactive');
}
function benefit13out(){
	document.getElementById("ben13").className='';
	document.getElementById("ben13").classList.toggle('bendeactive');
}
function benefit14(){
	document.getElementById("ben14").className='';
	document.getElementById("ben14").classList.toggle('benactive');
}
function benefit14out(){
	document.getElementById("ben14").className='';
	document.getElementById("ben14").classList.toggle('bendeactive');
}
function benefit15(){
	document.getElementById("ben15").className='';
	document.getElementById("ben15").classList.toggle('benactive');
}
function benefit15out(){
	document.getElementById("ben15").className='';
	document.getElementById("ben15").classList.toggle('bendeactive');
}
function benefit16(){
	document.getElementById("ben16").className='';
	document.getElementById("ben16").classList.toggle('benactive');
}
function benefit16out(){
	document.getElementById("ben16").className='';
	document.getElementById("ben16").classList.toggle('bendeactive');
}
function benefit17(){
	document.getElementById("ben17").className='';
	document.getElementById("ben17").classList.toggle('benactive');
}
function benefit17out(){
	document.getElementById("ben17").className='';
	document.getElementById("ben17").classList.toggle('bendeactive');
}
function benefit18(){
	document.getElementById("ben18").className='';
	document.getElementById("ben18").classList.toggle('benactive');
}
function benefit18out(){
	document.getElementById("ben18").className='';
	document.getElementById("ben18").classList.toggle('bendeactive');
}

function benefitsOut(){
	document.getElementById("benefitscontainer").className='';
	document.getElementById("benefitscontainer").classList.toggle('benefitsanm');
	document.getElementById("howcontainer").className='';
	document.getElementById("howcontainer").classList.toggle('howanm');
	document.getElementById("seeproducts").className='';
	document.getElementById("seeproducts").classList.toggle('btn_productoff');
	document.getElementById("seebenefits").className='';
	document.getElementById("seebenefits").classList.toggle('btn_product');
	document.getElementById("cont3").className='';
	document.getElementById("cont3").classList.toggle('content3in');
}
function benefitsIn(){
	document.getElementById("benefitscontainer").className='';
	document.getElementById("benefitscontainer").classList.toggle('benefits');
	document.getElementById("howcontainer").className='';
	document.getElementById("howcontainer").classList.toggle('how');
	document.getElementById("seeproducts").className='';
	document.getElementById("seeproducts").classList.toggle('btn_product');
	document.getElementById("seebenefits").className='';
	document.getElementById("seebenefits").classList.toggle('btn_productoff');
	document.getElementById("cont3").className='';
	document.getElementById("cont3").classList.toggle('content3');
}

function tabchange1(){
	document.getElementById("tab1").className='';
	document.getElementById("tab1content").className='';
	document.getElementById("tab2").className='';
	document.getElementById("tab2content").className='';
	document.getElementById("tab3").className='';
	document.getElementById("tab3content").className='';
	document.getElementById("tab4").className='';
	document.getElementById("tab4content").className='';
	document.getElementById("tab1").classList.toggle('producttabsactive');
	document.getElementById("tab1content").classList.toggle('productcontenta');
	document.getElementById("tab2").classList.toggle('producttabs');
	document.getElementById("tab2content").classList.toggle('productcontent');
	document.getElementById("tab3").classList.toggle('producttabs');
	document.getElementById("tab3content").classList.toggle('productcontent');
	document.getElementById("tab4").classList.toggle('producttabs');
	document.getElementById("tab4content").classList.toggle('productcontent');

}

function tabchange2(){
	document.getElementById("tab1").className='';
	document.getElementById("tab1content").className='';
	document.getElementById("tab2").className='';
	document.getElementById("tab2content").className='';
	document.getElementById("tab3").className='';
	document.getElementById("tab3content").className='';
	document.getElementById("tab4").className='';
	document.getElementById("tab4content").className='';
	document.getElementById("tab1").classList.toggle('producttabs');
	document.getElementById("tab1content").classList.toggle('productcontent');
	document.getElementById("tab2").classList.toggle('producttabsactive');
	document.getElementById("tab2content").classList.toggle('productcontenta');
	document.getElementById("tab3").classList.toggle('producttabs');
	document.getElementById("tab3content").classList.toggle('productcontent');
	document.getElementById("tab4").classList.toggle('producttabs');
	document.getElementById("tab4content").classList.toggle('productcontent');
}

function tabchange3(){
	document.getElementById("tab1").className='';
	document.getElementById("tab1content").className='';
	document.getElementById("tab2").className='';
	document.getElementById("tab2content").className='';
	document.getElementById("tab3").className='';
	document.getElementById("tab3content").className='';
	document.getElementById("tab4").className='';
	document.getElementById("tab4content").className='';
	document.getElementById("tab1").classList.toggle('producttabs');
	document.getElementById("tab1content").classList.toggle('productcontent');
	document.getElementById("tab2").classList.toggle('producttabs');
	document.getElementById("tab2content").classList.toggle('productcontent');
	document.getElementById("tab3").classList.toggle('producttabsactive');
	document.getElementById("tab3content").classList.toggle('productcontenta');
	document.getElementById("tab4").classList.toggle('producttabs');
	document.getElementById("tab4content").classList.toggle('productcontent');
}


function tabchange4(){
	document.getElementById("tab1").className='';
	document.getElementById("tab1content").className='';
	document.getElementById("tab2").className='';
	document.getElementById("tab2content").className='';
	document.getElementById("tab3").className='';
	document.getElementById("tab3content").className='';
	document.getElementById("tab4").className='';
	document.getElementById("tab4content").className='';
	document.getElementById("tab1").classList.toggle('producttabs');
	document.getElementById("tab1content").classList.toggle('productcontent');
	document.getElementById("tab2").classList.toggle('producttabs');
	document.getElementById("tab2content").classList.toggle('productcontent');
	document.getElementById("tab3").classList.toggle('producttabs');
	document.getElementById("tab3content").classList.toggle('productcontent');
	document.getElementById("tab4").classList.toggle('producttabsactive');
	document.getElementById("tab4content").classList.toggle('productcontenta');
}


















