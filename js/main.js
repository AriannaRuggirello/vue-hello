// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

var { createApp } = Vue

createApp({
    data(){
        return{
            //Bonus:
            // Aggiungere alla pagina un’immagine, presa anch’essa da un data.
            image:'img/mobile-logo.png',
            // Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
            message: 'Hello this is my first string in Vue !'
        }   
    }  
}).mount('#mex')