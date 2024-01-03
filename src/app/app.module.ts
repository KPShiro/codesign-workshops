import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { routes } from './app.routes';
import { appInitializerProvider } from './app.initializer';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,

        SharedModule,

        RouterModule.forRoot(routes),
    ],
    bootstrap: [AppComponent],
    providers: [appInitializerProvider],
})
export class AppModule {}
