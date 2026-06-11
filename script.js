// Hero Button Scroll
document.getElementById('enterBtn').addEventListener('click', () => {
    gsap.to(window, {duration: 2, scrollTo: "#beginning"});
});
// ===============================
 // KEEPER AI // =============================== 
 const keeperReply = document.getElementById("keeperReply"); 
 const userInput = document.getElementById("userInput");
 const keeperKnowledge = {

    who: [
        "I am the Keeper of Kali Pahadi.",
        "I guard the forgotten secrets of the mountain.",
        "The shadows call me the Keeper."
    ],

    kali: [
        "Kali Pahadi reveals itself only to the worthy.",
        "The mountain remembers every soul that enters.",
        "The darkness is older than time itself."
    ],

    path: [
        "Follow the shadows, not the light.",
        "The forgotten path begins where fear ends.",
        "Choose carefully. Every path changes fate."
    ],

    cave: [
        "The Cave of Shadows whispers ancient secrets.",
        "Not every shadow is empty.",
        "The cave watches those who enter."
    ],

    throne: [
        "The throne waits for its true ruler.",
        "Power sleeps beneath the stone.",
        "The throne remembers forgotten kings."
    ],

    kingdom: [
        "The Hidden Kingdom lies beyond ordinary sight.",
        "Few have reached the kingdom and returned.",
        "Ancient gates guard the forgotten realm."
    ],

    secret: [
        "A hidden chamber lies beneath the mountain.",
        "Every secret demands a sacrifice.",
        "The mountain hides more than stone."
    ],

    king: [
        "The king vanished centuries ago.",
        "Some believe the king still sleeps beneath the throne."
    ],

    darkness: [
        "Darkness is not evil. It is ancient.",
        "The darkness remembers everything."
    ],

    treasure: [
        "Many searched for treasure. Few returned.",
        "The greatest treasure is hidden knowledge."
    ],

    help: [
        "Ask me about Kali, the Cave, the Throne, Secrets, the Kingdom or the King."
    ]
};
function randomReply(topic){

    const replies =
    keeperKnowledge[topic];

    return replies[
        Math.floor(
            Math.random() *
            replies.length
        )
    ];
}
function getKeeperResponse(text){

    text = text.toLowerCase();

    if(
        text.includes("who are you") ||
        text.includes("who")
    ){
        return randomReply("who");
    }

    if(text.includes("kali")){
        return randomReply("kali");
    }

    if(text.includes("path")){
        return randomReply("path");
    }

    if(text.includes("cave")){
        return randomReply("cave");
    }

    if(text.includes("throne")){
        return randomReply("throne");
    }

    if(text.includes("kingdom")){
        return randomReply("kingdom");
    }

    if(text.includes("secret")){
        return randomReply("secret");
    }

    if(text.includes("king")){
        return randomReply("king");
    }

    if(text.includes("darkness")){
        return randomReply("darkness");
    }

    if(text.includes("treasure")){
        return randomReply("treasure");
    }

    if(text.includes("help")){
        return randomReply("help");
    }

    return "The Keeper does not understand. Type 'help' for guidance.";
}
                     const askBtn =
                     document.getElementById("askKeeper");
                     
                     function askKeeper(){
                     
                         const question =
                         userInput.value.trim();
                     
                         if(!question) return;
                     
                         const answer =
                         getKeeperResponse(question);
                     
                         keeperReply.textContent =
                         answer;
                     
                         if(
                             question.toLowerCase()
                             .includes("kingdom")
                         ){
                             document.body.classList.add(
                                 "secret-mode"
                             );
                         }
                     
                         userInput.value = "";
                     }
                     
                     // Mobile button click
                     askBtn.addEventListener(
                         "click",
                         askKeeper
                     );
                     
                     // Desktop enter key
                     userInput.addEventListener(
                         "keydown",
                         (e)=>{
                             if(e.key==="Enter"){
                                 askKeeper();
                             }
                         }
                     );      

// Fog Canvas Animation
//const canvas = document.getElementById('fog-canvas');
//canvas.width = window.innerWidth;
//canvas.height = window.innerHeight;
//const ctx = canvas.getContext('2d');

//let particlesArray = [];
//const numberOfParticles = 150;

//class Particle {
    //constructor(){
      //  this.x = Math.random() * canvas.width;
        //this.y = Math.random() * canvas.height;
        //this.radius = Math.random() * 2 + 1;
        //this.speedX = Math.random() * 0.5 - 0.25;
        //this.speedY = Math.random() * 0.5 - 0.25;
    //}
//    update(){
  //      this.x += this.speedX;
    //    this.y += this.speedY;
      //  if(this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        //if(this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    //}
 //   draw(){
   //     ctx.beginPath();
     //   ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
       // ctx.fillStyle = 'rgba(255,255,255,0.05)';
        //ctx.fill();
    //}
//}

//function initParticles(){
  //  particlesArray = [];
    //for(let i=0; i<numberOfParticles; i++){
      //  particlesArray.push(new Particle());
    //}
//}

//function animateParticles(){
  //  ctx.clearRect(0,0,canvas.width,canvas.height);
    //particlesArray.forEach(p => {
      //  p.update();
        //p.draw();
    //});
    //requestAnimationFrame(animateParticles);
//}

//initParticles();
//animateParticles();

// Resize Canvas
//window.addEventListener('resize', () => {
 //   canvas.width = window.innerWidth;
   // canvas.height = window.innerHeight;
    //initParticles();
//});
// ===============================
                    // Fog Canvas Animation 
                    const canvas = document.getElementById('fog-canvas');
                     canvas.width = window.innerWidth; 
                     canvas.height = window.innerHeight; 
                     const ctx = canvas.getContext('2d');
                      let particlesArray = []; 
                      const numberOfParticles = 150; 
                      class Particle { constructor(){
                         this.x = Math.random() * canvas.width; 
                         this.y = Math.random() * canvas.height;
                          this.radius = Math.random() * 2 + 1;
                           this.speedX = Math.random() * 0.5 - 0.25;
                            this.speedY = Math.random() * 0.5 - 0.25; } 
                            update(){ this.x += this.speedX; 
                                this.y += this.speedY; 
                                if(this.x < 0 || this.x > canvas.width) 
                                this.speedX *= -1; if(this.y < 0 || this.y > canvas.height) 
                                this.speedY *= -1; } draw(){
                                     ctx.beginPath(); 
                                     ctx.arc(this.x, 
                                        this.y, 
                                        this.radius,
                                         0, 
                                         Math.PI*2); 
                                         ctx.fillStyle = 'rgba(255,255,255,0.05)';
                                          ctx.fill();
                                         } }
                                          function initParticles(){
                                             particlesArray = [];
                                              for(let i=0; i<numberOfParticles; i++){
                                                 particlesArray.push(new Particle());
                                                 } } function animateParticles(){
                                                     ctx.clearRect(0,
                                                        0,
                                                        canvas.width,
                                                        canvas.height);
                                                         particlesArray.forEach(p => { p.update(); 
                                                            p.draw(); });
                                                             requestAnimationFrame(animateParticles); 
                                                            } initParticles(); 
                                                            animateParticles(); 
                                                            // Resize Canvas 
                                                            window.addEventListener('resize', () => {
                                                                 canvas.width = window.innerWidth;
                                                                  canvas.height = window.innerHeight; 
                                                                  initParticles(); });    
// ===============================
// PATH CHOICE SYSTEM
// ===============================

document.querySelectorAll(".choice")
.forEach(button => {

    button.addEventListener("click", () => {

        const selectedPath =
        button.dataset.path;

        localStorage.setItem(
            "chosenPath",
            selectedPath
        );

        if(selectedPath === "forest"){

            keeperReply.textContent =
            "The forest spirits have marked your presence.";

        }

        if(selectedPath === "cave"){

            keeperReply.textContent =
            "The Cave of Shadows welcomes you.";

        }

    });

});

// ===============================
// DYNAMIC STORY CHANGES
// ===============================

const chosenPath =
localStorage.getItem(
    "chosenPath"
);

if(chosenPath){

    const caveText =
    document.querySelector("#cave p");

    const throneText =
    document.querySelector("#throne p");

    if(chosenPath === "forest"){

        caveText.textContent =
        "The forest whispers follow you into the darkness.";

        throneText.textContent =
        "The spirits of the forest stand before the throne.";

    }

    if(chosenPath === "cave"){

        caveText.textContent =
        "You have chosen the ancient darkness.";

        throneText.textContent =
        "The shadows kneel before the forgotten throne.";

    }

}
// ===============================
// RELIC COLLECTION SYSTEM
// ===============================

const relics =
document.querySelectorAll(".relic");

let collectedRelics = 0;
let shrineReady = false;
const relicCount =
document.getElementById(
    "relicCount"
);
const secretEnding =
document.getElementById(
    "secretEnding"
);

relics.forEach((relic) => {

    relic.addEventListener(
        "click",
        () => {

            if(
                relic.classList.contains(
                    "collected"
                )
            ){
                return;
            }

            relic.classList.add(
                "collected"
            );

            collectedRelics++;
            document
.getElementById(
"xpFill"
)
.style.width =
(collectedRelics/3)*100 + "%";
            relicCount.textContent =
            collectedRelics;
            if(collectedRelics === 1){

                unlockAchievement(
                "First Relic Found"
                );
                
    }
         
              // Small feedback

            keeperReply.textContent =
            `Relic Collected (${collectedRelics}/3)`;

            // All relics collected

            if(
                collectedRelics === 3
            ){document
                .getElementById(
                "portalNode"
                )
                .classList.remove(
                "locked"
                );
                setTimeout(()=>{
            
                    keeperReply.textContent =
                    "The Ancient Shrine Awaits...";
            
                    document
                    .getElementById(
                        "shrineSection"
                    )
                    .style.display =
                    "flex";
            
                    document
                    .getElementById(
                        "shrineSection"
                    )
                    .scrollIntoView({
                        behavior:"smooth"
                    });
            
                },1000);
            
            } 

        }
    );

});

// ========================
// PORTAL SYSTEM
// ========================

const portal =
document.getElementById(
    "portal"
);

if(portal){

    portal.addEventListener(
        "click",
        () => {
            if(
                !shrineReady
                ){
                
                keeperReply.textContent =
                "The Shrine Must Be Activated First.";
                
                return;
                
                }
            document
            .getElementById(
                "portalSection"
            )
            .style.display =
            "none";

            secretEnding
            .style.display =
            "flex";

            secretEnding
            .scrollIntoView({
                behavior:"smooth"
            });

        }
    );

}
// ========================
// SCROLL REVEAL
// ========================

const stories =
document.querySelectorAll(
    ".story"
);

const observer =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add(
"show"
);

}

});

},
{
threshold:0.2
}
);

stories.forEach(section=>{

observer.observe(
section
);

});
// =========================
// THRONE PARTICLES
// =========================

const throne =
document.getElementById(
    "throne"
);

for(let i=0;i<25;i++){

    const particle =
    document.createElement(
        "div"
    );

    particle.classList.add(
        "throne-particle"
    );

    particle.style.left =
    Math.random()*100+"%";

    particle.style.animationDelay =
    Math.random()*5+"s";

    throne.appendChild(
        particle
    );

}
let throneVisited = false;

const throneObserver =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(
entry.isIntersecting &&
!throneVisited
){

throneVisited = true;

keeperReply.textContent =
"You have entered the Throne of Darkness.";

}

});

},
{
threshold:.5
}
);

throneObserver.observe(
document.getElementById(
"throne"
)
);
// =========================
// THRONE SECRET ACTIVATION
// =========================

const throneCore =
document.querySelector(
    ".throne-core"
);

const throneSecret =
document.getElementById(
    "throneSecret"
);

let throneUnlocked = false;

if(throneCore){

    throneCore.addEventListener(
        "click",
        () => {

            if(throneUnlocked){
                return;
            }

            throneUnlocked = true;

            throneSecret.classList.add(
                "active"
            );

            keeperReply.textContent =
            "The Throne has revealed its ancient secret.";

            throneCore.style.transform =
            "scale(1.2)";

            throneCore.style.filter =
            "drop-shadow(0 0 40px #8a2be2)";

        }
    );

}
// =========================
// FLYING RAVENS
// =========================

function createRaven(){

    const raven =
    document.createElement(
        "div"
    );

    raven.classList.add(
        "raven"
    );

    raven.innerHTML = "✦";

    raven.style.top =
    Math.random()*70 + "%";

    raven.style.animationDuration =
    (8 + Math.random()*8) + "s";

    document.body.appendChild(
        raven
    );

    setTimeout(()=>{

        raven.remove();

    },16000);

}

setInterval(()=>{

    createRaven();

},5000);
// =========================
// SHRINE ACTIVATION
// =========================

const activateShrine =
document.getElementById(
    "activateShrine"
);

if(activateShrine){

activateShrine.addEventListener(
"click",
()=>{

    if(collectedRelics < 3){

        keeperReply.textContent =
        "Collect all relics first.";
        
        return;
        
        }
document.getElementById(
"slot1"
).textContent = "🔮";

document.getElementById(
"slot2"
).textContent = "💎";

document.getElementById(
"slot3"
).textContent = "👑";

keeperReply.textContent =
"The Shrine Has Awakened.";

shrineReady = true;

setTimeout(()=>{

document
.getElementById(
"portalSection"
)
.style.display =
"flex";

document
.getElementById(
"portalSection"
)
.scrollIntoView({
behavior:"smooth"
});

},2000);

});
}
// =========================
// BOOK OF SHADOWS
// =========================

// =========================
// MAGIC BOOK SYSTEM
// =========================
// =========================
// MAGIC BOOK SYSTEM
// =========================

const loreBook = document.getElementById("loreBook");
const lorePanel = document.getElementById("lorePanel");
let bookOpened = false;

if (loreBook && lorePanel) {

    loreBook.addEventListener("click", () => {

        // Magic Pulse Animation
        loreBook.animate(
            [
                { transform: "scale(1)" },
                { transform: "scale(1.3)" },
                { transform: "scale(1)" }
            ],
            {
                duration: 700,
                iterations: 1,
                easing: "ease-in-out"
            }
        );

        // Toggle Book Panel
        if (!bookOpened) {
            lorePanel.classList.add("open");
            keeperReply.textContent = "Ancient knowledge awakens...";
            bookOpened = true;
        } else {
            lorePanel.classList.remove("open");
            bookOpened = false;
        }

    });

}
// =========================
// SPECTRAL KING GHOST
// =========================
// =========================
// SPECTRAL KING GHOST
// =========================

const spectralKing =
document.getElementById(
    "spectralKing"
);

const kingDialogue =
document.getElementById(
    "kingDialogue"
);

const respondKing =
document.getElementById(
    "respondKing"
);

let kingAppeared = false;

const kingObserver =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(
entry.isIntersecting &&
!kingAppeared
){

kingAppeared = true;

if(spectralKing){

spectralKing.style.opacity =
"1";

}

setTimeout(()=>{

if(kingDialogue){

kingDialogue.style.display =
"block";

}

},2000);

}

});

},

{
threshold:0.5
}

);

const throneSection =
document.getElementById(
    "throne"
);

if(throneSection){

    kingObserver.observe(
        throneSection
    );

}

if(respondKing){

respondKing.addEventListener(

"click",

()=>{

if(typeof keeperReply !==
"undefined"){

keeperReply.textContent =

"The King whispers: 'You have proven your courage...'";

}

kingDialogue.innerHTML =

`
<p>
The throne remembers
your arrival.
</p>
`;

}

);

}
// =========================
// TEAM SECTION DYNAMIC ADD
// =========================

const membersContainer = document.getElementById("membersContainer");
const addMemberBtn = document.getElementById("addMemberBtn");

// Predefined members
let teamMembers = [

    {
    name:"reveal soon",
    role:"Scout",
    img:"assets/images/mem1.jpg",
    desc:"Master of hidden forest routes."
    },
    
    {
    name:"reveal soon",
    role:"Researcher",
    img:"assets/images/mem2.jpg",
    desc:"Keeper of ancient records."
    },
    
    {
    name:"reveal soon",
    role:"Strategist",
    img:"assets/images/mem3.jpg",
    desc:"Plans every expedition."
    },
    
    {
    name:"reveal soon",
    role:"Explorer",
    img:"assets/images/mem4.jpg",
    desc:"First to enter unknown paths."
    },
    
    {
    name:"reveal soon",
    role:"Guardian",
    img:"assets/images/mem5.jpg",
    desc:"Protector of relics."
    },
    
    {
    name:"reveal soon",
    role:"Archivist",
    img:"assets/images/mem6.jpg",
    desc:"Collects forgotten lore."
    },
    
    {
    name:"reveal soon",
    role:"Tracker",
    img:"assets/images/mem7.jpg",
    desc:"Follows every hidden clue."
    }
    
    ];

// Function to render members
function renderMembers(){
    membersContainer.innerHTML = "";
    teamMembers.forEach(member => {
        const card = document.createElement("div");
        card.addEventListener(
            "click",
            ()=>{
            
            document.getElementById(
            "memberPopup"
            ).style.display =
            "flex";
            
            document.getElementById(
            "popupImage"
            ).src =
            member.img;
            
            document.getElementById(
            "popupName"
            ).textContent =
            member.name;
            
            document.getElementById(
            "popupRole"
            ).textContent =
            member.role;
            
            document.getElementById(
            "popupDescription"
            ).textContent =
            member.desc;
            
            });
        card.classList.add("memberCard");
        card.innerHTML = `
            <img src="${member.img}" alt="${member.name}">
            <h4>${member.name}</h4>
            <p>${member.role}</p>
        `;
        membersContainer.appendChild(card);
    });
}

// Initial render
renderMembers();

// Add new member dynamically
addMemberBtn.addEventListener("click", ()=>{

    const name = prompt("Member Name");

    const role = prompt("Member Role");

    const img = prompt("Image Path");

    const desc = prompt("Description");

    if(!name || !role) return;

    teamMembers.push({

        name:name,
        role:role,
        img:img || "assets/images/default.jpg",
        desc:desc || ""

    });

    renderMembers();

});
// =========================
// MEMBER POPUP
// =========================

const closePopup =
document.getElementById(
"closePopup"
);

if(closePopup){

closePopup.addEventListener(
"click",
()=>{

document.getElementById(
"memberPopup"
).style.display =
"none";

});}
function unlockAchievement(text){

    const popup =
    document.getElementById(
        "achievementPopup"
    );

    popup.textContent =
    "🏆 " + text;

    popup.classList.add(
        "show"
    );

    setTimeout(()=>{
        popup.classList.remove(
            "show"
        );
    },3000);
}

    const runeBtn =
    document.getElementById(
    "runeBtn"
    );
    
    runeBtn.addEventListener(
    "click",
    ()=>{
    
    const code =
    document.getElementById(
    "runeInput"
    ).value.toLowerCase();
    
    const result =
    document.getElementById(
    "runeResult"
    );
    
    if(code==="kali"){
    
    result.textContent =
    "✨ Secret Rune Accepted";
    document
.querySelector(".rune-circle")
.animate(
[
{transform:"scale(1) rotate(0deg)"},
{transform:"scale(1.4) rotate(180deg)"},
{transform:"scale(1) rotate(360deg)"}
],
{
duration:1500
}
);
    document
.getElementById(
"portalSection"
)
.style.display =
"flex";
    unlockAchievement(
    "Rune Master"
    );
    
    }else{
    
    result.textContent =
    "❌ Wrong Rune";
    document
.querySelector(".rune-circle")
.animate(
[
{transform:"translateX(0)"},
{transform:"translateX(-15px)"},
{transform:"translateX(15px)"},
{transform:"translateX(-15px)"},
{transform:"translateX(0)"}
],
{
duration:500
}
);
    }
});
const music =
document.getElementById(
"bgMusic"
);

const musicBtn =
document.getElementById(
"musicBtn"
);

let playing = false;

musicBtn.addEventListener(
"click",
()=>{

if(!playing){

music.play();

musicBtn.textContent =
"🔇 Mute";

playing = true;

}else{

music.pause();

musicBtn.textContent =
"🔊 Sound";

playing = false;

}

});
// =====================
// WORLD MAP SYSTEM
// =====================

const mapLocations =
document.querySelectorAll(
".map-location"
);

mapLocations.forEach(node=>{

node.addEventListener(
"click",
()=>{

const target =
node.dataset.target;

const section =
document.getElementById(
target
);

if(section){

section.scrollIntoView({

behavior:"smooth"

});

}

});
});

document
.querySelector(".developerCard")
.addEventListener(
"click",
()=>{

document.getElementById(
"memberPopup"
).style.display =
"flex";

document.getElementById(
"popupImage"
).src =
"assets/images/dev.jpg";

document.getElementById(
"popupName"
).textContent =
"Developer";

document.getElementById(
"popupRole"
).textContent =
"Lead Developer";

document.getElementById(
"popupDescription"
).textContent =
"Creator of Kali Pahadi.";

}
);

setInterval(()=>{

    const particle =
    document.createElement("div");
    
    particle.classList.add(
    "rune-particle"
    );
    
    particle.style.left =
    Math.random()*100 + "%";
    
    particle.style.bottom =
    "0px";
    
    particle.style.animationDuration =
    (3 + Math.random()*4)+"s";
    
    document
    .getElementById(
    "runeSection"
    )
    .appendChild(
    particle
    );
    
    setTimeout(()=>{
    
    particle.remove();
    
    },7000);
    
    },300);

// ======================
// NAVBAR SYSTEM
// ======================

const homeBtn =
document.getElementById(
"homeBtn"
);

const dropdown =
document.getElementById(
"dropdownMenu"
);

homeBtn.addEventListener(
"click",
()=>{

dropdown.style.display =

dropdown.style.display === "flex"
?
"none"
:
"flex";

}
);

// Hide links while scrolling

window.addEventListener(
    "scroll",
    ()=>{
    
    const navLinks =
    document.getElementById(
    "navLinks"
    );
    
    const navbar =
    document.getElementById(
    "kpNavbar"
    );
    
    if(window.scrollY > 100){
    
    navLinks.style.opacity =
    "0";
    
    navLinks.style.pointerEvents =
    "none";
    
    navbar.classList.add(
    "shrink"
    );
    
    }
    else{
    
    navLinks.style.opacity =
    "1";
    
    navLinks.style.pointerEvents =
    "auto";
    
    navbar.classList.remove(
    "shrink"
    );
    
    }
    
    }
    );

// ======================
// MOBILE NAVBAR
// ======================

const menuToggle =
document.getElementById(
"menuToggle"
);

const navLinks =
document.getElementById(
"navLinks"
);

menuToggle.addEventListener(
"click",
()=>{

navLinks.style.display =

navLinks.style.display === "flex"
?
"none"
:
"flex";

}
);
document
.querySelectorAll(
"#navLinks a"
)
.forEach(link=>{

link.addEventListener(
"click",
()=>{

if(
window.innerWidth < 768
){

navLinks.style.display =
"none";

}

}
);

});

// Universal Smooth Scroll

document.documentElement.style.scrollBehavior = "smooth";




















