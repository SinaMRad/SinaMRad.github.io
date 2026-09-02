const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
if(toggle){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',open);});}

// RAD personal branding
const brand=document.querySelector('.brand');
if(brand){
  brand.innerHTML='<img src="images/branding/rad-logo.svg" alt="RAD" class="rad-brand-logo">';
  brand.setAttribute('aria-label','Sina Rad - Home');
}
const brandStyle=document.createElement('style');
brandStyle.textContent='.brand{display:flex;align-items:center;flex:0 0 auto}.rad-brand-logo{display:block;width:142px;height:auto;max-height:52px}@media(max-width:680px){.rad-brand-logo{width:122px;max-height:46px}}';
document.head.appendChild(brandStyle);

let favicon=document.querySelector('link[rel="icon"]');
if(!favicon){favicon=document.createElement('link');favicon.rel='icon';document.head.appendChild(favicon);}
favicon.type='image/svg+xml';
favicon.href='images/branding/rad-favicon.svg';
