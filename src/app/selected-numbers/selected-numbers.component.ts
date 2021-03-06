import {Component, OnInit} from '@angular/core';

export interface NumberSlot {
  number?: number;
}

@Component({
  selector: 'app-selected-numbers',
  templateUrl: './selected-numbers.component.html',
  styleUrls: ['./selected-numbers.component.scss']
})
export class SelectedNumbersComponent {

  public numbers: NumberSlot[] = [{}, {}, {}, {}, {}, {}];

  public selectNumber(n: number) {
    const emptySlots = this.numbers
      .filter((slot) => !slot.hasOwnProperty('number'));

    const hasNumber = !!this.numbers.find((slot) => slot.number === n);

    if (!hasNumber && emptySlots.length > 0) {
      emptySlots.shift().number = n;
    }

    console.log(this.numbers
      .map(slot => slot.number || 'X')
      .join('-'));
  }
}
