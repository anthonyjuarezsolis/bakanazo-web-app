import { Injectable, NgZone } from "@angular/core";
import * as auth from "firebase/auth";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from "@angular/fire/compat/firestore";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";
import { IUser } from "../interfaces/IUser";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  userData: IUser; // Save logged in user data
  private openModal = new BehaviorSubject<boolean>(undefined);

  constructor(
    public afs: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) {}

  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }

  // Auth logic to run auth providers
  AuthLogin(provider: any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        this.ngZone.run(() => {
          this.SetUserData(result.user);
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  /* Setting up user data when sign in with username/password,
  sign up with username/password and sign in with social auth
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    const userData: IUser = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };

    if (userData.email) {
      localStorage.setItem("user", JSON.stringify(userData));
      JSON.parse(localStorage.getItem("user")!);
      console.log(userData);
      this.router.navigate(["home"]);

      // return userRef.set(userData, {
      //   merge: true,
      // });
      // } else {
      //   this.emitOpenModal(true);
      //   return undefined;
    }
  }

  public emitOpenModal(open: boolean) {
    this.openModal.next(open);
  }

  public getOpenModal() {
    return this.openModal.asObservable();
  }

  public endOpenModal() {
    return this.openModal.unsubscribe();
  }

  // Sign out
  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem("user");
      this.router.navigate(["login"]);
    });
  }

  getList() {
    return this.afs
      .collection("anthonyjuarezsolis@gmail.com")
      .snapshotChanges();
  }
}
