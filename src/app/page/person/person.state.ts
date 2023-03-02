import { PersonModel } from "./person.model";

export interface PersonState {
  persons: ReadonlyArray<PersonModel>;
}