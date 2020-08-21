import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-display',
  templateUrl: './movie-display.component.html',
  styleUrls: ['./movie-display.component.css']
})
export class MovieDisplayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  index: number = -1;
  voteClick(id: number, event) {
    if (this.index === id) {
      this.index = -1;
      let myvar = event.target;
      myvar.innerText = 'VOTE';
    } else {
      this.index = id;
      let myvar = event.target;
      myvar.innerText = 'UNVOTE';
    }
  }

  isSelected(id) {
    return this.index === id;
  }

  isDisableVote(id) {
    if (this.index === id) {
      return 0;
    }
    if (this.index !== -1) {
      return 1;
    } else {
      return 0;
    }
  }
}
