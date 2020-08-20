import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-angular-app';
  index: number = -1;
  voteClick(id: number) {
    if (this.index === id) {
      this.index = -1;
    }
    else {
      this.index = id;
    }
  }

  isSelected(id) {
    return this.index === id;
  }
  isDisableVote(id){
    if(this.index === id)
    {
      return 0;
    }
    if (this.index !== -1){
      return 1;
    }

    else{
      return 0;
    }
  }
}
