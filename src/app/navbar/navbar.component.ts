import { Component, OnInit } from '@angular/core';
import { cilHamburgerMenu,cilApplications,cilBell,cilMediaPlay,cilMagnifyingGlass,cilMicrophone,cilHappy } from '@coreui/icons';
import { IconModule, IconSetModule, IconSetService } from '@coreui/icons-angular';
import { HamburgerService } from '../hamburger.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [IconSetService]
})
export class NavbarComponent implements OnInit {

  searchClicked : boolean = false;
  hamburgerClicked : boolean = false;
  subscription: Subscription = Object();

  constructor(public iconSet: IconSetService,private hamburgerService: HamburgerService){ 
    iconSet.icons = { cilHamburgerMenu, cilApplications,cilBell,cilMediaPlay,cilMagnifyingGlass,cilMicrophone,cilHappy };
  }

  ngOnInit(): void {
    this.subscription = this.hamburgerService.currentFlag.subscribe(flag => 
      this.hamburgerClicked = flag)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  hamburgerClickedEvent(){
    this.hamburgerService.changeFlag(!this.hamburgerClicked);
  }



}
