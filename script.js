const searchInput=document.getElementById('searchInput');
const genreFilter=document.getElementById('genreFilter');
const cards=[...document.querySelectorAll('.anime-card')];
const resultCount=document.getElementById('resultCount');
const emptyState=document.getElementById('emptyState');
function filterCatalogue(){const query=searchInput.value.trim().toLowerCase();const genre=genreFilter.value.toLowerCase();let count=0;cards.forEach(card=>{const text=(card.dataset.title+' '+card.dataset.genre+' '+card.innerText).toLowerCase();const genres=card.dataset.genre.toLowerCase();const matchText=text.includes(query);const matchGenre=genre==='all'||genres.includes(genre);const visible=matchText&&matchGenre;card.hidden=!visible;if(visible)count++;});resultCount.textContent=String(count).padStart(2,'0');emptyState.hidden=count!==0;}
searchInput.addEventListener('input',filterCatalogue);genreFilter.addEventListener('change',filterCatalogue);
const menuToggle=document.getElementById('menuToggle');const nav=document.getElementById('nav');menuToggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');}));
document.getElementById('year').textContent=new Date().getFullYear();
