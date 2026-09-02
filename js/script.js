const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
if(toggle){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',open);});}

// RAD personal branding - approved artwork
const brand=document.querySelector('.brand');
if(brand){
  brand.innerHTML='<img src="images/branding/rad-logo-final.webp" alt="RAD" class="rad-brand-logo">';
  brand.setAttribute('aria-label','Sina Rad - Home');
}
const brandStyle=document.createElement('style');
brandStyle.textContent='.brand{display:flex;align-items:center;flex:0 0 auto;height:76px}.rad-brand-logo{display:block;width:210px;height:auto;max-height:70px;object-fit:contain;filter:brightness(0) invert(1)}@media(max-width:1050px){.rad-brand-logo{width:175px}}@media(max-width:680px){.brand{height:70px}.rad-brand-logo{width:160px;max-height:62px}}';
document.head.appendChild(brandStyle);

let favicon=document.querySelector('link[rel="icon"]');
if(!favicon){favicon=document.createElement('link');favicon.rel='icon';document.head.appendChild(favicon);}
favicon.type='image/svg+xml';
favicon.href='images/branding/rad-favicon.svg';
