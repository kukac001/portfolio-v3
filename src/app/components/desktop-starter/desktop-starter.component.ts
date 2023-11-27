import { CommonModule } from '@angular/common';
import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-desktop-starter',
	templateUrl: './desktop-starter.component.html',
	styleUrls: ['./desktop-starter.component.scss'],
	standalone: true,
	imports: [CommonModule],
})
export class DesktopStarterComponent implements OnInit {
	countTimeDesktop: number = 5;
	countDownDesktopInterval: any;

	countTimeBoot: number = 4;
	countDownBootInterval: any;

	showBootText: boolean = false;

	constructor(private router: Router) {}

	ngOnInit(): void {
		this.desktopStarter();
	}

	@HostListener('document:keydown.enter')
	@HostListener('document:touchend', ['$event'])
	@HostListener('document:click', ['$event'])
	spaceKeyHit(): void {
		this.countTimeDesktop = 0;
		this.showBootText = true;
		this.bootStarter();
		clearInterval(this.countDownDesktopInterval);
	}

	desktopStarter(): void {
		this.countDownDesktopInterval = setInterval(() => {
			this.countTimeDesktop -= 1;

			if (this.countTimeDesktop === 0) {
				this.showBootText = true;
				this.bootStarter();
				clearInterval(this.countDownDesktopInterval);
			}
		}, 1000);
	}

	bootStarter(): void {
		this.countDownBootInterval = setInterval(() => {
			this.countTimeBoot -= 1;

			if (this.countTimeBoot === 0) {
				clearInterval(this.countDownBootInterval);
				this.router.navigate(['/desktop']);
			}
		}, 1000);
	}
}
