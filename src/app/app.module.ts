import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { UnlockFeatureViewComponent } from '@codesign/core/views';
import { SharedModule } from '@codesign/shared/shared.module';
import { AppComponent } from './app.component';
import { AppInitializerProvider } from './app.initializer';
import { routes } from './app.routes';
import {
    ErrorNotificationComponent,
    NotificationsContainerComponent,
} from './core/components';
import { ErrorHandlerProvider } from './core/handlers';

@NgModule({
    declarations: [
        AppComponent,
        UnlockFeatureViewComponent,
        NotificationsContainerComponent,
        ErrorNotificationComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        SharedModule,
        RouterModule.forRoot(routes),
    ],
    bootstrap: [AppComponent],
    providers: [AppInitializerProvider, ErrorHandlerProvider],
})
export class AppModule {}
