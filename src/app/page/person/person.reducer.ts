import { createReducer, on } from "@ngrx/store";
import { deletePersons, savePerson, setPersons } from "./person.action";
import { PersonModel } from "./person.model";

const key = 'USER_';

export const INITAL_STATE: PersonModel[] = [];

export const PersonReduce = createReducer(
  INITAL_STATE,
  on(setPersons, (state, { persons }) => {
    const personsLocalStorage = JSON.parse(localStorage.getItem(key) || '[]') as PersonModel[];
    if (personsLocalStorage.length === 0) {
      localStorage.setItem(key, JSON.stringify(persons));
      return persons;
    }
    return personsLocalStorage;
  }),
  on(deletePersons, (state, { id }) => {
    let personsLocalStorage: PersonModel[] = JSON.parse(localStorage.getItem(key) || '[]') as PersonModel[];
    personsLocalStorage = personsLocalStorage.filter(usuario => usuario.id !== id);

    localStorage.setItem(key, JSON.stringify(personsLocalStorage));

    return personsLocalStorage;
  }),
  on(savePerson, (state, { usuario }) => {
    let personsLocalStorage: PersonModel[] = JSON.parse(localStorage.getItem(key) || '[]') as PersonModel[];
    if (usuario?.id) {
      const index = personsLocalStorage.findIndex(u => u.id === usuario.id);
      if (index >= 0) {
        const newState = [...state];
        newState[index] = usuario;
        localStorage.setItem(key, JSON.stringify(newState));
        return newState;
      }
    }
    const id = Math.random();
    const novoUsuario = { ...usuario, id };
    const newState = [...state, novoUsuario];
    localStorage.setItem(key, JSON.stringify(newState));
    return newState;
  }),
)