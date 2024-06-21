import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NoteModalComponent } from '../note-modal/note-modal.component';
import { Storage } from '@ionic/storage-angular';
import { NoteDetailsModalComponent } from '../note-details-modal/note-details-modal.component';


@Component({
  selector: 'app-daily-notes',
  templateUrl: './daily-notes.page.html',
  styleUrls: ['./daily-notes.page.scss'],
})
export class DailyNotesPage implements OnInit {
  notes: any[] = [];
  constructor(private modalController: ModalController, private storage: Storage) { }




  async ngOnInit() {
    await this.storage.create();
    this.loadNotes();
    console.log('call')
  }

  async loadNotes() {

    const storedNotes = await this.storage.get('notes');
    if (storedNotes) {
      this.notes = storedNotes;
      console.log(this.notes)
    }

  }

  async viewModal() {
    const modal = await this.modalController.create({
      component: NoteModalComponent
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    if (data) {
      console.log('Note saved:', data);
      this.notes.push(data); // Add the new note to the list
      await this.storage.set('notes', this.notes); // Save the updated list
    }
  }

  async viewNoteDetails(note: any, index: any) {
    const modal = await this.modalController.create({
      component: NoteDetailsModalComponent,
      componentProps: { note: note, noteIndex: index }
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    if (data) {
      if (data.action === 'save') {
        this.notes[data.index] = data.note; // Update the note
      } else if (data.action === 'delete') {
        this.notes.splice(data.index, 1); // Delete the note
      }
      await this.storage.set('notes', this.notes); // Save the updated list
    }
  }

}
