import { Time } from "@angular/common";
import { Component } from "@angular/core";
import { Category, Timeframe} from "./types"

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"]
})
export class AppComponent {
	timeframe:Timeframe = "Weekly";
  categories:Category[] = [
    "Work",
    "Play",
    "Study",
    "Exercise",
    "Social",
    "Self Care"
  ]

}
