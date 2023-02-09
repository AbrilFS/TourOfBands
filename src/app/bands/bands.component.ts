import { Component, OnInit } from '@angular/core';
import { Band } from '../band';
import { BandService } from '../band.service';

@Component({
  selector: 'app-bands',
  templateUrl: './bands.component.html',
  styleUrls: ['./bands.component.scss']
})
export class BandsComponent {


bands = Band[];
selectedBand: Band | undefined;

onSelect (band : Band): void{
  this.selectedBand = band;
  }

  constructor (private bandService : BandService) {}

  getBands() : void{
    this.bands = this.bandService.getBands
  };



}
