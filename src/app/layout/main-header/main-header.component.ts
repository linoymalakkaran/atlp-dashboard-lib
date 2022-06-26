import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IconsService } from 'src/app/services/icons.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {
  isCollapsed = true;
  @Output() toggleSidebar = new EventEmitter<any>();

  @Input() activeUser: any = null;
  constructor(private _icon: IconsService) {
    this._icon.registerIcons(this.icons);
  }
  ngOnInit(): void {}

  opensidebar() {
    this.toggleSidebar.emit(this.isCollapsed);
  }

  private get icons(): Array<string> {
    return [
      'pdf-icon',
      'jpg-icon',
      'pdf-file-icon',
      'png-icon',
      'file-remove',
      'folder',
      'view-files',
      'icon-calender',
      'icon-profile',
      'management-icon',
      'folder-1439',
      'skill-8805',
      'burger-menu',
      'icon-dashboard'
    ];
  }
}
