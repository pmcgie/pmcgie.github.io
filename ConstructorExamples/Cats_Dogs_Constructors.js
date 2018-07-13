
//With Constructors''''''''''''''''''''''''''''''''''''''''''''''
function animalConstructor(raining,noise) {
    this.raining = raining;
    this.noise = noise;
    this.makeNoise = function() {
        if (this.raining === true) {
            console.log(this.noise)
        }
    }
}

var dogs = new animalConstructor(true,"Woof")
var cats = new animalConstructor(false,"Meow")

dogs.fetch = function() {
    return console.log("I did it because I am a dog")
}

dogs.fetch()