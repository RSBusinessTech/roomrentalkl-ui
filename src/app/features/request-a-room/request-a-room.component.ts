import { Component, HostListener, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
@Component({
  selector: 'app-request-a-room',
  templateUrl: './request-a-room.component.html',
  styleUrls: ['./request-a-room.component.css']
})
export class RequestARoomComponent implements OnInit {

  requestForm!: FormGroup;

  loading = false;
  submitted = false;

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
  

  createForm() {

    this.requestForm = this.fb.group({

      roomType: ['', Validators.required],

      propertyType: ['', Validators.required],

      area: ['', Validators.required],

      transit: [''],

      moveInDate: [''],

      minBudget: [''],

      maxBudget: [''],

      occupants: [''],

      leaseDuration: [''],

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

  get f() {

    return this.requestForm.controls;

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

    this.requestForm.reset();

    this.createForm();

  }

  /*=========================================================
  DROPDOWNS
  =========================================================*/

  roomTypes = [

    'Single Room',

    'Middle Room',

    'Master Room',

    'Studio',

    'Entire Unit'

  ];



  propertyTypes = [

    'Apartment',

    'Condominium',

    'Serviced Residence',

    'Landed House',

    'SOHO',

    'Office'

  ];



  areas = [

    'KLCC',

    'Bukit Bintang',

    'Mont Kiara',

    'Bangsar',

    'Cheras',

    'Ampang',

    'Setapak',

    'Wangsa Maju',

    'Sri Petaling',

    'Old Klang Road',

    'Mid Valley',

    'KL Sentral',

    'Taman Desa',

    'Desa ParkCity',

    'Kepong',

    'Segambut',

    'Sentul',

    'Brickfields',

    'Sunway Velocity',

    'Titiwangsa'

  ];



  transits = [

    'KLCC MRT',

    'Bukit Bintang MRT',

    'TRX MRT',

    'Cochrane MRT',

    'Maluri MRT',

    'Merdeka MRT',

    'Muzium Negara MRT',

    'Pasar Seni MRT',

    'Tun Razak Exchange MRT',

    'Ampang Park MRT',

    'KL Sentral',

    'PWTC',

    'Monorail',

    'LRT'

  ];

}
