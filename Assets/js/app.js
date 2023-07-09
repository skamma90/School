const mybtn=this.document.getElementById('myTopBtn');
// window.onscroll=function()
// {
//   if(this.document.body.scrollTop>20||this.document.documentElement.scrollTop>20){
//     mybtn.style.display="block";
//   }else{
//     mybtn.style.display="none";
//   }
// }
window.addEventListener('scroll',function(){
  const header = document.querySelector('header');
  header.classList.toggle("sticky", window.scrollY > 20);
  if(this.document.body.scrollTop>20||this.document.documentElement.scrollTop>20){
    mybtn.style.display="block";
  }else{
    mybtn.style.display="none";
  }
});

function gotoTop(){
document.body.scrollTop=0;
document.documentElement.scrollTop=0;
}

function togglemenu(){
  const menutoggle = document.querySelector('.menutoggle');
  const navigation = document.querySelector('.navigation');
  menutoggle.classList.toggle('active');
  navigation.classList.toggle('active');
};

