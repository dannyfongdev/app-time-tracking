import { Component, Input } from "@angular/core";
import data from "./data.json";
import { Category, Timeframe } from "../types"



@Component({
	selector: "app-category-card",
	templateUrl: "./category-card.component.html",
	styleUrls: ["./category-card.component.css"]
})
export class CategoryCardComponent {
	@Input() title:Category = "Work";
	@Input() timeframe:Timeframe = "Weekly";
	currHours = 0;
	prevHours = 0;

	timesheets = data;
	timesheet = data.filter(ts => {
		return ts.title == this.title;
	});

	getBgColor() {
		switch (this.title) {
			case "Work":
				return "bg-work";
			case "Play":
				return "bg-play";
			case "Study":
				return "bg-study";
			case "Exercise":
				return "bg-exercise";
			case "Social":
				return "bg-social";
			case "Self Care":
				return "bg-selfcare";
			default:
				return "";
		}
	}

	getCurrentHours() {
		return this.currHours + "hrs";
	}

	getPreviousHours() {
		switch (this.timeframe) {
			case "Daily":
				return "Yesterday - " + this.prevHours + "hrs";
			case "Weekly":
				return "Last Week - " + this.prevHours + "hrs";
			case "Monthly":
				return "Last Month - " + this.prevHours + "hrs";
			default:
				return "";
		}
	}

	setHours() {
		// console.log("Setting hours for", this.title);
		const timesheet = data.find(ts => ts.title == this.title);
		if (timesheet) {
			switch (this.timeframe) {
				case "Daily":
					this.currHours = timesheet.timeframes.daily.current;
					this.prevHours = timesheet.timeframes.daily.previous;
					break;
				case "Weekly":
					this.currHours = timesheet.timeframes.weekly.current;
					this.prevHours = timesheet.timeframes.weekly.previous;
					break;
				case "Monthly":
					this.currHours = timesheet.timeframes.monthly.current;
					this.prevHours = timesheet.timeframes.monthly.previous;
					break;
			}
		} else {
			console.log("Title note found:", this.title);
		}
	}

	ngOnInit() {
		this.setHours();
	}

	ngOnChanges() {
		this.setHours();
	}
}
