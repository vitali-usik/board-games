import {
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'note-card',
  templateUrl: 'note-card.html',
  styleUrls: ['note-card.css']
})
export class NoteCard {
  @Input() note = {};

  showCheck: boolean = false;

  toggleCheck() {
    this.showCheck = !this.showCheck;
  }

  onChecked() {
    console.log('note clicked');
  }
};
