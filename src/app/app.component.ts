import { Component } from "@angular/core";
// import { Data, Timesheet } from "./data";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"]
})
export class AppComponent {
	timeframe = "Daily";
  categories = [
    "Work",
    "Play",
    "Study",
    "Exercise",
    "Social",
    "Self Care"
  ]
	// d = new Data();
  // data = this.d.getData();
	// titles: string[] = [];
  // timesheets: Timesheet[] = [];

	public ngOnInit() {
    // this.d.getData();
		// this.timesheets = this.d.getTimesheets();
		// this.titles = this.d.getTitles();
    // console.log("don't like async")
    // console.log(this.timesheets)
	}
}
