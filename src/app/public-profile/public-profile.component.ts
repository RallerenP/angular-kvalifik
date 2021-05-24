import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../shared/user.service";

@Component({
  selector: 'app-public-profile',
  templateUrl: './public-profile.component.html',
  styleUrls: ['./public-profile.component.scss']
})
export class PublicProfileComponent implements OnInit {

  publicProfileForm: FormGroup;
  signedInAs: string;

  // publicProfileForm (form) -> aboutBlocks (FormArray) -> FormGroup [organisationHeader, organisationBody]

  constructor(private userService: UserService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.signedInAs = this.userService.getUser()

    this.publicProfileForm = this.fb.group({
        logoUrl: ['', Validators.required],
        coverUrl: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        contactPerson: ['', Validators.required],
        staticOrganisationBlock: this.fb.group({
          organisationHeader: ['', Validators.required],
          organisationBody: ['', Validators.required],
        }),
        additionalOrganisationBlocks: this.fb.array([])
    })
  }

  get additionalOrganisationBlocksForm() {
    return this.publicProfileForm.get('additionalOrganisationBlocks') as FormArray
  }

  get form() {
    return this.publicProfileForm.controls
  }

  onSubmit() {
    // Send file to database via redux or service, make sure reset() is done AFTER the HTTP request is sent
    console.log(this.publicProfileForm)
    //this.publicProfileForm.reset()
  }

  onPreview() {}

  onOrganisation() {
    const additionalOrganisationBlock = this.fb.group({
      organisationHeader: ['', Validators.required],
      organisationBody: ['', Validators.required],
    })

    this.additionalOrganisationBlocksForm.push(additionalOrganisationBlock)
  }

  deleteOrganisationBlock(i: number) {
    this.additionalOrganisationBlocksForm.removeAt(i)
  }


}
