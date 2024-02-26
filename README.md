# Carosello

Dato un array contenente una lista di cinque immagini, creazione di un carosello come nello screenshot fornito.

## Svolgimento

1. Creare un array con i percorsi delle immagini fornite
2. Attraverso un ciclo for, inserire dinamicamente nell'img-wrapper tutte le immagini con una classe hide (display=none)
3. Inserire in una collection tutti gli elementi creati e rimuovere alla prima immagine la classe hide
4. Inzializzare un contatore a 0
5. Al click sui bottoni:
   - aggiungere la classe hide all'elemento con indice attuale
   - incrementare/decrementare il contatore
   - togliere la classe hide all'elemento con indice pari al contatore incrementato/decrementato
6. Al click sul bottone up, verificare se il contatore === 0 e in quel caso:
   - aggiungere la classe hide all'elemento con indice attuale
   - assegnare al contatore il valore pari alla lunghezza di imageList - 1
   - togliere la classe hide all'elemento con indice pari al contatore appena modificato
7. Al click sul bottone down, verificare se il contatore === lunghezza di imageList - 1 e in quel caso:
   - aggiungere la classe hide all'elemento con indice attuale
   - assegnare al contatore un valore pari 0
   - togliere la classe hide all'elemento con indice pari al contatore appena modificato
8. Inserire dinamicamente nel thumbnails-wrapper tutte le thumbnails con una classe opacity
9. Inserire in una collection tutti gli elementi thumbnails creati, rimuovere alla prima thumbnail la classe opacity e aggiungere la classe border
10. Gestire al click le thumbnails analogamente a quanto fatto per le immagini
