import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-sedekah-duit',
  templateUrl: './sedekah-duit.page.html',
  styleUrls: ['./sedekah-duit.page.scss'],
})
export class SedekahDuitPage implements OnInit {
  noteTitle: any;
  noteText: any;
  currentDate: string = new Date().toLocaleDateString('en-GB');
  constructor(private modalController : ModalController) { }

  ngOnInit() {
  }
  async viewModal() {
    // const modal = await this.modalController.create({
    //   component: NoteModalComponent
    // });
    // await modal.present();

    // const { data } = await modal.onWillDismiss();
    // if (data) {
    //   console.log('Note saved:', data);
    //   this.notes.push(data); // Add the new note to the list
    //   await this.storage.set('notes', this.notes); // Save the updated list
    // }
  }

  saveNote() {
    
  }
}
