import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';

@Component({  
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() blue;
  @Input() text: string;
  @Output() onChanged = new EventEmitter<boolean>();

  constructor(private route: Router) { }

  ngOnInit() {
  }

  onChangeForm() {
    console.log('button component');
    this.onChanged.emit(true);
  }

  // clickButton() {
  //   if (window.innerWidth <= 500) {
  //     this.route.navigateByUrl('/callback');
  //   } else {
  //     this.callback = true;
  //   }
  // }

}
