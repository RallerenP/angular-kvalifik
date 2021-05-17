export enum UserType {
  VOLUNTEER,
  ADMIN
}

export class User {

  username: string;
  password: string;
  imageUrl: string;
  volunteer: boolean;
  studyProgramme: string;
  type: UserType;
  applicationDate: Date;
  volunteerSince: Date;
  groups: []


  constructor(
    username: string,
    password: string,
    imageUrl: string,
    volunteer: boolean,
    studyProgramme: string,
    type: UserType,
    applicationDate: Date,
    volunteerSince: Date,
    groups: []) {
    this.username = username;
    this.password = password;
    this.imageUrl = imageUrl;
    this.volunteer = volunteer;
    this.studyProgramme = studyProgramme;
    this.type = type;
    this.applicationDate = applicationDate;
    this.volunteerSince = volunteerSince;
    this.groups = groups;
  }
}
