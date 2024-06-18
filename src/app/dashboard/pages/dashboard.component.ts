import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SideMenuComponent } from '@shared/side-menu/side-menu.component';

@Component({
    standalone: true,
    imports: [RouterModule, SideMenuComponent],
    styleUrl: './dashboard.component.scss',
    templateUrl: './dashboard.component.html',
})
export default class DashboardComponent { }
