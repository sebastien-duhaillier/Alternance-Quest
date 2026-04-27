const questionSets = [
  [
    {
      id: 1,
      category: "html",
      question: "Que signifie HTML ?",
      choices: [
        "HyperText Markup Language",
        "HighText Machine Language",
        "Home Tool Markup Language"
      ],
      correctAnswer: 0
    },
    {
      id: 2,
      category: "css",
      question: "À quoi sert CSS ?",
      choices: [
        "À structurer le contenu",
        "À styliser le contenu",
        "À stocker les données"
      ],
      correctAnswer: 1
    },
    {
      id: 3,
      category: "javascript",
      question: "Quelle instruction permet d'afficher un message dans la console ?",
      choices: [
        "print()",
        "console.log()",
        "display()"
      ],
      correctAnswer: 1
    },
    {
      id: 4,
      category: "javascript",
      question: "Comment déclare-t-on une variable en JavaScript ?",
      choices: [
        "var, let ou const",
        "variable",
        "int"
      ],
      correctAnswer: 0
    },
    {
      id: 5,
      category: "dom",
      question: "Le DOM permet principalement de quoi ?",
      choices: [
        "Modifier le HTML avec JavaScript",
        "Créer une base de données",
        "Compiler le CSS"
      ],
      correctAnswer: 0
    },
    {
      id: 6,
      category: "html",
      question: "Quelle balise est utilisée pour créer un lien ?",
      choices: [
        "<link>",
        "<a>",
        "<p>"
      ],
      correctAnswer: 1
    },
    {
      id: 7,
      category: "css",
      question: "Quelle propriété CSS permet de changer la couleur du texte ?",
      choices: [
        "background-color",
        "font-color",
        "color"
      ],
      correctAnswer: 2
    },
    {
      id: 8,
      category: "javascript",
      question: "Quel type de boucle permet de répéter du code tant qu'une condition est vraie ?",
      choices: [
        "while",
        "if",
        "switch"
      ],
      correctAnswer: 0
    },
    {
      id: 9,
      category: "pro",
      question: "Pendant un entretien, quelle attitude est la plus adaptée ?",
      choices: [
        "Couper la parole pour montrer sa motivation",
        "Répondre clairement et rester honnête",
        "Inventer des compétences pour impressionner"
      ],
      correctAnswer: 1
    },
    {
      id: 10,
      category: "pro",
      question: "Quel élément est le plus utile pour appuyer une candidature en développement web ?",
      choices: [
        "Un portfolio avec des projets",
        "Une photo retouchée",
        "Une adresse mail compliquée"
      ],
      correctAnswer: 0
    }
  ],

  [
    {
      id: 1,
      category: "html",
      question: "HTML est utilisé pour…",
      choices: [
        "Structurer le contenu d'une page",
        "Ajouter du style à une page",
        "Gérer une base de données"
      ],
      correctAnswer: 0
    },
    {
      id: 2,
      category: "css",
      question: "Quelle technologie sert à gérer la mise en forme d’une page web ?",
      choices: [
        "CSS",
        "HTML",
        "SQL"
      ],
      correctAnswer: 0
    },
    {
      id: 3,
      category: "javascript",
      question: "Comment afficher un message dans la console du navigateur ?",
      choices: [
        "console.log()",
        "alert.console()",
        "write.log()"
      ],
      correctAnswer: 0
    },
    {
      id: 4,
      category: "javascript",
      question: "Quel mot-clé permet de déclarer une constante en JavaScript ?",
      choices: [
        "let",
        "const",
        "var"
      ],
      correctAnswer: 1
    },
    {
      id: 5,
      category: "dom",
      question: "Le DOM permet notamment de…",
      choices: [
        "Modifier les éléments HTML avec JavaScript",
        "Créer du CSS automatiquement",
        "Remplacer le navigateur"
      ],
      correctAnswer: 0
    },
    {
      id: 6,
      category: "html",
      question: "Quelle balise HTML permet de créer un titre principal ?",
      choices: [
        "<title>",
        "<h1>",
        "<header>"
      ],
      correctAnswer: 1
    },
    {
      id: 7,
      category: "css",
      question: "Quelle propriété CSS permet d’ajouter de l’espace intérieur dans un bloc ?",
      choices: [
        "margin",
        "padding",
        "border"
      ],
      correctAnswer: 1
    },
    {
      id: 8,
      category: "javascript",
      question: "Quelle structure est la plus adaptée pour exécuter un bloc si une condition est vraie ?",
      choices: [
        "if",
        "for",
        "while"
      ],
      correctAnswer: 0
    },
    {
      id: 9,
      category: "pro",
      question: "Face à une question que tu ne maîtrises pas en entretien, la meilleure réaction est…",
      choices: [
        "Inventer une réponse technique",
        "Admettre la limite et expliquer comment progresser",
        "Changer de sujet"
      ],
      correctAnswer: 1
    },
    {
      id: 10,
      category: "pro",
      question: "Pour convaincre un recruteur sur un poste junior web, le plus crédible est…",
      choices: [
        "Montrer des projets concrets",
        "Dire qu’on apprend très vite sans preuve",
        "Insister sur ses loisirs"
      ],
      correctAnswer: 0
    }
  ],

  [
    {
      id: 1,
      category: "html",
      question: "À quoi sert principalement HTML dans une page web ?",
      choices: [
        "À structurer le contenu",
        "À animer les éléments",
        "À héberger le site"
      ],
      correctAnswer: 0
    },
    {
      id: 2,
      category: "css",
      question: "CSS permet surtout de…",
      choices: [
        "Programmer la logique métier",
        "Styliser les éléments de la page",
        "Créer des bases SQL"
      ],
      correctAnswer: 1
    },
    {
      id: 3,
      category: "javascript",
      question: "Quelle syntaxe permet d’écrire dans la console en JavaScript ?",
      choices: [
        "console.log()",
        "prompt()",
        "document.writeConsole()"
      ],
      correctAnswer: 0
    },
    {
      id: 4,
      category: "javascript",
      question: "Parmi ces propositions, laquelle déclare correctement une variable ?",
      choices: [
        "let nom = 'Alex';",
        "string nom = 'Alex';",
        "variable nom = 'Alex';"
      ],
      correctAnswer: 0
    },
    {
      id: 5,
      category: "dom",
      question: "Pourquoi utilise-t-on le DOM en JavaScript ?",
      choices: [
        "Pour interagir avec les éléments de la page",
        "Pour compresser le CSS",
        "Pour héberger les fichiers"
      ],
      correctAnswer: 0
    },
    {
      id: 6,
      category: "html",
      question: "Quelle balise HTML est correcte pour créer un paragraphe ?",
      choices: [
        "<text>",
        "<paragraph>",
        "<p>"
      ],
      correctAnswer: 2
    },
    {
      id: 7,
      category: "css",
      question: "Quelle propriété CSS permet de centrer du texte horizontalement ?",
      choices: [
        "align-text",
        "text-align",
        "justify-content"
      ],
      correctAnswer: 1
    },
    {
      id: 8,
      category: "javascript",
      question: "Quelle boucle est adaptée quand on connaît d’avance le nombre de répétitions ?",
      choices: [
        "for",
        "while",
        "switch"
      ],
      correctAnswer: 0
    },
    {
      id: 9,
      category: "pro",
      question: "En entretien, qu’est-ce qui donne la meilleure impression ?",
      choices: [
        "Réciter un discours appris sans écouter",
        "Être clair, poli et cohérent",
        "Parler le plus possible"
      ],
      correctAnswer: 1
    },
    {
      id: 10,
      category: "pro",
      question: "Pour un profil junior en dev web, qu’est-ce qui pèse vraiment dans la balance ?",
      choices: [
        "Des projets visibles et expliqués",
        "Un pseudo original",
        "Une candidature très longue"
      ],
      correctAnswer: 0
    }
  ]
];
const levelTwoQuestionSets = [
  [
    {
      id: 1,
      category: "api-rest",
      question: "Pour une API REST, quelle méthode HTTP sert généralement à récupérer des données ?",
      choices: ["GET", "POST", "DELETE"],
      correctAnswer: 0
    },
    {
      id: 2,
      category: "pro",
      question: "Face à la secrétaire du client, quelle attitude est la plus professionnelle ?",
      choices: [
        "Expliquer calmement le rendez-vous et avec qui tu viens",
        "Forcer le passage car tu es avec un développeur",
        "Dire que tu ne sais pas pourquoi tu es là"
      ],
      correctAnswer: 0
    },
    {
      id: 3,
      category: "mcd",
      question: "Dans un MCD, une entité représente généralement quoi ?",
      choices: [
        "Un objet important du métier, comme Client ou Commande",
        "Une couleur CSS",
        "Une route JavaScript"
      ],
      correctAnswer: 0
    },
    {
      id: 4,
      category: "analyse",
      question: "Après un rendez-vous client, que faut-il faire avant de coder ?",
      choices: [
        "Reformuler le besoin et vérifier qu’on a bien compris",
        "Coder directement au hasard",
        "Créer toutes les tables possibles"
      ],
      correctAnswer: 0
    },
    {
      id: 5,
      category: "api-rest",
      question: "Quelle route REST est la plus cohérente pour récupérer la liste des clients ?",
      choices: [
        "GET /clients",
        "POST /delete-client",
        "CSS /clients"
      ],
      correctAnswer: 0
    },
    {
      id: 6,
      category: "pro",
      question: "Pendant la présentation client, qu’est-ce qui est le plus crédible ?",
      choices: [
        "Présenter une solution simple, claire et liée au besoin",
        "Utiliser beaucoup de mots techniques pour impressionner",
        "Cacher les limites du projet"
      ],
      correctAnswer: 0
    }
  ]
];