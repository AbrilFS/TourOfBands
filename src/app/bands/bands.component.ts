import { Component, OnInit } from '@angular/core';
import { Band } from '../band';
import { BANDS } from '../mock-bands';

@Component({
  selector: 'app-bands',
  templateUrl: './bands.component.html',
  styleUrls: ['./bands.component.scss']
})
export class BandsComponent {


bands = BANDS
selectedBand: Band | undefined;

onSelect (band : Band): void{
  this.selectedBand = band;
  }

}
