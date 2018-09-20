import axios from "axios";

export default {
  RandomDog: function() {
    return axios.get("https://dog.ceo/api/breeds/image/random");
  },
  DogBreed: function(breed) {
    return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
  },
  BreedList: function() {
    return axios.get("https://dog.ceo/api/breeds/list");
  }
};