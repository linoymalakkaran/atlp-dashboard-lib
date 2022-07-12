import { Component, ViewChild, ViewContainerRef, Input } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';

@Component({
  selector: 'atlp-dashboard-widget',
  templateUrl: './atlp-dashboard-widget.component.html',
  styleUrls: ['./atlp-dashboard-widget.component.scss']
})
export class AtlpDashboardWidgetComponent {
  widgetComponent: any = null;
  @Input() widgetOptions: any = null;
  @Input() widgetSelectFn?: (widgetName: string) => string;
  @ViewChild('vc', { read: ViewContainerRef, static: true })
  viewContainer: ViewContainerRef | undefined;

  constructor() // @Inject(ComponentFactoryResolver) private cfr // @Inject(Injector) private injector,
  {}

  widgetSelect(widgetName: string) {
    this.widgetComponent = this.widgetSelectFn(widgetName);
  }

  async loadWidget(): Promise<void> {
    debugger;
    const m = await loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:5555/remoteEntry.js',
      //remoteEntry: 'http://localhost:5201/remoteEntry.js',
      exposedModule: './Component'
    });
    const ref = this.viewContainer.createComponent(m.FlightsSearchStandalone);
    const compInstance = ref.instance;
  }
}
