import { makeAutoObservable } from "mobx";
import petsData from "../petsData.js";

class PetStore {
  constructor() {
    makeAutoObservable(this);
  }
  allPets = petsData;

  handleAdopt = (petId) =>
    (this.allPets = this.allPets.filter((pet) => pet.id !== petId));
}

const petStore = new PetStore();
export default petStore;
