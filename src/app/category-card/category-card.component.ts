import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.css']
})
export class CategoryCardComponent {
  @Input() title="";
  @Input() timeframe="";

  getBgColor() {
    switch (this.title) {
      case "Work": return "bg-work";
      case "Play": return "bg-play";
      case "Study": return "bg-study";
      case "Excercise": return "bg-exercise";
      case "Social": return "bg-social";
      case "Self Care": return "bg-selfcare";
      default: return "";
    }
  }

  getTimeframeLabel() {
    switch (this.timeframe) {
      case "Daily": return "Yesterday - ";
      case "Weekly": return "Last Week - ";
      case "Monthly": return "Last Month - ";
      default: return "Last Week - ";
    }
  }
}
