var app = new Vue({
  el: "#root",
  data: {
    //array completo
    dischi: [],
    // array di generi musicali
    generi: [],
    //elemento selezionato nella tendina
    selezionato: ""
  },
  mounted() {
    axios
      .get('https://flynn.boolean.careers/exercises/api/array/music')
      .then((response) => {
      //pacchetto api per array dischi
        this.dischi = response.data.response;
      })
      .then((response) => {
        // ciclo per ricavare i tipi di generi presenti nel array dischi
        this.dischi.forEach((disco) => {
          // push dei generi se non sono nel array generi
          if(!this.generi.includes(disco.genre)) {
            this.generi.push(disco.genre);
          }
        });
      });
  }
});
