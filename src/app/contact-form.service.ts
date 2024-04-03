import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
@Injectable({
  providedIn: 'root'
})
export class ContactFormService {
  constructor() {}

  sendForm(name: string, surname: string, subject: string, body: string): Promise<any> {
    const formData = {
      name: name,
      surname: surname,
      subject: subject,
      body: body
    };

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("success");
      }, 2000);
    });
  }
}
