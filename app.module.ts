import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessageComponent } from './message/message.component';
import { MessageService } from './message.service';
import { DashboardComponent } from './dashboard/dashboard.component';

//make httpClient available everywhere
import {HttpClientModule} from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { TopbarComponent } from './topbar/topbar.component';
import { ProfileComponent } from './profile/profile.component';
import { ChangeUsernameModalComponent } from './change-username-modal/change-username-modal.component';

import { StorageServiceModule, LOCAL_STORAGE} from 'angular-webstorage-service';
import { LocalStorageService } from './local-storage.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessageComponent,
    DashboardComponent,
    HeroSearchComponent,
    LoginComponent,
    RegisterComponent,
    TopbarComponent,
    ProfileComponent,
    ChangeUsernameModalComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StorageServiceModule,
    HttpClientModule,
  // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.
HttpClientInMemoryWebApiModule.forRoot(
  InMemoryDataService, { dataEncapsulation: false }
),  
  ],
  providers: [MessageService,
           LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
