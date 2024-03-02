import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
  animations: [
    trigger('typing', [
      state('done', style({
        width: 'auto'
      })),
      transition('* => *', [
        style({ width: 0 }),
        animate('70ms steps(50)', style({ width: '*' })),
        animate('400ms 700ms')
      ])
    ])
  ]
})
export class MessageComponent implements OnInit {
  text: string = '';
  @Input()  fullText: string = 'Hello, this is a typing effect!';

  constructor() { }

  ngOnInit(): void {
    this.startTyping();
  }

  startTyping() {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= this.fullText.length) {
        this.text = this.fullText.slice(0, index);
        index = index+(0.1*this.fullText.length)
      } else {
        clearInterval(interval);
        this.text = this.fullText
      }
    }, 50);
  }
}
