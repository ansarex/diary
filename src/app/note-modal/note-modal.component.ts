import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-note-modal',
  templateUrl: './note-modal.component.html',
  styleUrls: ['./note-modal.component.scss'],
})
export class NoteModalComponent {
  noteTitle: any;
  noteText: any;
  currentDate: string = new Date().toLocaleDateString('en-GB');

  constructor(private modalController: ModalController) {}

  dismiss() {
    this.modalController.dismiss();
  }

  saveNote() {
    const note = {
      title: this.noteTitle,
      text: this.noteText,
      date: this.currentDate
    };
    this.modalController.dismiss(note);
  }
}
