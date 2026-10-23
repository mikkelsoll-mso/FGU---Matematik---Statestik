// Fælles funktioner for alle øvelser: navn og hak. Gemmes kun i elevens egen browser.
const FG=(()=>{
  const g=k=>{try{return localStorage.getItem(k)}catch(e){return null}};
  const s=(k,v)=>{try{localStorage.setItem(k,v)}catch(e){}};
  const ren=n=>(n||'').replace(/[<>&"'`]/g,'').trim().slice(0,20);
  const kl=()=>{try{return JSON.parse(g('fgu_klar')||'{}')}catch(e){return {}}};
  return{
    navn:()=>ren(g('fgu_navn')),
    setNavn:n=>s('fgu_navn',ren(n)),
    klar:id=>kl()[id]===1,
    markerKlar:id=>{const o=kl();o[id]=1;s('fgu_klar',JSON.stringify(o))},
    nulstil:()=>s('fgu_klar','{}')
  };
})();
