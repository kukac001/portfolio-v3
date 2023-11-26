import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesktopStarterComponent } from './components/desktop-starter/desktop-starter.component';

const routes: Routes = [{ path: '', component: DesktopStarterComponent }];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
