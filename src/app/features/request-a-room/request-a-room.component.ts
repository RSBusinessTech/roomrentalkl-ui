import { Component, HostListener, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { AREAS } from 'src/app/shared/data/areas';
@Component({
  selector: 'app-request-a-room',
  templateUrl: './request-a-room.component.html',
  styleUrls: ['./request-a-room.component.css']
})
export class RequestARoomComponent implements OnInit {

  requestForm!: FormGroup;
  loading = false;
  submitted = false;
  
  areas = AREAS;

  createForm() {
    this.requestForm = this.fb.group({
      roomType: ['', Validators.required],
      propertyType: ['', Validators.required],
      area: ['', Validators.required],
      transit: [''],
        moveInDate: ['', Validators.required],
        minBudget: ['', Validators.required],
        maxBudget: ['', Validators.required],
      occupants: [''],
        leaseDuration: ['', Validators.required],
      furnished: ['Any'],
      parking: ['No Preference'],
      requirements: [''],
      fullName: ['', Validators.required],
      gender: ['', Validators.required],
      nationality: ['', Validators.required],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      phone: ['', Validators.required],
      occupation: [''],
      contactMethod: ['WhatsApp'],
      source: ['Google Search'],
      agree: [false, Validators.requiredTrue]
    });
  }

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
    this.checkReveal();
  }
  
  @HostListener('window:scroll')
  onScroll() {
    this.checkReveal();
  }
  
  checkReveal() {
    const elements = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;
  
    elements.forEach((el: any) => {
      const position = el.getBoundingClientRect().top;
  
      if (position < windowHeight - 100) {
        el.classList.add('active');
      }
    });
  }

  submitRequest() {
    this.submitted = true;
    if (this.requestForm.invalid) {
      this.requestForm.markAllAsTouched();
      return;
    }

    this.loading = true;
    console.log(this.requestForm.value);
    /*
       Spring Boot API here

       this.service.submitRequest(this.requestForm.value)
       .subscribe(...)
    */
  }

  resetForm() {
    this.submitted = false;
    this.createForm();
  }

 isInvalid(field: string): boolean {
  const control = this.requestForm.get(field);

  return !!(
    control &&
    control.invalid &&
    (control.dirty || control.touched || this.submitted)
  );
}
}
