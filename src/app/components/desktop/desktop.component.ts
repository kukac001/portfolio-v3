import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
	selector: 'app-desktop',
	templateUrl: './desktop.component.html',
	styleUrls: ['./desktop.component.scss'],
	standalone: true,
	imports: [HeaderComponent],
})
export class DesktopComponent {}
