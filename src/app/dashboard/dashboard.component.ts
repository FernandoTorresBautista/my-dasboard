import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

// import { SidemenuComponent } from '../shared/sidemenu/sidemenu.component';
import { SidemenuComponent } from '@shared/sidemenu/sidemenu.component'; // using a builded path on tsconfig.json

@Component({
  standalone: true,
  imports: [RouterModule, SidemenuComponent],
  templateUrl: './dashboard.component.html',
  styles: ``
})
export default class DashboardComponent {

}
