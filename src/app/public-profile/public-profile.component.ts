import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-public-profile',
  templateUrl: './public-profile.component.html',
  styleUrls: ['./public-profile.component.scss']
})
export class PublicProfileComponent implements OnInit {

  publicProfileForm: FormGroup;

  constructor() {
    this.publicProfileForm = new FormGroup({
      logoUrl: new FormControl('', Validators.required),
      coverUrl: new FormControl('', Validators.required),
      organisationHeader: new FormControl('', Validators.required),
      organisationBody: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      contactPerson: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.publicProfileForm)
  }

  onPreview() {}

  onOrganisation() {}
}
