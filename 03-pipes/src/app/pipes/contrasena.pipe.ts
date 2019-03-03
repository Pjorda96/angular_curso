import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, encrypted: boolean = true): string {

    if (encrypted) {
      let a = value.length;
      let encript = '';

      for (let i = 0; i < a; i++) {
        encript = encript + '*';
      }
      return encript;

    }
    return value;

  }
}
