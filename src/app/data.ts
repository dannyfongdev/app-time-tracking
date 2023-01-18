// not used -- save

export class Data {
	data: Timesheet[] = [];
	titles: string[] = [];

	constructor() {}

	async getData() {
		fetch("assets/data.json")
			.then(response => response.json())
			.then(json => {
				this.data = json;
				this.data.forEach(item => {
					console.log(item);
					let i = item as Timesheet;
					console.log(i.title);
					this.titles.push(i.title);
					console.log(this.titles);
					return this.data;
				});
			});
	}

	getTitles() {
		return this.titles;
	}

	getTimesheets() {
		return this.data;
	}
}

export interface CurrentPrevious {
	current: number;
	previous: number;
}

export interface TimeFrames {
	daily: CurrentPrevious;
	weekly: CurrentPrevious;
	monthly: CurrentPrevious;
}

export interface Timesheet {
	title: string;
	timeFrames?: TimeFrames;
}
