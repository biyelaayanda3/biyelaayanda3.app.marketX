import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ResetPasswordPage } from '../reset-password/reset-password.page';
import { SigninPage } from '../signin/signin.page';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
 

  constructor(private modalCtrl: ModalController) { }

  username : any;
  password : any

  ngOnInit() {
  }

  async presentModalSignin() {
    const modal = await this.modalCtrl.create({
      component: SigninPage,
      breakpoints: [0, 0.3, 0.5, 0.8, 0.9],
      initialBreakpoint: 1,
    });

    await modal.present();
    const {role} = await modal.onDidDismiss();
  }

  async presentModalResetPassword() {
    const modal = await this.modalCtrl.create({
      component: ResetPasswordPage,
      breakpoints: [0, 0.3, 0.5, 0.8, 0.9],
      initialBreakpoint: 1,
    });

    await modal.present();
    const {role} = await modal.onDidDismiss();
  }

}
