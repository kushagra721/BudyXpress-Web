import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUSComponent {
  lat = 28.6139;  // Replace with your latitude
  lng = 77.2090;  // Replace with your longitude
center = {lat: 28.6139, lng: 77.209};
zoom = 15;
  form = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    console.log('Form submitted:', this.form);
    alert('Message sent!');
  }
}
