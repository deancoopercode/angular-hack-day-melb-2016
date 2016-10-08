import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BrowserModule } from '@angular/platform-browser';
import { AppService } from './app.service';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from './app.routes';
import { HttpModule } from '@angular/http';

@NgModule({
    declarations:[AppComponent, HomeComponent, UserComponent],
    bootstrap: [AppComponent],
    imports: [BrowserModule, FormsModule, AppRoutingModule, HttpModule],
    providers: [AppService]
})
export class AppModule {}