import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public actionsheetCtrl: ActionSheetController
  ) { }

  async openMenu() {
    const actionSheet = await this.actionsheetCtrl.create({
      header: 'Update Album',
      buttons: [
        {
          text: 'Destructive',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },

        {
          text: 'Create',
          handler: () => {
            console.log('Create clicked');
          }
        },

        {
          text: 'Play',
          icon: 'caret-forward-circle',
          handler: () => {
            console.log('Play clicked');
          }
        },

        {
          text: 'Favorite',
          icon: 'heart',
          handler: () => {
            console.log('Favorite clicked');
          }
        },

        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });

    await actionSheet.present();
  }
}
