import { Component, Input } from '@angular/core';
import { Band } from '../band';

@Component({
  selector: 'app-band-detail',
  templateUrl: './band-detail.component.html',
  styleUrls: ['./band-detail.component.scss']
})
export class BandDetailComponent {


  @Input() band: Band | undefined;
}
