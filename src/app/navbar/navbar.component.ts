import { Component, OnInit } from '@angular/core';
import { cilHamburgerMenu,cilApplications,cilBell,cilMediaPlay,cilMagnifyingGlass,cilMicrophone,cilHappy } from '@coreui/icons';
import { IconModule, IconSetModule, IconSetService } from '@coreui/icons-angular';
import { HamburgerService } from '../hamburger.service';
import { Subscription } from 'rxjs';
//import whats necessary for the fetch function
import { HttpClient } from '@angular/common/http';



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

  async searchClickedEvent(){
    var data : void | Blob;
    //make a random number from 100 to 1000
    var randomNumber1 = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
    var randomNumber2 = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
    data = await fetch('https://placekitten.com/'+randomNumber1+'/'+randomNumber2).then(response => 
      response.blob()
    )
    .then(blob => {
      const urlCreator = window.URL || window.webkitURL;
      var img = document.createElement('img');
      img.src = urlCreator.createObjectURL(blob);
      document.getElementById('pfp')?.setAttribute('src',img.src);
    });
    
    
  }



}
