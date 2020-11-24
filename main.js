var app = new Vue({
  el: "#root",
  data: {
    // Array completo
    dischi: [],
    // Array di generi nusicali
    generi: [],
    // Valore dell'elemento selezionato ocn la tendina
    selezionato: ""
  },
  mounted() {
    axios
      .get('https://flynn.boolean.careers/exercises/api/array/music')
      .then((response) => {
      // Assegno direttamente il risultato dell'api all'array dischi
        this.dischi = response.data.response;
      })
      .then((response) => {
        // Faccio un ciclo per ricavare i tipi di generi presenti nell'array dischi
        this.dischi.forEach((disco) => {
          // Faccio push dei generi solo se non sono già inclusi nel nuovo array generi
          if(!this.generi.includes(disco.genre)) {
            this.generi.push(disco.genre);
          }
        });
      });
  }
});
