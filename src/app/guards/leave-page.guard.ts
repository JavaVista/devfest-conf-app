import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { SupportPage } from '../pages/support/support';


@Injectable({
  providedIn: 'root'
})
export class LeavePageGuard {

  constructor(public alertCtrl: AlertController) { }

  async canDeactivate(
    component: SupportPage
  ): Promise<boolean> {

    if (!component.supportMessage || component.supportMessage.trim().length === 0) {
      return true;
    }

    return new Promise<boolean>(async (resolve) => {
      const alert = await this.alertCtrl.create({
        message: 'Are you sure you want to leave this page? Your support message will not be submitted.',
        buttons: [
          { text: 'Stay', handler: () => resolve(false) },
          { text: 'Leave', role: 'cancel', handler: () => resolve(true) }
        ]
      });

      await alert.present();
    });
  }
}
