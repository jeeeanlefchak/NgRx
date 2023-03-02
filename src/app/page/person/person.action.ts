import { createAction, props } from "@ngrx/store";
import { PersonModel } from "./person.model";

export enum UsuarioActionTypes {
  SET_LIST = '[Person] Set List Person',
  Delete = '[Person] Delete Person',
  SAVE = '[Person] Save Person',
}

export const savePerson = createAction(
  UsuarioActionTypes.SAVE,
  props<{ usuario: PersonModel }>()
);
export const deletePersons = createAction(
  UsuarioActionTypes.Delete,
  props<{ id: number }>()
);
export const setPersons = createAction(
  UsuarioActionTypes.SET_LIST,
  props<{ persons: PersonModel[] }>()
);