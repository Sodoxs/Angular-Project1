import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  title1 = 'Project1';
  title2 = 'My first Angular App!';
  isAuth = false;

  appareilOne = "Machine à laver";
  appareilTwo = "Frigo";
  appareilThree = 'Ordinateur';

  constructor()
  {
    setTimeout(
      () =>
      {
        this.isAuth = true;
      }, 4000
    );
  }

  onAllumer()
  {
    console.log('On allume tout !');
  }
}
