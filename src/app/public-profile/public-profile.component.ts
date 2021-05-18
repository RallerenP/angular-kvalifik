import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
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
      logoUrl: new FormControl(null, Validators.required),
      coverUrl: new FormControl(null, Validators.required),
      aboutBlocks: new FormArray([]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      contactPerson: new FormControl(null, Validators.required)
    })
  }

  get aboutBlocks() {
    return this.publicProfileForm.get('aboutBlocks') as FormArray
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

  onOrganisation() {
    this.aboutBlocks.push(new FormGroup({
      organisationHeader: new FormControl(null, Validators.required),
      organisationBody: new FormControl(null, Validators.required)
    }))
  }


}
