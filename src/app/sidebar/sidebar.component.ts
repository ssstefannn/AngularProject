import { Component, OnInit } from '@angular/core';
import { IconModule, IconSetModule, IconSetService } from '@coreui/icons-angular';
import { cilHome,cilCompass,cilMusicNote,cilNewspaper,cilLibrary,cilHistory,cilMediaPlay,cilAvTimer,cilThumbUp,cilArrowBottom} from '@coreui/icons';
import { HamburgerService } from '../hamburger.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [IconSetService]
})
export class SidebarComponent implements OnInit {


  hamburgerClicked:boolean = false;
  subscription: Subscription = Object();

  constructor(public iconSet: IconSetService,private hamburgerService: HamburgerService) {
    iconSet.icons = { cilHome, cilCompass, cilMusicNote, cilNewspaper, cilLibrary, cilHistory, cilMediaPlay, cilAvTimer, cilThumbUp, cilArrowBottom };
  }

  ngOnInit(): void {
    this.subscription = this.hamburgerService.currentFlag.subscribe(flag => 
      this.hamburgerClicked = flag)
  }

}
