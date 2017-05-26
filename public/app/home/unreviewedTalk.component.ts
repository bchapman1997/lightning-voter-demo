import { Component, Inject, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'unreviewed-talk',
  templateUrl: './unreviewedTalk.component.html',
})
export class UnreviewedTalkComponent {
  @Input() session: any;
  @Output() voteYes = new EventEmitter();
  @Output() voteNo = new EventEmitter();

  ngOnChanges() {
    console.log('session', this.session);
  }

  yes() {
    this.voteYes.emit(null);
  }
  
  no() {
    this.voteNo.emit(null);
  }
} 