import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';
import { SwitchComponentComponent } from './components/switch-component/switch-component.component';
import { ButtonComponent } from './components/button/button.component';
import { FooterLogoComponent } from './components/footer-logo/footer-logo.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { MyInfoComponent } from './components/welcome-page/my-info/my-info.component';
import { SignUpForFreeComponent } from './components/welcome-page/sign-up-for-free/sign-up-for-free.component';
import { ToDoTaskComponent } from './components/to-do-task/to-do-task.component';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    SwitchComponentComponent,
    ButtonComponent,
    FooterLogoComponent,
    WelcomePageComponent,
    MyInfoComponent,
    SignUpForFreeComponent,
    ToDoTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
