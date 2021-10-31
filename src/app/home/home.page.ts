import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { NavparamService } from '../navparam.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  currentValue = 6;
  resultado = [];

  constructor(public loadingController: LoadingController, private router: Router, private navParamService: NavparamService) {}

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Sorteando Números',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
    this.navParamService.setNavData(this.resultado);
    this.router.navigate(['resultado/', this.resultado]);

  }

  onChange(event) {
    this.currentValue = event.target.value;
  }

  sortear() {
    return Math.round(Math.random() * 100);
    // console.log(this.currentValue);
  }

  sortearNumeros() {
    const megaSena = [];
    let numero = 1;

    while (numero <= this.currentValue) {

      const numeroAleatorio = this.sortear();
      let achou = false;

      if (numeroAleatorio !== 0 && numeroAleatorio <= 60) {
        let i = 0;
        for (i; i < megaSena.length; i++) {
          if (megaSena[i] === numeroAleatorio) {
            achou = true;
            break;
          }
        }

        if (achou === false) {
          megaSena.push(numeroAleatorio);
          numero++;
        }

        this.resultado = megaSena;
      }

    }

    this.presentLoading();
  }


}

