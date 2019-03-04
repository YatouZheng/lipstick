import { Component, EventEmitter, Output } from '@angular/core';
import { IBoardListItem } from '../IBoardList';

@Component({
  selector: 'app-rightscreen',
  templateUrl: './rightscreen.component.html',
  styleUrls: ['./rightscreen.component.css']
})
export class RightscreenComponent  {
  board: IBoardListItem = { 
    name: 'no board selected',
    manufacturer_logo: 'jp_australia_logo.png',
    image:'jp_australia_logo.png'

  };


  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  closeClicked() {
    this.notify.emit('Click from nested component');
  }

  closeRightWindow() {
    document.getElementById('myRightScreen').style.transform = "translateX(100%)";
  }

  openRightWindow() {
    document.getElementById('myRightScreen').style.transform = "translateX(0%)";
  }

}
