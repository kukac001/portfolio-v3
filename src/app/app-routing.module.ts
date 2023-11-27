import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesktopStarterComponent } from './components/desktop-starter/desktop-starter.component';
import { DesktopComponent } from './components/desktop/desktop/desktop.component';

const routes: Routes = [
	{ path: '', component: DesktopStarterComponent },
	{ path: 'desktop', component: DesktopComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
