import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DesktopStarterComponent } from './components/desktop-starter/desktop-starter.component';
import { DesktopComponent } from './components/desktop/desktop/desktop.component';

@NgModule({
	declarations: [AppComponent, DesktopComponent],
	imports: [BrowserModule, AppRoutingModule, DesktopStarterComponent],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
