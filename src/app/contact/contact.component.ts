import { Component, Inject } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { ContactFormService } from '../contact-form.service';
import { FormsModule }   from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FormBuilder, FormGroup, FormGroupDirective, Validators, ReactiveFormsModule } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule} from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

export interface DialogData{
  name: string,
  surname: string,
  subject: string,
  body: string
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, MatButtonModule, FormsModule, MatProgressSpinnerModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  isAwaitingResponse: boolean = false;
  contactForm!: FormGroup;

  constructor(private formService: ContactFormService, private formBuilder: FormBuilder, private _snackBar: MatSnackBar, public dialog: MatDialog) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      subject: ['', Validators.required],
      body: ['', Validators.required]
    });
  }

  async onSubmit(formData: FormGroup, formDirective: FormGroupDirective) {
    let dataToSend = this.getFilledData();
    if (this.contactForm.valid) {
      this.isAwaitingResponse = true;
      await this.formService.sendForm(
        dataToSend.name,
        dataToSend.surname,
        dataToSend.subject,
        dataToSend.body
      );
      this.isAwaitingResponse = false;
    }
    this._snackBar.open($localize`Message successfully sent!`, $localize`View sent data`, {duration: 5000}).onAction().subscribe(()=>{
      this.dialog.open(DataViewDialog, {
        data:{
          ...dataToSend
        }
      })
    });
    this.contactForm.reset();
    formDirective.resetForm();

  }

  getFilledData(){
    return {
      name: this.contactForm.get('name')?.value,
      surname: this.contactForm.get('surname')?.value,
      subject: this.contactForm.get('subject')?.value,
      body: this.contactForm.get('body')?.value
    }
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'data-view-dialog.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, CommonModule],
})
export class DataViewDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData){}
}
