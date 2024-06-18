import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { User } from '@interfaces/req.response';
import { UsersService } from '@services/users.service';
import { switchMap } from 'rxjs';

@Component({
    selector: 'app-user',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './user.component.html',
    styles: ``,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UserComponent {

  private route = inject( ActivatedRoute );
  private usersService = inject( UsersService );

  //public user = signal<User | undefined>(undefined);

  public user = toSignal(
    this.route.params.pipe(
      switchMap( ({ id }) =>  this.usersService.getUserById( id ))
    )
  )

  constructor(){}
}
