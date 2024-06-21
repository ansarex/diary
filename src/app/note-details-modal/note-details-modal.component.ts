import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-note-details-modal',
  templateUrl: './note-details-modal.component.html',
  styleUrls: ['./note-details-modal.component.scss'],
})
export class NoteDetailsModalComponent {
  @Input() note: any;
  @Input()
  noteIndex!: number;

  constructor(private modalController: ModalController) {}

  dismiss() {
    this.modalController.dismiss();
  }

  saveNote() {
    this.modalController.dismiss({ action: 'save', note: this.note, index: this.noteIndex });
  }

  deleteNote() {
    this.modalController.dismiss({ action: 'delete', index: this.noteIndex });
  }
}
