import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  @Input() signup = false;
  @Output() signin = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.signup)
  }

  onSignUp(){
    this.signin.emit(true);
  }
}
