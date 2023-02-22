## writable stores

in questo esempio vedremo come mettere in comunicazione due componenti scarsamente accoppiati mediante uno store.
Uno store è un oggetto 'sottoscrivibile' (observable pattern(?)), implementa cioè la funzione subscribe.
Qualsiasi entità che si sottoscrive allo store viene triggerata mediante una callback quando
lo store viene aggiornato.


i metodi che vedremo sono 

writable.subscribe() --> per sottoscrivere un'entità allo store
writable.set(obj) --> per inizializzare lo store
writable.update(obj) --> per aggiornare lo store

Nell'esempio i due componenti Cart e Product potrebbero essere messi in comunicazione mediante il componente di root e la propagazione e gestione di eventi, ma l'utilizzo dello store rende la comunicazione molto più elegante ed efficace, soprattutto in contesti più complessi dove la numerosità dei componenti aumenta. 