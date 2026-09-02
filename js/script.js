const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
if(toggle){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',open);});}

// RAD personal branding - approved artwork
const brand=document.querySelector('.brand');
if(brand){
  brand.innerHTML='<span class="rad-brand-art"><img src="images/branding/rad-logo-final.webp" alt="RAD" class="rad-brand-logo"><span class="rad-layer-mask" aria-hidden="true"><span class="rad-layer rad-layer-1"></span><span class="rad-layer rad-layer-2"></span><span class="rad-layer rad-layer-3"></span></span></span>';
  brand.setAttribute('aria-label','Sina Rad - Home');
}
const brandStyle=document.createElement('style');
brandStyle.textContent='.brand{display:flex;align-items:center;flex:0 0 auto;height:76px}.rad-brand-art{position:relative;display:block;width:210px}.rad-brand-logo{display:block;width:210px;height:auto;max-height:70px;object-fit:contain;filter:brightness(0) invert(1)}.rad-layer-mask{position:absolute;right:0;top:5px;width:54px;height:60px;background:#123a5a;display:block}.rad-layer{position:absolute;left:6px;width:42px;height:14px;clip-path:polygon(50% 0,100% 50%,50% 100%,0 50%);display:block}.rad-layer-1{top:4px;background:#d9eefc}.rad-layer-2{top:20px;background:#67b7e8}.rad-layer-3{top:36px;background:#2d6f9f}@media(max-width:1050px){.rad-brand-art,.rad-brand-logo{width:175px}.rad-layer-mask{width:45px;height:52px;top:4px}.rad-layer{left:5px;width:35px;height:12px}.rad-layer-1{top:4px}.rad-layer-2{top:18px}.rad-layer-3{top:32px}}@media(max-width:680px){.brand{height:70px}.rad-brand-art,.rad-brand-logo{width:160px}.rad-brand-logo{max-height:62px}.rad-layer-mask{width:42px;height:48px;top:4px}.rad-layer{left:4px;width:34px;height:11px}.rad-layer-1{top:4px}.rad-layer-2{top:17px}.rad-layer-3{top:30px}}';
document.head.appendChild(brandStyle);

let favicon=document.querySelector('link[rel="icon"]');
if(!favicon){favicon=document.createElement('link');favicon.rel='icon';document.head.appendChild(favicon);}
favicon.type='image/svg+xml';
favicon.href='images/branding/rad-favicon.svg';
