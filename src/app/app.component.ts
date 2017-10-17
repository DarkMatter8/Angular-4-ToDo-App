import { Component } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('animation1', [
      
      state('small', style({
        transform: 'scale(1)'
      })),

      state('large', style({
        transform: 'scale(1.1)'
      })),

      transition('small => large', animate('300ms ease-in')),

    ]),

    trigger('flyInOut', [
    
    transition('void => *', [
      style({transform: 'translateX(-100%)'}),
      animate(100)
    ]),

    transition('* => void', [
      animate(100, style({transform: 'translateX(100%)'}))
    ])
    
  ]),

  ]
})

export class AppComponent {
  title = 'ToDo List';
  items = [];
  newitem="";
  state: string = 'small'

  animationenter = function(){
    this.state = 'large'
  }

  animationleave = function(){
    this.state = 'small'
  }


  pushitem = function(){
  	if(this.newitem != ""){
  		this.items.push(this.newitem);
  		this.newitem="";
  	}
  }

  removeitem = function(index){
  	this.items.splice(index, 1);
  }
}
