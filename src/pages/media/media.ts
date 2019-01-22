import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetailsmediaPage } from '../detailsmedia/detailsmedia';

@Component({
    selector: 'page-media',
    templateUrl: 'media.html',
})
export class MediaPage {
    private _dataMedia: any;
    private _detailsmedia: any;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this._detailsmedia = DetailsmediaPage;
        this._dataMedia = [
            { title: "Coffee",         video: "CoffeeBeans.mp4",    poster: "CoffeeBeans-poster.png",    descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod. Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." },
            { title: "Coffe & Work",   video: "CoffeeComputer.mp4", poster: "CoffeeComputer-poster.png", descripcion: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo. Cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non." },
            { title: "Steaming",       video: "CoffeeCoup.mp4",     poster: "CoffeeCoup-poster.png",     descripcion: "Consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse. Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." },
            { title: "Latte",          video: "CoffeeMachine.mp4",  poster: "CoffeeMachine-poster.png",  descripcion: "Cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non. Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." },
            { title: "American",       video: "CoffeeMorning.mp4",  poster: "CoffeeMorning-poster.png",  descripcion: "Proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non." }
        ];
  }

    ionViewDidLoad() {
        console.log('ionViewDidLoad MediaPage');
}

    loadDetails( currentData ) {
        this.navCtrl.push( this._detailsmedia , { details: currentData } );
    }

}
