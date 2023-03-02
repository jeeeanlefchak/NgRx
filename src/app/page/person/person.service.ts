import { Injectable } from '@angular/core';
import { PersonModel } from './person.model';

@Injectable()
export class PersonService {

  constructor() { }

  getAll() {
    return new Promise<PersonModel[]>((resolve, reject) => {
      resolve([
        { id: 1, name: 'Jean carlos lefchak', cpf: '103.044.222-58', email: 'jean_2103@hotmail.com', phone: '46 9 88027593', year: '25' },
        { id: 2, name: 'Jose Silva', cpf: '103.044.222-56', email: 'jose@hotmail.com', phone: '46 9 88027594', year: '26' },
        { id: 3, name: 'Rodrigo Rodrigues', cpf: '103.044.222-52', email: 'rodrigo@hotmail.com', phone: '46 9 88027599', year: '17' },
      ])
    });
  }

}
