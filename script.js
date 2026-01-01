// EVEN MORE sparkles ✨✨✨
function createSparkles(count, cls=""){
  for(let i=0;i<count;i++){
    let s=document.createElement("div");
    s.className="sparkle "+cls;
    s.style.left=Math.random()*100+"vw";
    s.style.animationDuration=2+Math.random()*6+"s";
    s.style.animationDelay=Math.random()*4+"s";
    s.style.opacity=0.4+Math.random()*0.6;
    document.body.appendChild(s);
  }
}

createSparkles(140);        // normal layer
createSparkles(90,"tiny");  // tiny layer
createSparkles(40,"big");   // bright big sparkles


// Quotes rotation — every 4 seconds 💬
const quotes=[
  "Every new beginning comes from some other beginning’s end.",
  "The best time for new beginnings is now.",
  "Write it on your heart that every day is the best day in the year.",
  "Your future is created by what you do today, not tomorrow.",
  "New Year — New Feels, New Chances, Same Dreams, Fresh Starts.",
  "The calendar may change in a single night, but real change begins the moment you decide your life deserves more light."
];

const quoteBox=document.querySelector(".quote");

function showQuote(){
  const q=quotes[Math.floor(Math.random()*quotes.length)];
  quoteBox.style.opacity=0;
  setTimeout(()=>{
    quoteBox.textContent="“ "+q+" ”";
    quoteBox.style.opacity=1;
  },300);
}

showQuote();
setInterval(showQuote, 4000); // 4 seconds