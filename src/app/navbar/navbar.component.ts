import { Component, OnInit } from '@angular/core';
import { cilHamburgerMenu,cilApplications,cilBell,cilMediaPlay,cilMagnifyingGlass,cilMicrophone,cilHappy } from '@coreui/icons';
import { IconModule, IconSetModule, IconSetService } from '@coreui/icons-angular';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [IconSetService]
})
export class NavbarComponent implements OnInit {

  constructor(public iconSet: IconSetService) { 
    iconSet.icons = { cilHamburgerMenu, cilApplications,cilBell,cilMediaPlay,cilMagnifyingGlass,cilMicrophone,cilHappy };
  }

  ngOnInit(): void {
  }

}
