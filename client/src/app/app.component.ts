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
    cnt.fillRect(10, 10, 50, 50);

    cnt.fillStyle = "rgba(0, 0, 200, 0.5)";
    cnt.fillRect(30, 30, 50, 50);

    cnt.fillRect(90, 90, 60, 60);
    cnt.clearRect(100, 100, 40, 40);
    cnt.strokeRect(105, 105, 30, 30);

    cnt.beginPath();
    cnt.moveTo(75, 75);
    cnt.lineTo(100, 75);
    cnt.lineTo(100, 25);
    cnt.fill();
  }
}
