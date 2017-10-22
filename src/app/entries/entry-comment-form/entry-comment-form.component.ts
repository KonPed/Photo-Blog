import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entry-comment-form',
  templateUrl: './entry-comment-form.component.html',
  styleUrls: ['./entry-comment-form.component.css']
})
export class EntryCommentFormComponent implements OnInit {

  name: string;
  comment: string;

  constructor() { }

  ngOnInit() {
  }

}
