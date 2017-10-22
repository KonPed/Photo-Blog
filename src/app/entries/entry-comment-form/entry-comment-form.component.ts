import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { EntryService } from '../shared/entry.service';

@Component({
  selector: 'app-entry-comment-form',
  templateUrl: './entry-comment-form.component.html',
  styleUrls: ['./entry-comment-form.component.css']
})
export class EntryCommentFormComponent implements OnInit {

  name: string;
  comment: string;

  @Input()
  entryId: number;

  @Output()
  addComment = new EventEmitter<object>();

  constructor(private entryService: EntryService) {

  }

  onSubmit() {
    const comment = { name: this.name, comment: this.comment };
    this.entryService.addComment(this.entryId, comment).then(() => {
      this.addComment.emit(comment);
    });
  }

  ngOnInit() {
  }

}
