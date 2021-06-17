import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sticker-message',
  templateUrl: './sticker-message.component.html',
  styleUrls: ['./sticker-message.component.css']
})
export class StickerMessageComponent {
  @Input() msg: string = '';
  @Output() closeAlert:EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  close() {
    this.closeAlert.emit(true)
  }
}
