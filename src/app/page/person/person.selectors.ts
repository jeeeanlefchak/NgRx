import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PersonModel } from "./person.model";

export const personSelected = createFeatureSelector<PersonModel[]>('person');

export const selectPersonById = (id: number) => createSelector(
  personSelected,
  (persons: PersonModel[]) => persons.find(person => person.id == id)
);
