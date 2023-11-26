import { Component, OnInit, HostListener } from '@angular/core';

@Component({
	selector: 'app-desktop-starter',
	templateUrl: './desktop-starter.component.html',
	styleUrls: ['./desktop-starter.component.scss'],
})
export class DesktopStarterComponent implements OnInit {
	countTime: number = 10;
	showBootText: boolean = false;
	countDownInterval: any;

	ngOnInit(): void {
		this.countDown();
	}

	countDown(): void {
		this.countDownInterval = setInterval(() => {
			this.countTime -= 1;

			if (this.countTime === 0) {
				this.showBootText = true;
				clearInterval(this.countDownInterval);
			}
		}, 1000);
	}

	@HostListener('document:keydown.enter')
	spaceKeyHit(): void {
		this.countTime = 0;
		this.showBootText = true;
		clearInterval(this.countDownInterval);
	}
}
