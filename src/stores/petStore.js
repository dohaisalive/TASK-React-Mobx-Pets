import { makeAutoObservable } from "mobx";
import petsData from "../petsData.js";

class PetStore {
  constructor() {
    makeAutoObservable(this);
  }
  allPets = petsData;

  handleAdopt = (petId) =>
    (this.allPets = this.allPets.filter((pet) => pet.id !== petId));

  addPet = (newPet) => {
    let newPetID = this.allPets.length + 1;
    newPet.id = newPetID;
    this.allPets.push(newPet);
    console.log(newPet);
  };

  handleUpdate = (updatedPet) => {
    this.allPets = this.allPets.map((element) =>
      element.id === updatedPet.id ? updatedPet : element
    );
  };
}

const petStore = new PetStore();
export default petStore;
