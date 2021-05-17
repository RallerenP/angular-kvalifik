import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../shared/user.service";

@Component({
  selector: 'app-public-profile',
  templateUrl: './public-profile.component.html',
  styleUrls: ['./public-profile.component.scss']
})
export class PublicProfileComponent implements OnInit {

  publicProfileForm: FormGroup;
  signedInAs: string;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.signedInAs = this.userService.getUser()
    this.publicProfileForm = new FormGroup({
      logoUrl: new FormControl('', Validators.required),
      coverUrl: new FormControl('', Validators.required),
      organisationHeader: new FormControl('', Validators.required),
      organisationBody: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      contactPerson: new FormControl('', Validators.required)
    })
  }

  get form() {
    return this.publicProfileForm.controls
  }

  onSubmit() {
    // Send file to database via redux or service, make sure reset() is done AFTER the HTTP request is sent
    console.log(this.publicProfileForm)
    this.publicProfileForm.reset()
  }

  onPreview() {}

  onOrganisation() {}
}
