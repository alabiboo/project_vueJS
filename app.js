var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue !',
    link: 'miledoo.net',
    success: false,
    personnes: ['abibou', 'amina', 'jean', 'luc', 'nabilath', 'wakilath', 'assana', 'najwa'],

  },
  methods : {
  	change: function () {
  		this.success = true
  	}
  }
})