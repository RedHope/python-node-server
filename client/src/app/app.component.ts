import { Component, AfterViewInit, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements AfterViewInit {
  title = "app";
  @ViewChild("canvasref", { read: ElementRef })
  canvasref: ElementRef;

  ngAfterViewInit(): void {
    const canvas = <HTMLCanvasElement>this.canvasref.nativeElement;
    const cnt = canvas.getContext("2d");
    canvas.style.border = "1px solid";
    cnt.fillStyle = "rgb(200, 0, 0)";
    
    // heart shape
    cnt.beginPath();
    cnt.moveTo(75, 40);
    cnt.bezierCurveTo(75, 37, 70, 25, 50, 25);
    cnt.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
    cnt.bezierCurveTo(20, 80, 40, 102, 75, 120);
    cnt.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
    cnt.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
    cnt.bezierCurveTo(85, 25, 75, 37, 75, 40);
    cnt.fill();
  }
}
