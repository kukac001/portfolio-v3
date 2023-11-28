import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
	standalone: true,
	imports: [CommonModule],
})
export class HeaderComponent {
	now: number | undefined;

	docElement!: HTMLElement;
	isFullScreen: boolean = false;

	constructor() {
		setInterval(() => {
			this.now = Date.now();
		}, 1);
	}

	ngOnInit(): void {
		this.docElement = document.documentElement;
	}

	toggleFullScreen() {
		if (!this.isFullScreen) {
			this.docElement.requestFullscreen();
		} else {
			document.exitFullscreen();
		}
		this.isFullScreen = !this.isFullScreen;
	}
}
