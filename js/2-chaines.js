let nom = "dupont";
let prenom = "jean";
let age = 30;
let phrase1;
let phrase2;
let phrase3;
let phrase4;
let initiales;

phrase1 =
  "Je m'appelle" +
  " " +
  nom +
  " " +
  prenom +
  " " +
  "et j'ai" +
  " " +
  age +
  " " +
  "ans";
phrase2 = `Je m'appelle ${nom} ${prenom} et j'ai ${age} ans`;
phrase3 = `L'année prochaine j'aurai ${age + 1} ans`;
phrase4 = `Mon nom contient ${nom.length} lettres`;
initiales = `${prenom[0]}${nom[0]}`;

console.log(phrase1);
console.log(phrase2);
console.log(phrase3);
console.log(phrase4);
console.log(initiales);
