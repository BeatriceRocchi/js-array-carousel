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
