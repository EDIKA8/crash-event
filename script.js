const T={
en:{n_srv:"Services",n_book:"Request",n_rev:"Reviews",n_con:"Contact",h1a:"Mercedes-Benz",h1b:"coding",h1c:"and diagnostics",hp:"AMG Menu, CarPlay, airbags and radars. Factory-level coding for every Mercedes model, most jobs done in 10–40 minutes.",call:"Call now",msg:"Message us on Facebook",t_srv:"Our services",s_srv:"Professional, fast service. If the feature you want is not listed, message us and we will find a solution.",st1:"Happy clients",st2:"Successful codings",st3:"Years of experience",st4:"Cities in Georgia",q_t:"Message us in one click",q_n:"Pick your model and service; the Facebook message is ready for you.",q_m:"Model",q_s:"Service",q_b:"Message us on Facebook",d_t:"Call a technician",d_n:"The request includes your location. Your browser will ask for permission.",d_name:"Name",d_phone:"Phone",d_car:"Mercedes model (C, E, S, GLC...)",d_b:"Call out with my location",t_rev:"Client reviews",s_rev:"What our customers say",t_faq:"Frequently asked questions",f1:"Is coding safe?",f1a:"Yes, we use factory-level, safe methods.",f2:"Does it affect the warranty?",f2a:"No, everything is done to the manufacturer's standards.",f3:"How long does it take?",f3a:"Most services take 10–40 minutes, depending on the service.",t_con:"Contact",s_con:"Choose your nearest branch",map:"Tbilisi branch on Google Maps",map_b:"Open map",rights:"All rights reserved"},
ru:{n_srv:"Услуги",n_book:"Заявка",n_rev:"Отзывы",n_con:"Контакты",h1a:"Mercedes-Benz",h1b:"программирование",h1c:"и диагностика",hp:"AMG Menu, CarPlay, подушки безопасности и радары. Заводское кодирование для всех моделей Mercedes, большинство работ за 10–40 минут.",call:"Позвонить",msg:"Написать в Facebook",t_srv:"Наши услуги",s_srv:"Быстро и профессионально. Если нужной функции нет в списке, напишите нам, мы найдём решение.",st1:"Довольных клиентов",st2:"Успешных программирований",st3:"Лет опыта",st4:"Города Грузии",q_t:"Напишите в один клик",q_n:"Выберите модель и услугу, сообщение для Facebook будет готово.",q_m:"Модель",q_s:"Услуга",q_b:"Написать в Facebook",d_t:"Вызов мастера",d_n:"К заявке добавляется ваша геолокация. Браузер запросит разрешение.",d_name:"Имя",d_phone:"Телефон",d_car:"Модель Mercedes (C, E, S, GLC...)",d_b:"Вызвать с геолокацией",t_rev:"Отзывы клиентов",s_rev:"Что говорят наши клиенты",t_faq:"Частые вопросы",f1:"Программирование безопасно?",f1a:"Да, мы используем заводские и безопасные методы.",f2:"Это влияет на гарантию?",f2a:"Нет, всё выполняется по стандартам производителя.",f3:"Сколько времени занимает?",f3a:"Большинство услуг выполняется за 10–40 минут, в зависимости от услуги.",t_con:"Контакты",s_con:"Выберите ближайший филиал",map:"Филиал в Тбилиси на Google Maps",map_b:"Открыть карту",rights:"Все права защищены"}};
const KA={};document.querySelectorAll("[data-i18n]").forEach(e=>KA[e.dataset.i18n]=e.innerHTML);
document.querySelectorAll("[data-ph]").forEach(e=>KA[e.dataset.ph]=e.placeholder);
function setLang(l){try{localStorage.setItem("siteLang",l)}catch(e){}
 document.documentElement.lang=l;const D=l==="ka"?KA:Object.assign({},KA,T[l]);
 document.querySelectorAll("[data-i18n]").forEach(e=>{const k=e.dataset.i18n;if(D[k])e.innerHTML=D[k]});
 document.querySelectorAll("[data-ph]").forEach(e=>{const k=e.dataset.ph;if(D[k])e.placeholder=D[k]});
 document.querySelectorAll(".lang button").forEach(b=>b.classList.toggle("on",b.dataset.l===l))}
document.querySelectorAll(".lang button").forEach(b=>b.onclick=()=>setLang(b.dataset.l));
let saved="ka";try{saved=localStorage.getItem("siteLang")||"ka"}catch(e){}
if(saved!=="ka"&&T[saved])setLang(saved);

/* counters */
const nums=document.querySelectorAll(".num");
const io=new IntersectionObserver((es,o)=>es.forEach(e=>{if(!e.isIntersecting)return;o.unobserve(e.target);
 if(matchMedia("(prefers-reduced-motion:reduce)").matches)return;
 const el=e.target,t=+el.dataset.n,s=el.textContent.endsWith("+")?"+":"";let c=0;
 (function f(){c+=t/60;if(c<t){el.textContent=Math.ceil(c)+s;requestAnimationFrame(f)}else el.textContent=t+s})()}),{threshold:.6});
nums.forEach(n=>io.observe(n));

/* Messenger */
const PAGE="100025626823315";
function sendAutoMessage(){
 const m=document.getElementById("carModel").value,k=document.getElementById("serviceType").value;
 const q={
  carplay:`გამარჯობა 👋\nმყავს Mercedes ${m}. მაინტერესებს CarPlay ჩაწერა.\n\n❓ შესაძლებელია ჩემს მოდელზე?\n❓ ქარხნული კოდირებაა თუ დამატებითი მოწყობილობა სჭირდება?\n❓ დაახლოებით რა დრო და ფასი აქვს?`,
  amg:`გამარჯობა 👋\nMercedes ${m}-ზე მინდა AMG Menu / AMG Design გააქტიურება.\n\n❓ სრული ქარხნული კოდირებაა?\n❓ ყველა რეჟიმი იმუშავებს სწორად?\n❓ რამდენ ხანში კეთდება?`,
  airbag:`გამარჯობა,\nმყავს Mercedes ${m} და ანთებულია SRS / აირბაგის შეცდომა.\n\n❓ შესაძლებელია სრული აღდგენა?\n❓ შეცდომები საბოლოოდ წაიშლება?\n❓ უსაფრთხო იქნება მანქანის გამოყენება?`,
  radar:`გამარჯობა 👋\nMercedes ${m}-ზე მაინტერესებს რადარის / დისტრონიკის პროგრამირება.\n\n❓ უსაფრთხოდ კეთდება?\n❓ სხვა სისტემებზე ხომ არ იმოქმედებს?\n❓ გამოცდილება გაქვთ ამ მოდელზე?`,
  diagnostic:`გამარჯობა,\nმყავს Mercedes ${m} და მინდა სრული კომპიუტერული დიაგნოსტიკა.\n\n❓ რამდენ ხანს გრძელდება პროცესი?\n❓ ყველა ბლოკი მოწმდება?\n❓ დღეს ან ხვალ შესაძლებელი იქნება?`}[k];
 window.open(`https://m.me/${PAGE}?text=${encodeURIComponent(q)}`,"_blank","noopener");
}
function sendCallService(){
 const v=id=>document.getElementById(id).value.trim();
 const name=v("callName"),phone=v("callPhone"),car=v("callCar"),problem=v("callProblem");
 if(!name||!phone||!car){alert("შეავსე ყველა ველი / Fill in all fields");return}
 if(!navigator.geolocation){alert("ლოკაცია არ არის მხარდაჭერილი ამ ბრაუზერში");return}
 navigator.geolocation.getCurrentPosition(p=>{
  const map=`https://maps.google.com/?q=${p.coords.latitude},${p.coords.longitude}`;
  const msg=`🚨 Crash Event გამოძახება\n👤 სახელი: ${name}\n📞 ტელ: ${phone}\n🚗 მანქანა: ${car}\n⚠️ პრობლემა: ${problem}\n\n📍 ლოკაცია:\n${map}`;
  window.open(`https://m.me/${PAGE}?text=${encodeURIComponent(msg)}`,"_blank","noopener");
 },()=>alert("ლოკაციის მიღება ვერ მოხერხდა. ჩართე GPS."));
}
