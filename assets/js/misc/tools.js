var tools = {
  random: {

    randomInt: function(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min
    },

    randomNumber: function(min, max) {
      return Math.random()*(max-min)+min
    },

    // randomFromArray: function(array) {
    //   return array[tools.random.randomInt(-1, array.length)]
    // }
  }
}
