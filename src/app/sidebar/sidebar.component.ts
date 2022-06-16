import { Component, OnInit } from '@angular/core';
import { IconModule, IconSetModule, IconSetService } from '@coreui/icons-angular';
import { cilHome,cilCompass,cilMusicNote,cilNewspaper,cilLibrary,cilHistory,cilMediaPlay,cilAvTimer,cilThumbUp,cilArrowBottom} from '@coreui/icons';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [IconSetService]
})
export class SidebarComponent implements OnInit {

  constructor(public iconSet: IconSetService) {
    iconSet.icons = { cilHome, cilCompass, cilMusicNote, cilNewspaper, cilLibrary, cilHistory, cilMediaPlay, cilAvTimer, cilThumbUp, cilArrowBottom };
  }

  ngOnInit(): void {
  }

}
