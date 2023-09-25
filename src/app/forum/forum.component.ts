import { User } from './../user';
import { Component, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent {
  user: User;
  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }

  ngMouseOver(elementId: string) {
    const element = this.elementRef.nativeElement.querySelector(`#${elementId}`);
    this.renderer.setStyle(element, 'background-color', '#9988d3');
    this.renderer.setStyle(element, 'color', 'white');
  }

  ngMouseOut(elementId: string) {
    const element = this.elementRef.nativeElement.querySelector(`#${elementId}`);
    this.renderer.setStyle(element, 'background-color', 'white');
    this.renderer.setStyle(element, 'color', 'black');
  }
}
