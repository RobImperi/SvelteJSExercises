**Event Propagation**

In questo progetto, andiamo a vedere come in componenti nested sia possibile propagare eventi verso componenti radice

- **caso 1)**:  propagazione di eventi nativi (es. click) attraverso i componenti. 
                
- **caso 2)**:  creazione e propagazione di eventi custom, con eventualmente custom data

Nel caso di propagazione di eventi nativi, attaverso i confini del componente in cui l'evento viene generato, è sufficiente che l'evento venga dichiarato sul componente che deve propagarel'evento in alto senza che venga associato un handler per l'evento stesso.
Nel momento in cui viene dichiarato l'evento e anche l'hanlder, l'evento viene catturato e gestito

I custom event sono eventi personalizzati, utili a distinguere le azioni o comunque molto utili per gestire la comunicazione tra componenti in modo più dettagliato. I principi di propagazione degli eventi custom sono sostanzialmente gli stessi degli eventi nativi. In particolare c'è la possibilità di passare delle informazioni insieme all'evento in modo tale che queste possano risalire ed essere gestite d'uopo.

