const dialogue_text = document.getElementById("dialogText")
const btn_next = document.getElementById("bouton_suivant")
const cube = document.getElementById("carre_jeu")
const boite = document.getElementById("boite")
const score_holder = document.getElementById("score_holder")
const score = document.getElementById("score")

let the_score = 0;

anime({
    targets: '.guide',
    translateX: 280,
    translateY: 280,
    duration: 0,
});

anime({
    targets: '#boite',
    opacity: 0
})

anime({
    targets: '.boite_de_dialog',
    opacity: 100,
});

var typewriter = new Typewriter(dialogue_text, {
    delay: 30,
});

typewriter.typeString("Salut brave joueur, je suis ici pour te guider tout au long de ce mini-jeu que j'ai fonctionné moi-même !")
    .start();

window.onload = function() {
    btn_next.addEventListener('click', started);
};

function started() {
    boite.style.display = 'block';
    btn_next.innerHTML = "Suivant";
    btn_next.removeEventListener("click", started);
    btn_next.addEventListener('click', jeu_1_intro);
    anime({
        targets: '#chat',
        translateY: -230,
        translateX: 1000,
        duration: 1500
    });

    anime({
        targets: '#boite_de_dialog',
        translateY: -230,
        translateX: 60,
        easing: 'easeInOutQuad',
        duration: 500,
    })

    document.getElementById("boite_de_dialog").style.textAlign = "right";

    //document.getElementById("btn_action").style.display = "none"
    document.getElementById("titre_debut").style.display = "none"

    anime({
        targets: '#boite',
        opacity: 100
    })
    affiche_carre();

    dialogue_text.innerHTML = "";
    var typewriter = new Typewriter(dialogue_text, {
        delay: 30,
    });
    typewriter.typeString("Ta première épreuve sera de réussir à cliquer sur ce cube bleu que tu vois au centre de ton écran.")
        .start();
}

function update_score() {
    the_score++;
    score.innerHTML = the_score;
}

/* JEU 1 */

let vitesse = 1000

// Mets au milieu le cube
anime({
    targets: "#carre_jeu",
    translateY: {
        value: 250 - 25,
        duration: 0,
    },
    translateX: {
        value: 350 - 25,
        duration: 0,
    }
})

function jeu_1_intro() {
    btn_next.style.display = "none";
    btn_next.removeEventListener("click", jeu_1_intro);
    cube.addEventListener('click', step_2);
    loop_simple();
}

function step_2() {
    update_score();
    cube.removeEventListener("click", step_2);
    cube.addEventListener('click', step_infinite);
    dialogue_text.innerHTML = "";
    var typewriter = new Typewriter(dialogue_text, {
        delay: 30,
    });
    typewriter.typeString("Bien joué à toi, c'était plutôt facile non ? >//<\nUn peu plus dur maintenant")
        .start();
    loop_moyen();
}

function step_infinite() {
  update_score();
  step_loop();
}

function step_loop() {
    vitesse /= 1.1;
    anime({
        targets: '#carre_jeu',
        translateY: [{
                value: aleatoire().y,
                duration: vitesse,
                easing: 'cubicBezier(0.725, 0.325, 0.310, 0.715)'
            },
            {
                value: aleatoire().y,
                duration: vitesse,
                easing: 'cubicBezier(0.725, 0.325, 0.310, 0.715)'
            },
            {
                value: aleatoire().y,
                duration: vitesse,
                easing: 'cubicBezier(0.725, 0.325, 0.310, 0.715)'
            },
            {
                value: aleatoire().y,
                duration: vitesse,
                easing: 'cubicBezier(0.725, 0.325, 0.310, 0.715)'
            },
            {
                value: 250 - 25,
                duration: vitesse,
                easing: 'cubicBezier(0.725, 0.325, 0.310, 0.715)'
            }
        ],
        translateX: [{
                value: aleatoire().x,
                duration: vitesse,
                easing: 'cubicBezier(0.725, 0.325, 0.310, 0.715)'
            },
            {
                value: aleatoire().x,
                duration: vitesse,
                easing: 'cubicBezier(0.725, 0.325, 0.310, 0.715)'
            },
            {
                value: aleatoire().x,
                duration: vitesse,
                easing: 'cubicBezier(0.725, 0.325, 0.310, 0.715)'
            },
            {
                value: aleatoire().x,
                duration: vitesse,
                easing: 'cubicBezier(0.725, 0.325, 0.310, 0.715)'
            },
            {
                value: 350 - 25,
                duration: vitesse,
                easing: 'cubicBezier(0.725, 0.325, 0.310, 0.715)'
            }
        ],
        loop: true
    });
}




function affiche_carre() {
    anime({
        targets: "#carre_jeu",
        rotate: {
            value: 360,
            duration: 1000,
        },
        scale: {
            value: 1,
            duration: 1600,
        },
    })
}

function efface_carre() {
    anime({
        targets: "#carre_jeu",
        rotate: {
            value: 360,
            duration: 1000,
        },
        scale: {
            value: 0,
            duration: 1600,
        },
    })
}

function loop_simple() {
    anime({
        targets: '#carre_jeu',
        translateY: [{
                value: 100,
                duration: 1000,
                easing: 'cubicBezier(0.725, 0.325, 0.310, 0.715)'
            },
            {
                value: 225,
                duration: 1000,
                easing: 'cubicBezier(0.725, 0.325, 0.310, 0.715)'
            }
        ],
        translateX: [{
                value: 100,
                duration: 1000,
                easing: 'cubicBezier(0.725, 0.325, 0.310, 0.715)'
            },
            {
                value: 325,
                duration: 1000,
                easing: 'cubicBezier(0.725, 0.325, 0.310, 0.715)'
            }
        ],
        loop: true
    });
}

function loop_moyen() {
    anime({
        targets: '#carre_jeu',
        translateY: [{
                value: 300,
                duration: 1000,
                easing: 'cubicBezier(0.725, 0.325, 0.310, 0.715)'
            },
            {
                value: 0,
                duration: 1000,
                easing: 'cubicBezier(0.725, 0.325, 0.310, 0.715)'
            },
            {
                value: 450,
                duration: 1000,
                easing: 'cubicBezier(0.725, 0.325, 0.310, 0.715)'
            },
            {
                value: 200,
                duration: 1000,
                easing: 'cubicBezier(0.725, 0.325, 0.310, 0.715)'
            },
            {
                value: 250 - 25,
                duration: 500,
                easing: 'cubicBezier(0.725, 0.325, 0.310, 0.715)'
            }
        ],
        translateX: [{
                value: 100,
                duration: 1000,
                easing: 'cubicBezier(0.725, 0.325, 0.310, 0.715)'
            },
            {
                value: 300,
                duration: 1000,
                easing: 'cubicBezier(0.725, 0.325, 0.310, 0.715)'
            },
            {
                value: 600,
                duration: 1000,
                easing: 'cubicBezier(0.725, 0.325, 0.310, 0.715)'
            },
            {
                value: 0,
                duration: 1000,
                easing: 'cubicBezier(0.725, 0.325, 0.310, 0.715)'
            },
            {
                value: 350 - 25,
                duration: 700,
                easing: 'cubicBezier(0.725, 0.325, 0.310, 0.715)'
            }
        ],
        loop: true
    });
    dialogue_text.innerHTML = "";
    var typewriter = new Typewriter(dialogue_text, {
        delay: 30,
    });
    typewriter.typeString("Bien joué ;) ça va progressivement devenir de plus en plus rapide !")
        .start();
    setInterval(message_random, 15000);
}

function aleatoire() {
    return {
        x: Math.floor(Math.random() * (700 - 50)),
        y: Math.floor(Math.random() * (500 - 50))
    }
}

function message_random() {
  msgs = [
    "T'as l'air de t'améliorer non ? Ah non c'est mon imagination.",
    "Allez encore un petit effort, " + the_score + " points c'est pas grand chose.",
    "Toujours plus haut, toujours plus loin, toujours plus fort !",
    "Trop trop nul... ça me désespère.",
    "Bon bah je crois qu'il n'y a plus d'espoir pour toi...",
    "",
    "Pas ouf hein",
    
  ]

  dialogue_text.innerHTML = "";
    var typewriter = new Typewriter(dialogue_text, {
        delay: 30,
    });
    typewriter.typeString(msgs[Math.floor(Math.random() * msgs.length)])
        .start();
}

function game1() {}

efface_carre()