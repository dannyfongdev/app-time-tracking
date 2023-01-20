import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Timeframe } from "../types"

@Component({
	selector: "app-timeframe-selector",
	templateUrl: "./timeframe-selector.component.html",
	styleUrls: ["./timeframe-selector.component.css"]
})
export class TimeframeSelectorComponent {
	@Input() timeframe:Timeframe = "Weekly";
	@Output() timeframeChange = new EventEmitter<Timeframe>();

	getTextColor(label: string) {
		if (label == this.timeframe) {
			return "selected-timeframe";
		} else {
			return "";
		}
	}

	setTimeframe(tf: Timeframe) {
		this.timeframe = tf;
		this.timeframeChange.emit(this.timeframe);
	}
}
