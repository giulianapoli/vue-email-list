const rootApp = new Vue ({
  el: "#root",

  data: {
    insiemeEmail: [],
  },

  mounted() {
    for (var i = 0; i < 10; i++) {
      axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((result) => { this.insiemeEmail.push(result.data.response)
      })
    }
  }
});
