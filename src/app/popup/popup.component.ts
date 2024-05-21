import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {
  @Input() isOpen: boolean = false;
  @Output() close = new EventEmitter<void>();

  closePopup() {
    this.isOpen = false;
    this.close.emit();
  }
}
