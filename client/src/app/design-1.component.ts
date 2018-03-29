import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'design-1',
  template: '<canvas id="design1" #design1></canvas>'
})
export class Design1 implements AfterViewInit {
  @ViewChild('design1', { read: ElementRef })
  design1: ElementRef;

  ngAfterViewInit(): void {
    const canvas = <HTMLCanvasElement>this.design1.nativeElement;
    const ctx = canvas.getContext("2d");
    canvas.style.border = "1px solid";

    ctx.fillStyle = "rgb(200, 0, 0)";
    ctx.fillRect(10, 10, 50, 50);

    ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
    ctx.fillRect(30, 30, 50, 50);

    ctx.fillRect(90, 90, 60, 60);
    ctx.clearRect(100, 100, 40, 40);
    ctx.strokeRect(105, 105, 30, 30);
  }
}
