import { Component, OnInit, Input } from '@angular/core';
import { Entry } from '../shared/entry.model';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  @Input()
  entry: Entry;

  isLiked = false;
  showComments = false;

  constructor() { }

  ngOnInit() {
  }

}
