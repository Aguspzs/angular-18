import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsersService } from '@services/users.service';

@Component({
    selector: 'app-users',
    standalone: true,
    imports: [
        CommonModule, RouterModule
    ],
    templateUrl: './users.component.html',
    styles: ``,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UsersComponent {

  public usersService = inject( UsersService )

}
