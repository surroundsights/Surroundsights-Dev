const menu=document.querySelector('.menu-btn');
const nav=document.querySelector('.navlinks');
if(menu&&nav){menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')))}
const year=document.querySelectorAll('[data-year]');year.forEach(el=>el.textContent=new Date().getFullYear());
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');io.unobserve(e.target)}}),{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
const form=document.querySelector('#contact-form');
if(form){form.addEventListener('submit',e=>{e.preventDefault();const data=new FormData(form);const subject=encodeURIComponent('Projektanfrage – '+(data.get('service')||'SurroundSights Development'));const body=encodeURIComponent(`Name: ${data.get('name')}\nE-Mail: ${data.get('email')}\nUnternehmen: ${data.get('company')||'-'}\nLeistung: ${data.get('service')}\n\nProjekt:\n${data.get('message')}`);location.href=`mailto:surroundsights360@gmail.com?subject=${subject}&body=${body}`;});}
