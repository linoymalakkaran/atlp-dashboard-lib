import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MainFooterComponent } from './dashboard/components/layout/main-footer/main-footer.component';
import { MainHeaderComponent } from './dashboard/components/layout/main-header/main-header.component';
import { MainLayoutComponent } from './dashboard/components/layout/main-layout/main-layout.component';
import { IconsService } from './services/icons.service';
import { NotificationComponent } from './widgets/notification/notification.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridsterModule } from 'angular-gridster2';


const appRoutes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
    ],
  },
];

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    MainFooterComponent,
    MainHeaderComponent,
    NotificationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    MatIconModule,
    MatIconModule,
    MatSelectModule,
    MatIconModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatListModule,
    GridsterModule,
    MatMenuModule,
    MatExpansionModule,
  ],

  providers: [IconsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
