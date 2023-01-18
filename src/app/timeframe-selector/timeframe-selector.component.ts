import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
	selector: "app-timeframe-selector",
	templateUrl: "./timeframe-selector.component.html",
	styleUrls: ["./timeframe-selector.component.css"]
})
export class TimeframeSelectorComponent {
	@Input() timeframe = "Weekly";
	@Output() timeframeChange = new EventEmitter<string>();

	getTextColor(label: string) {
		if (label == this.timeframe) {
			return "selected-timeframe";
		} else {
			return "";
		}
	}

	setTimeframe(tf: string) {
		this.timeframe = tf;
		this.timeframeChange.emit(this.timeframe);
	}
}
