const T={
en:{n_srv:"Services",n_book:"Request",n_rev:"Reviews",n_con:"Contact",h1a:"Mercedes-Benz",h1b:"coding",h1c:"and diagnostics",hp:"AMG Menu, CarPlay, airbags and radars. Factory-level coding for every Mercedes model, most jobs done in 10–40 minutes.",call:"Call now",msg:"Message us on Facebook",t_srv:"Our services",s_srv:"Professional, fast service. If the feature you want is not listed, message us and we will find a solution.",st1:"Happy clients",st2:"Successful codings",st3:"Years of experience",st4:"Cities in Georgia",q_t:"Message us in one click",q_n:"Pick your model and service; the Facebook message is ready for you.",q_m:"Model",q_s:"Service",q_b:"Message us on Facebook",d_t:"Call a technician",d_n:"The request includes your location. Your browser will ask for permission.",d_name:"Name",d_phone:"Phone",d_car:"Mercedes model (C, E, S, GLC...)",d_b:"Call out with my location",t_rev:"Client reviews",s_rev:"What our customers say",t_faq:"Frequently asked questions",f1:"Is coding safe?",f1a:"Yes, we use factory-level, safe methods.",f2:"Does it affect the warranty?",f2a:"No, everything is done to the manufacturer's standards.",f3:"How long does it take?",f3a:"Most services take 10–40 minutes, depending on the service.",t_con:"Contact",s_con:"Choose your nearest branch",map:"Tbilisi branch on Google Maps",map_b:"Open map",rights:"All rights reserved"},
ru:{n_srv:"Услуги",n_book:"Заявка",n_rev:"Отзывы",n_con:"Контакты",h1a:"Mercedes-Benz",h1b:"программирование",h1c:"и диагностика",hp:"AMG Menu, CarPlay, подушки безопасности и радары. Заводское кодирование для всех моделей Mercedes, большинство работ за 10–40 минут.",call:"Позвонить",msg:"Написать в Facebook",t_srv:"Наши услуги",s_srv:"Быстро и профессионально. Если нужной функции нет в списке, напишите нам, мы найдём решение.",st1:"Довольных клиентов",st2:"Успешных программирований",st3:"Лет опыта",st4:"Города Грузии",q_t:"Напишите в один клик",q_n:"Выберите модель и услугу, сообщение для Facebook будет готово.",q_m:"Модель",q_s:"Услуга",q_b:"Написать в Facebook",d_t:"Вызов мастера",d_n:"К заявке добавляется ваша геолокация. Браузер запросит разрешение.",d_name:"Имя",d_phone:"Телефон",d_car:"Модель Mercedes (C, E, S, GLC...)",d_b:"Вызвать с геолокацией",t_rev:"Отзывы клиентов",s_rev:"Что говорят наши клиенты",t_faq:"Частые вопросы",f1:"Программирование безопасно?",f1a:"Да, мы используем заводские и безопасные методы.",f2:"Это влияет на гарантию?",f2a:"Нет, всё выполняется по стандартам производителя.",f3:"Сколько времени занимает?",f3a:"Большинство услуг выполняется за 10–40 минут, в зависимости от услуги.",t_con:"Контакты",s_con:"Выберите ближайший филиал",map:"Филиал в Тбилиси на Google Maps",map_b:"Открыть карту",rights:"Все права защищены"}};
const KA={};document.querySelectorAll("[data-i18n]").forEach(e=>KA[e.dataset.i18n]=e.innerHTML);
document.querySelectorAll("[data-ph]").forEach(e=>KA[e.dataset.ph]=e.placeholder);
function setLang(l){try{localStorage.setItem("siteLang",l)}catch(e){}
 document.documentElement.lang=l;const D=l==="ka"?KA:Object.assign({},KA,T[l]);
 document.querySelectorAll("[data-i18n]").forEach(e=>{const k=e.dataset.i18n;if(D[k])e.innerHTML=D[k]});
 document.querySelectorAll("[data-ph]").forEach(e=>{const k=e.dataset.ph;if(D[k])e.placeholder=D[k]});
 document.querySelectorAll(".lang button").forEach(b=>b.classList.toggle("on",b.dataset.l===l));if(window.botSetLang)window.botSetLang(l)}
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

/* ===== AI ასისტენტი / AI assistant ===== */
(function(){
const IC={amg:"data:image/png;base64,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",airbag:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAeACwDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDwZRV3TbGW/ukghxuPJJ6KO5NVVFbPhq8jstQ3znEbqULf3e+f0rOrKUYNw3OrBU6VTEQhWdotq5pS+EwIT5NyWlA6MuFP+FY9pot5dpK0UQHlsVIZsEsOoFd1NeW0UJlknjCYzkMDn6etYNkdRltr67tJY4opXeRUdcn3IPavMo4ms4tyfbVn1uPyjARrQjSi9m2ou7slvq/+HOQZcZBqMjmrDDPvmoiK9c+IFWtbQbA396qEHyk+aQ+3p+NZCmtfTdWksbKeCKNd8pyJc8rxisq3PyNU9zrwPsFXjLE/CtfW3T5mxdjRo5i8CxiWGQboyDtcA8gdj/8AWo1a7+xafNYxnh2zEw/55Nz/ADyK5kMas3V69xbW0Uir+4BUP3I7A/SsPq1nG7bS7/1/Vz0f7X5oVOWKhJrTlVr30a+6zv8A3fMpvUR61IxqKuw8M//Z"};
const LG=["ka","en","ru"];
const li=()=>{const l=document.documentElement.lang;return Math.max(0,LG.indexOf(l))};
const UI={
 title:["Crash Event AI ასისტენტი","Crash Event AI assistant","AI-ассистент Crash Event"],
 status:["ონლაინ","online","онлайн"],
 ph:["დასვი კითხვა...","Ask a question...","Задайте вопрос..."],
 note:["ზუსტი ფასისთვის და დროისთვის ოპერატორი დაგეხმარება","For exact price and timing, our operator will help","Точную цену и время уточнит оператор"],
 open:["AI ასისტენტი","AI assistant","AI-ассистент"],
 close:["დახურვა","Close","Закрыть"],
 send:["გაგზავნა","Send","Отправить"],
 op:["მოგვწერე Facebook-ზე","Message us on Facebook","Написать в Facebook"],
 call:["დარეკვა","Call","Позвонить"],
 form:["შეავსე ფორმა","Open the form","Открыть форму"],
 hi:["გამარჯობა! მე ვარ Crash Event-ის AI ასისტენტი. დამისვი კითხვა Mercedes-ის კოდირებაზე, აირბაგებზე, CarPlay-ზე ან დიაგნოსტიკაზე, ან აირჩიე თემა ქვემოთ.","Hello! I am the Crash Event AI assistant. Ask about Mercedes coding, airbags, CarPlay or diagnostics, or pick a topic below.","Здравствуйте! Я AI-ассистент Crash Event. Спросите про кодирование Mercedes, подушки безопасности, CarPlay или диагностику, либо выберите тему ниже."],
 fb:["ზუსტი პასუხი ვერ ვიპოვე. ოპერატორი სიამოვნებით დაგეხმარება, დააჭირე ღილაკს და შენი კითხვა შეტყობინებაში ჩაიწერება.","I could not find an exact answer. Our operator will gladly help: tap the button and your question will be added to the message.","Точного ответа не нашёл. Оператор с радостью поможет: нажмите кнопку, и ваш вопрос попадёт в сообщение."],
 pre:["გამარჯობა, მაქვს კითხვა: ","Hello, I have a question: ","Здравствуйте, у меня вопрос: "],
 pre0:["გამარჯობა 👋","Hello 👋","Здравствуйте 👋"],
 city:[["თბილისი","ფოთი","ბათუმი"],["Tbilisi","Poti","Batumi"],["Тбилиси","Поти","Батуми"]]
};
/* k: keywords (any language, | separated) · q: chip label · a: answer · act: buttons · f: follow-up chips */
const KB=[
{id:"hi",k:"გამარჯობა|სალამი|გაუმარჯოს|მოგესალმ|hi|hello|hey|привет|здравствуйте|добрый день|добрый вечер",
 a:["გამარჯობა! რით შემიძლია დაგეხმარო? აირჩიე თემა ქვემოთ ან დამიწერე კითხვა.","Hello! How can I help? Pick a topic below or type your question.","Здравствуйте! Чем могу помочь? Выберите тему ниже или напишите вопрос."]},
{id:"thanks",k:"მადლობა|გმადლობ|thanks|thank you|спасибо|благодар",
 a:["არაფრის! თუ კიდევ რამე გაინტერესებს, მკითხე.","You are welcome! Ask me anything else you need.","Пожалуйста! Если будут ещё вопросы, спрашивайте."]},
{id:"carplay",ic:"",k:"carplay|car play|კარპლ|კარ პლ|ქარფლ|აიფონ|iphone|apple|android auto|карплей|карплэй|эпл|айфон",
 q:["CarPlay","CarPlay","CarPlay"],
 a:["CarPlay-ის ჩაწერას Mercedes-ზე ქარხნული კოდირებით ვაკეთებთ. შესაძლებლობა დამოკიდებულია მოდელსა და გამოშვების წელზე, ამიტომ მოგვწერე მოდელი და დაგიდასტურებთ, დამატებითი რამ ხომ არ დაგჭირდება. სერვისების უმეტესობა 10–40 წუთში სრულდება.",
  "We install CarPlay on Mercedes using factory-level coding. Whether it is possible depends on the model and year, so send us your model and we will confirm if anything extra is needed. Most services take 10–40 minutes.",
  "CarPlay на Mercedes устанавливаем заводским кодированием. Возможность зависит от модели и года выпуска, поэтому напишите модель, и мы подтвердим, нужно ли что-то дополнительно. Большинство услуг занимает 10–40 минут."],
 act:["msg"],f:["price","time","booking","amg"]},
{id:"amg",ic:"amg",k:"amg|ამგ|ემგე|menu|მენიუ|design|დიზაინ|ლოგო|logo|лого|меню|дизайн",
 q:["AMG Menu","AMG Menu","AMG Menu"],
 a:["AMG Menu-ს, AMG Design-სა და AMG ლოგოს ჩაწერა/გააქტიურებას ვაკეთებთ ქარხნული კოდირებით. მოდელის მიხედვით დაგიდასტურებთ, რა ფუნქციები იქნება ხელმისაწვდომი.",
  "We activate AMG Menu, AMG Design and the AMG logo with factory-level coding. We will confirm which features are available for your model.",
  "Активируем AMG Menu, AMG Design и логотип AMG заводским кодированием. Какие функции доступны для вашей модели, подтвердим дополнительно."],
 act:["msg"],f:["carplay","price","time","booking"]},
{id:"airbag",ic:"airbag",k:"აირბაგ|airbag|air bag|srs|ღვედ|ქრაში|crash|краш|подушк|ремн|ავარი|авари|accident",
 q:["აირბაგი / SRS","Airbag / SRS","Подушки / SRS"],
 a:["ვაკეთებთ აირბაგების და ღვედების (SRS) აღდგენას, SRS შეცდომების გასუფთავებას, ღვედების ხმის გათიშვას და ღვედების ფერის შეცვლას.\n\nთუ აირბაგი ფიზიკურად გახსნილია ან დაზიანებულია, ჯერ ელემენტების ჩანაცვლებაა საჭირო; ამას დიაგნოსტიკით დაგიდასტურებთ. თუ SRS ნათურა ანთია, გირჩევთ დიაგნოსტიკას.",
  "We restore airbags and seat belts (SRS), clear SRS faults, mute the seat belt chime and change seat belt colour.\n\nIf an airbag has deployed or is physically damaged, the parts must be replaced first; diagnostics will confirm this. If the SRS light is on, we recommend a diagnostic scan.",
  "Восстанавливаем подушки и ремни безопасности (SRS), сбрасываем ошибки SRS, отключаем звук ремней и меняем цвет ремней.\n\nЕсли подушка сработала или повреждена, сначала нужна замена элементов; это подтвердит диагностика. Если горит лампа SRS, рекомендуем диагностику."],
 act:["msg"],f:["diag","price","time","onsite"]},
{id:"radar",k:"რადარ|radar|distronic|დისტრონ|collision|კოლიზ|brake assist|ბრეიკ|радар|дистроник|столкнов",
 q:["რადარი / დისტრონიკი","Radar / Distronic","Радар / Distronic"],
 a:["რადარების პროგრამირებას ვაკეთებთ: Collision და Active Brake Assist-ის გაუქმება, დისტრონიკის პროგრამირება, Brake Assist: Collision Prevention. ასევე შესაძლებელია სიჩქარის ლიმიტის ჩასხმა. მოგვწერე მოდელი და დაგიდასტურებთ.",
  "We program radars: Collision and Active Brake Assist removal, Distronic programming, Brake Assist: Collision Prevention. A speed limit can also be set. Send us your model and we will confirm.",
  "Программируем радары: отключение Collision и Active Brake Assist, программирование Distronic, Brake Assist: Collision Prevention. Также можно установить ограничение скорости. Напишите модель, и мы подтвердим."],
 act:["msg"],f:["price","time","safe","booking"]},
{id:"lights",k:"ფარ|სტოპ|ნათურ|side marker|headlight|lamp|taillight|фар|стоп-сигнал|габарит",
 q:["ფარები / სტოპები","Lights","Фары / стопы"],
 a:["ფარების და სტოპების პროგრამირებას ვაკეთებთ, ასევე Side Marker Lamp-ის გაუქმებას.",
  "We program headlights and tail lights, and can also disable the Side Marker Lamp warning.",
  "Программируем фары и стоп-сигналы, а также отключаем Side Marker Lamp."],
 act:["msg"],f:["price","time","booking"]},
{id:"engine",k:"გამშვ|exhaust|flap|დროსელ|კატალიზ|catalyst|catalytic|eco|ეკო|start/stop|start stop|სტარტ|выхлоп|катализ|старт-стоп|заслонк",
 q:["Exhaust / Start-Stop","Exhaust / Start-Stop","Выхлоп / Start-Stop"],
 a:["გვაქვს: გამშვების დროსელის გაუქმება (Exhaust Flap), კატალიზატორის ჩეკის გაუქმება და Eco Start/Stop-ის გათიშვა. მოდელის მიხედვით დაგიდასტურებთ.",
  "We offer Exhaust Flap deactivation, catalytic converter check removal and Eco Start/Stop deactivation. We will confirm per model.",
  "Предлагаем отключение заслонки выхлопа (Exhaust Flap), отключение проверки катализатора и Eco Start/Stop. Подтвердим по модели."],
 act:["msg"],f:["price","time","booking"]},
{id:"comfort",k:"360|კამერ|camera|easy entry|იზი|psi|bar|ტემპერატურ|fahrenheit|პანორამ|კოლოფ|панорам|камер|коробк|температур|давлени",
 q:["კომფორტი","Comfort","Комфорт"],
 a:["კომფორტის ფუნქციები: 360 კამერების ადაპტაცია, Easy Entry-ს გააქტიურება + სავარძელი, ტემპერატურა F-დან C-ზე, საბურავის წნევა PSI-დან BAR-ზე, კოლოფის და პანორამის ადაპტაცია.",
  "Comfort features: 360 camera adaptation, Easy Entry activation with the seat, temperature from F to C, tyre pressure from PSI to BAR, gearbox and panorama roof adaptation.",
  "Функции комфорта: адаптация камер 360, активация Easy Entry + сиденье, температура из F в C, давление в шинах из PSI в BAR, адаптация коробки и панорамы."],
 act:["msg"],f:["price","time","booking"]},
{id:"diag",k:"დიაგნოსტ|diagnos|სკან|scan|შეცდომ|error|fault|check engine|ჩეკ|განულ|reset|диагност|ошибк|сканир|сброс",
 q:["დიაგნოსტიკა","Diagnostics","Диагностика"],
 a:["ვაკეთებთ სრულ კომპიუტერულ დიაგნოსტიკას Mercedes-ზე და შეცდომების განულებას. თუ ანთია შეცდომის ნათურა, მოგვწერე რა ნათურაა და რა მოდელი გაქვს.",
  "We run full computer diagnostics on Mercedes and clear fault codes. If a warning light is on, tell us which one and your model.",
  "Делаем полную компьютерную диагностику Mercedes и сбрасываем ошибки. Если горит индикатор, напишите какой и укажите модель."],
 act:["msg","form"],f:["airbag","time","onsite","price"]},
{id:"price",k:"ფას|ღირს|price|cost|how much|цен|стоит|сколько стоит|стоимост|თანხ|tarif|ტარიფ",
 q:["რა ღირს?","Price","Цена"],
 a:["ფასი დამოკიდებულია მოდელზე და სერვისზე, ამიტომ ზუსტ ფასს ოპერატორი დაგისახელებს. აირჩიე მოდელი და სერვისი ფორმაში, ან მოგვწერე Facebook-ზე.",
  "The price depends on the model and the service, so our operator will give you the exact figure. Choose the model and service in the form, or message us on Facebook.",
  "Цена зависит от модели и услуги, поэтому точную сумму назовёт оператор. Выберите модель и услугу в форме или напишите нам в Facebook."],
 act:["msg","form"],f:["time","booking","contacts"]},
{id:"time",k:"რამდენ ხან|რა დრო|დრო|როდის მზად|ხანგრძლივ|წუთ|how long|time|minute|сколько врем|долго|минут|как быстро",
 q:["რამდენ ხანს გრძელდება?","How long?","Сколько времени?"],
 a:["სერვისების უმეტესობა 10–40 წუთში სრულდება, კონკრეტული სერვისის მიხედვით.",
  "Most services take 10–40 minutes, depending on the service.",
  "Большинство услуг выполняется за 10–40 минут, в зависимости от услуги."],
 f:["price","booking","contacts"]},
{id:"safe",k:"უსაფრთხ|safe|безопас|რისკ|risk|საშიშ|рис|опасн",
 q:["უსაფრთხოა?","Is it safe?","Это безопасно?"],
 a:["დიახ, ვიყენებთ ქარხნულ და უსაფრთხო მეთოდებს. ყველაფერი კეთდება მწარმოებლის სტანდარტებით.",
  "Yes, we use factory-level, safe methods. Everything is done to the manufacturer's standards.",
  "Да, мы используем заводские и безопасные методы. Всё выполняется по стандартам производителя."],
 f:["warranty","time","price"]},
{id:"warranty",k:"გარანტი|warranty|guarantee|гаранти|დილერ|dealer|дилер|ოფიციალურ",
 q:["გარანტია","Warranty","Гарантия"],
 a:["არა, გარანტიას არ აზიანებს: ყველაფერი კეთდება მწარმოებლის სტანდარტებით.",
  "No, it does not affect the warranty: everything is done to the manufacturer's standards.",
  "Нет, на гарантию это не влияет: всё выполняется по стандартам производителя."],
 f:["safe","time","price"]},
{id:"contacts",k:"მისამართ|address|სად|where|ფილიალ|branch|ბათუმ|ფოთ|თბილის|batumi|poti|tbilisi|адрес|где|филиал|батум|поти|тбилис|ნომერ|ტელეფონ|phone|number|контакт|contact|კონტაქტ|დარეკ|позвон",
 q:["კონტაქტი","Contacts","Контакты"],
 a:["ფილიალები:\nთბილისი: +995 558 39 25 80\nფოთი: +995 571 10 91 90\nბათუმი: +995 555 20 25 16\n\nგვერდის ბოლოს ნახავ Facebook-ის გვერდებს და რუკას.",
  "Branches:\nTbilisi: +995 558 39 25 80\nPoti: +995 571 10 91 90\nBatumi: +995 555 20 25 16\n\nAt the bottom of the page you will find our Facebook pages and the map.",
  "Филиалы:\nТбилиси: +995 558 39 25 80\nПоти: +995 571 10 91 90\nБатуми: +995 555 20 25 16\n\nВнизу страницы есть страницы Facebook и карта."],
 act:["contacts"],f:["booking","onsite","price"]},
{id:"onsite",k:"გამოძახ|მექანიკოს|მოვიდ|ადგილზე|on-site|on site|come to|technician|mechanic|выезд|мастер|вызов|ლოკაცი|location|geolocation|не заводится",
 q:["გამოძახება","Call a technician","Вызов мастера"],
 a:["მექანიკოსის გამოძახებისთვის შეავსე ფორმა „მექანიკოსის გამოძახება“: სახელი, ტელეფონი, მანქანა და პრობლემა. შეტყობინებას თან ერთვის შენი ლოკაცია (ბრაუზერი ნებართვას მოგთხოვს) და იგზავნება Messenger-ში.",
  "To call a technician, fill in the “Call a technician” form: name, phone, car and problem. Your location is attached (the browser will ask for permission) and the request is sent via Messenger.",
  "Чтобы вызвать мастера, заполните форму «Вызов мастера»: имя, телефон, авто и проблема. К заявке добавляется геолокация (браузер запросит разрешение), заявка уходит в Messenger."],
 act:["form","call"],f:["contacts","price","diag"]},
{id:"booking",k:"დაჯავშნ|ჩასაწერ|შეკვეთ|ვიზიტ|მოვიდე|მოსვლა|book|appointment|reserve|order|visit|записат|запись|заказ",
 q:["როგორ დავჯავშნო?","How to book?","Как записаться?"],
 a:["ჩასაწერად მოგვწერე Facebook-ზე ან დაგვირეკე. ფორმაში მოდელისა და სერვისის არჩევის შემდეგ შეტყობინება ავტომატურად მზად იქნება.",
  "To book, message us on Facebook or call us. After you pick the model and service in the form, the message is prepared automatically.",
  "Чтобы записаться, напишите нам в Facebook или позвоните. После выбора модели и услуги в форме сообщение подготовится автоматически."],
 act:["msg","call","form"],f:["price","time","contacts"]},
{id:"hours",k:"გრაფიკ|საათ|მუშაობ|working hours|opening|open now|hours|график|время работы|часы работы|კვირა|weekend|выходн",
 q:["სამუშაო საათები","Working hours","Часы работы"],
 a:["სამუშაო საათები საიტზე მითითებული არ არის. დაგვირეკე ან მოგვწერე და დროს დაგიდასტურებთ.",
  "Working hours are not listed on the site. Call or message us and we will confirm a time.",
  "Часы работы на сайте не указаны. Позвоните или напишите, и мы подтвердим время."],
 act:["msg","call"],f:["contacts","booking"]},
{id:"models",k:"მოდელ|model|c-class|e-class|s-class|glc|gle|cla|gla|glb|w205|w213|w222|w177|модел|класс|ქლას",
 q:["რომელ მოდელებზე?","Which models?","Какие модели?"],
 a:["ვმუშაობთ Mercedes-Benz-ის მოდელებზე (C, E, S, GLC, GLE, CLA და სხვა). კონკრეტული მოდელისა და წლისთვის მოგვწერე და დაგიდასტურებთ.",
  "We work on Mercedes-Benz models (C, E, S, GLC, GLE, CLA and others). For a specific model and year, message us and we will confirm.",
  "Работаем с моделями Mercedes-Benz (C, E, S, GLC, GLE, CLA и другие). По конкретной модели и году напишите, и мы подтвердим."],
 act:["msg"],f:["carplay","airbag","price"]},
{id:"brands",k:"bmw|audi|volkswagen|toyota|lexus|porsche|skoda|opel|ბმვ|აუდი|სხვა მარკ|other brand|другие марки|другая марка",
 a:["ჩვენი სპეციალიზაცია Mercedes-Benz-ია. სხვა მარკის შესახებ ოპერატორს ჰკითხე.",
  "We specialise in Mercedes-Benz. For other brands, please ask our operator.",
  "Наша специализация: Mercedes-Benz. По другим маркам уточните у оператора."],
 act:["msg"],f:["models","contacts"]},
{id:"exp",k:"გამოცდილებ|როდიდან|experience|since when|опыт|клиент|отзыв|review|შეფასებ",
 a:["5+ წლის გამოცდილება, 1000+ წარმატებული პროგრამირება და 500+ კმაყოფილი კლიენტი. კლიენტების შეფასებები გვერდზე ქვემოთ ნახავ.",
  "5+ years of experience, 1000+ successful codings and 500+ happy clients. You can read client reviews further down the page.",
  "Более 5 лет опыта, 1000+ успешных программирований и 500+ довольных клиентов. Отзывы клиентов ниже на странице."],
 f:["safe","warranty","booking"]}
];
const INT=new Set(["price","time","safe","warranty","contacts","onsite","booking","hours","models","brands","exp"]);
const DEF=["carplay","amg","airbag","radar","diag","price","time","onsite","contacts"];
const $=id=>document.getElementById(id);
const fab=$("botFab"),panel=$("botPanel"),log=$("botLog"),chips=$("botChips"),inp=$("botInput"),form=$("botForm");
if(!fab||!panel)return;
let lastQ="",busy=false,greeted=false;
const reduce=matchMedia("(prefers-reduced-motion:reduce)").matches;
const norm=s=>s.toLowerCase().replace(/[^\p{L}\p{N}\s\/\-]/gu," ").replace(/\s+/g," ").trim();
function hit(t,kw){
 if(/^[a-z0-9 ]+$/.test(kw)&&kw.length<=4)return new RegExp("(^|[^a-z0-9])"+kw+"($|[^a-z0-9])").test(t);
 return t.includes(kw)}
function find(text){
 const t=norm(text);let best=null,bs=0;
 KB.forEach(e=>{let s=0;e.k.split("|").forEach(k=>{if(hit(t,k))s+=k.length});if(s&&INT.has(e.id))s+=5;if(s>bs){bs=s;best=e}});
 return bs>=3?best:null}
function put(role,text,actsEl){
 const m=document.createElement("div");m.className="m "+role;
 const p=document.createElement("span");p.textContent=text;m.appendChild(p);
 if(actsEl)m.appendChild(actsEl);
 log.appendChild(m);log.scrollTop=log.scrollHeight;return m}
function openOp(){
 const t=lastQ?UI.pre[li()]+lastQ:UI.pre0[li()];
 window.open("https://m.me/"+PAGE+"?text="+encodeURIComponent(t),"_blank","noopener")}
function acts(list){
 if(!list||!list.length)return null;
 const d=document.createElement("div");d.className="bot-act";const i=li();
 list.forEach(a=>{
  if(a==="msg"){const b=document.createElement("button");b.type="button";b.className="p";b.textContent=UI.op[i];b.onclick=openOp;d.appendChild(b)}
  if(a==="call"){const l=document.createElement("a");l.href="tel:+995558392580";l.textContent=UI.call[i];d.appendChild(l)}
  if(a==="form"){const l=document.createElement("a");l.href="#book";l.textContent=UI.form[i];l.onclick=()=>{if(matchMedia("(max-width:860px)").matches)toggle(false)};d.appendChild(l)}
  if(a==="contacts"){["+995558392580","+995571109190","+995555202516"].forEach((n,j)=>{const l=document.createElement("a");l.href="tel:"+n;l.textContent=UI.city[i][j];d.appendChild(l)})}
 });return d}
function renderChips(ids){
 const i=li();chips.textContent="";
 (ids||DEF).forEach(id=>{
  const e=KB.find(x=>x.id===id);if(!e||!e.q)return;
  const b=document.createElement("button");b.type="button";b.className="chip";
  if(e.ic&&IC[e.ic]){const im=document.createElement("img");im.src=IC[e.ic];im.alt="";b.appendChild(im)}
  b.appendChild(document.createTextNode(e.q[i]));
  b.onclick=()=>ask(e.q[i],id);chips.appendChild(b)});
 chips.scrollLeft=0}
function typing(){
 const m=document.createElement("div");m.className="m b typ";m.innerHTML="<i></i><i></i><i></i>";
 log.appendChild(m);log.scrollTop=log.scrollHeight;return m}
function ask(text,forced){
 text=text.trim();if(!text||busy)return;busy=true;lastQ=text;
 put("u",text);const tp=typing();
 const e=forced?KB.find(x=>x.id===forced):find(text);
 const i=li(),ans=e?e.a[i]:UI.fb[i];
 setTimeout(()=>{tp.remove();put("b",ans,acts(e?e.act:["msg"]));renderChips(e&&e.f?e.f:null);busy=false},reduce?0:Math.min(300+ans.length*4,1100))}
function toggle(on){
 on=typeof on==="boolean"?on:!panel.classList.contains("on");
 panel.classList.toggle("on",on);document.body.classList.toggle("bot-open",on);
 fab.setAttribute("aria-expanded",on);
 if(on&&!greeted){greeted=true;put("b",UI.hi[li()]);renderChips()}
 if(on&&matchMedia("(pointer:fine)").matches)setTimeout(()=>inp.focus(),120)}
function labels(){
 const i=li();
 $("botTitle").textContent=UI.title[i];$("botStatus").textContent=UI.status[i];
 $("botNote").textContent=UI.note[i];inp.placeholder=UI.ph[i];
 inp.setAttribute("aria-label",UI.ph[i]);
 $("botSend").setAttribute("aria-label",UI.send[i]);$("botX").setAttribute("aria-label",UI.close[i]);
 fab.setAttribute("aria-label",UI.open[i]);panel.setAttribute("aria-label",UI.title[i]);
 if(greeted)renderChips()}
fab.onclick=()=>toggle();
$("botX").onclick=()=>toggle(false);
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&panel.classList.contains("on"))toggle(false)});
form.onsubmit=e=>{e.preventDefault();const v=inp.value;inp.value="";ask(v)};
window.botSetLang=labels;labels();
})();
