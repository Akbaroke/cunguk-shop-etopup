window.addEventListener("scroll", function(){
    let header = document.querySelector("nav");
    header.classList.toggle("stiki", window.scrollY > 0)
})


// Button Back to top
//Get the button:
mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


// read more
const readMoreBtn = document.querySelector(".read-more-btn");
const produk = document.querySelector(".produk-list");
const readMoreBtn1 = document.querySelector(".read-more-btn1");
const produk1 = document.querySelector(".produk-list1");
const readMoreBtn2 = document.querySelector(".read-more-btn2");
const produk2 = document.querySelector(".produk-list2");
const readMoreBtn3 = document.querySelector(".read-more-btn3");
const produk3 = document.querySelector(".produk-list3");
const readMoreBtn5 = document.querySelector(".read-more-btn5");
const produk5 = document.querySelector(".produk-list5");

readMoreBtn.addEventListener('click',(e)=>{
    produk.classList.toggle('show');
    if( readMoreBtn.innerText === '─ Tampilkan Semua ─' ){
        readMoreBtn.innerText = '─ Tampilkan Sebagian ─';
    }else{
        readMoreBtn.innerText = '─ Tampilkan Semua ─';
    }
})

readMoreBtn1.addEventListener('click',(e)=>{
    produk1.classList.toggle('show');
    if( readMoreBtn1.innerText === '─ Tampilkan Semua ─' ){
        readMoreBtn1.innerText = '─ Tampilkan Sebagian ─';
    }else{
        readMoreBtn1.innerText = '─ Tampilkan Semua ─';
    }
})

readMoreBtn2.addEventListener('click',(e)=>{
    produk2.classList.toggle('show');
    if( readMoreBtn2.innerText === '─ Tampilkan Semua ─' ){
        readMoreBtn2.innerText = '─ Tampilkan Sebagian ─';
    }else{
        readMoreBtn2.innerText = '─ Tampilkan Semua ─';
    }
})

readMoreBtn3.addEventListener('click',(e)=>{
    produk3.classList.toggle('show');
    if( readMoreBtn3.innerText === '─ Tampilkan Semua ─' ){
        readMoreBtn3.innerText = '─ Tampilkan Sebagian ─';
    }else{
        readMoreBtn3.innerText = '─ Tampilkan Semua ─';
    }
})

readMoreBtn5.addEventListener('click',(e)=>{
    produk5.classList.toggle('show');
    if( readMoreBtn5.innerText === '─ Tampilkan Semua ─' ){
        readMoreBtn5.innerText = '─ Tampilkan Sebagian ─';
    }else{
        readMoreBtn5.innerText = '─ Tampilkan Semua ─';
    }
})



// icon burger mobile
const aktif = document.querySelector('.icon-burger');
const navmobile = document.querySelector('.head');
const bodymobile = document.querySelector('body');

aktif.addEventListener('click',(e)=>{
    navmobile.classList.toggle('nav-mobile');
    bodymobile.classList.toggle(mybutton.style.display = "none");
})


function nonAktif() {
    alert("Maaf Untuk Saat Layanan BELUM TERSEDIA!")
}