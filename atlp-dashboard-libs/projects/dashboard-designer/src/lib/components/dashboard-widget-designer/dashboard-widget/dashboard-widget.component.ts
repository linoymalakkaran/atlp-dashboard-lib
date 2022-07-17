import {
  Component,
  ViewChild,
  ViewContainerRef,
  Input,
  ChangeDetectorRef
} from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';

@Component({
  selector: 'ngx-dashboard-widget',
  templateUrl: './dashboard-widget.component.html',
  styleUrls: ['./dashboard-widget.component.scss']
})
export class DashboardWidgetComponent {
  widgetComponent: any = null;
  @Input() widgetOptions: any = null;
  @Input() widgetSelectFn?: (widgetName: string) => string;
  @ViewChild('vc', { read: ViewContainerRef, static: false })
  viewContainer: ViewContainerRef | undefined;

  constructor(private ref: ChangeDetectorRef) {}

  widgetSelect(widgetName: string) {
    this.widgetComponent = this.widgetSelectFn(widgetName);
  }

  async loadMfeWidget(widgetOption): Promise<void> {
    debugger;
    const m = await loadRemoteModule({
      type: widgetOption.type,
      remoteEntry: widgetOption.hostUrl,
      exposedModule: widgetOption.exposedModule
    });
    const ref = this.viewContainer.createComponent(
      m[widgetOption.componentName]
    );
    // const compInstance = ref.instance;
    setInterval(() => {
      this.ref.markForCheck();
    }, 1000);
  }
}
