//console.log('Ciao');
//document.write('ciao');
/*
let saluto = 'Ciao ';
let nome = 'Max';
let saluto_completo = saluto + ' ' + nome;

document.write(saluto_completo);
console.log(saluto_completo);

let eta = 40;
if (eta > 18){
    document.write(' Sei maggiorenne');
} else {
    document.write(' Sei minorenne');
}


/*
switch(nome_animale){
    case 'cane':
        document.write(' il tuo animale è un cane');
        console.log('il tuo animale è un cane');
        break;
    case 'gatto':
        document.write(' il tuo animale è un gatto');
        console.log('il tuo animale è un gatto');
        break;
    case 'topo':
        document.write(' il tuo animale è un topo');
        console.log('il tuo animale è un topo');
        break;
    default: 
        document.write(' Scelta errata');
        console.log('scelta errata'); 
}

let i=0;
let salutamelo = "ciao Max";
while(i<10){
    document.write(i + ' ' + salutamelo + '<br>');
    console.log(i);
    i++;
}

do{
    document.write(i + ' ' + salutamelo + '<br>');
    console.log(i);
    i++;
} while(i < 20);


for(i=20; i<40; i++){
    document.write(i + ' ' + salutamelo + '<br>');
    
}

let my_array = [0,1,2,3,4,5];

console.log('La lunghezza dell\'array è: ' + my_array.length);

my_array.push(7);

console.log('La lunghezza dell\'array è: ' + my_array.length);

let indice_array = 0;

for(indice_array=0; indice_array < my_array.length; indice_array++){
    my_array[indice_array] += 10;
    console.log(indice_array + ' ' + my_array[indice_array]);
    document.write(indice_array + ' ' + my_array[indice_array] + '<br>');
    document.write(indice_array * Math.random() + '<br>');
}

//document.write("ciao di nuovo");

my_saluto = document.getElementById('pippo');
my_saluto.innerHTML = "Ciao di nuovo";
my_saluto.style.color = "blue";

my_string = document.getElementById('pollo');
my_string.style.backgroundColor = "red";

my_age_div = document.getElementById('eta_div');


my_age_div_off = document.getElementById('eta_div_off');
console.log(my_age_div_off);
my_age_div_off.style.backgroundColor = "orange";


my_risp = document.getElementById('risposta');
//my_risp.style.style.fontStyle.textTransform('Capitalize');
mybtn.addEventListener("click", function(){
    console.log("Pulsante cliccato");
    if (my_age_div_off.innerHTML > 18){
        my_risp.innerHTML = "sei maggiorenne";
    } else {
        my_risp.innerHTML = "sei minorenne";
    }
    
});
*/


let nome = document.getElementById('nome');
let cognome = document.getElementById('cognome');
let eta = document.getElementById('eta');
let citta = document.getElementById('citta');
let lavoro = document.getElementById('lavoro');
let skills = document.getElementById('skills');
let exps = document.getElementById('experience');
let gender = document.querySelector('#myselect').value;

function caricaDati(){
    let privacy_msg = 'Devi accettare la privacy';
    let privacy = document.getElementById('checkbox');


    if (privacy.checked == true){
        console.log(gender);
        let my_risp = document.getElementById('risposta');
        console.log(my_risp);
        if (gender == 'Dottore'){
            my_risp.innerHTML = 'Genere: Dottore' + '<br> Nome: ' + nome.value + '<br>' + 'Cognome: ' + cognome.value + '<br> Eta:' + eta.value + '<br>Vivi a: ' + citta.value + '<br>Lavoro: ' + lavoro.value + '<br>';
        } else {
            my_risp.innerHTML = 'Genere: Dottoressa' + gender  + '<br> Nome: ' + nome.value + '<br>' + 'Cognome: ' + cognome.value + '<br> Eta:' + eta.value + '<br>Vivi a: ' + citta.value + '<br>Lavoro: ' + lavoro.value + '<br>';
        }    
    } else {
        alert("Accetta la privacy");
    }
    
    
}

/*
mybtn.addEventListener("click", function(){
    let testo_completo = 'Nome: ' + nome.value + '<br>' + 'Cognome: ' + cognome.value + '<br> Eta:' + eta.value + '<br>Vivi a: ' + citta.value + '<br>Lavoro: ' + lavoro.value + '<br>'

    document.write(testo_completo);
    console.log(nome.innerHTML);
    document.write('<p>');
    document.write("Benvenuto ")
    document.write(nome.value + ' ' + cognome.value + " hai " + eta.value + ' anni');
    document.write('</p>');
    document.write('<p>');
    document.write(" Vedo che vivi a " + citta.value + ' e svolgi la professione di ' + lavoro.value);
    document.write('</p>');
    document.write('<p>')
    document.write(' ti piace anche ' + skills.value);
    document.write('<p>');
    document.write('<p>')
    document.write(' in passato hai svolto il lavoro di ' + skills.value);
    document.write('<p>');
});
*/
/*()=> mi consente di esportare i dati elaborati dentro la funzione
dopo il nome della funzione ci vogliono sempre ();
*/
mybtn.addEventListener("click", ()=>caricaDati());