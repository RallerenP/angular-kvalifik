import {Injectable} from '@angular/core';
import {User, UserType} from "../models/user.model";
import {HttpClient} from "@angular/common/http";
import {AngularFireAuth} from "@angular/fire/auth";
import {Observable, pipe} from "rxjs";

import {CreateUserDto} from "../dto/create-user.dto";
import {AngularFirestore} from "@angular/fire/firestore";
import firebase from "firebase";
import DocumentSnapshot = firebase.firestore.DocumentSnapshot;
import {flatMap, map, mergeMap} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  signedInAs: User | null = null;
  users: Observable<User[]>

  constructor(private http: HttpClient, private afAuth: AngularFireAuth, private afStore: AngularFirestore) {
    this.signedInAs = new User("Not Logged In", "", "", "");

    this.users = afStore.collection<User>('users').valueChanges();
  }

  me(): Observable<User | undefined> {
    return this.afAuth.user.pipe(mergeMap((user => {
      return this.get(user?.uid)
    })));
  }

  get(id: string | undefined): Observable<User | undefined> {
    const doc = this.afStore.doc<User>(`/users/${id}`)
    return doc.get().pipe(map(user => {
      return user.data()
    }));
  }

  getMultipleByIds(ids: string[]) {
    return this.afStore.collection<User>('users', (ref) => ref.where('uid', 'in', ids)).valueChanges()
  }

  getAll(): Observable<User[]> {
    return this.users;
  }


  async create(dto: CreateUserDto) {
    const doc = this.afStore.doc<CreateUserDto>(`/users/${dto.uid}`);

    doc.set({ name: dto.name, email: dto.email, uid: dto.uid, programme: dto.programme })
  }

  private _users: User[] = [];
}
