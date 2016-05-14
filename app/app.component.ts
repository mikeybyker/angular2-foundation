import { Component }             from '@angular/core';
import { HomeComponent }         from './home.component';
import { ExampleBreadcrumbs }    from './example.breadcrumbs';
import { ExampleCallout }        from './example.callout';
import { ExampleTabs }           from './example.tabs';
import { ExampleSwitch }         from './example.switch';
import { ExampleAccordion }      from './example.accordion';
import { RouteConfig,
         ROUTER_DIRECTIVES,
         ROUTER_PROVIDERS }      from '@angular/router-deprecated';

@Component({
    selector: 'my-app',
    styles: [`.router-link-active { background-color: #2199e8; }`], // bit of a cheat : would rather set .active on the li based on if the router is active
    template: `
        <div class="top-bar">
            <div class="top-bar-left">
                <ul class="menu">
                    <li class="menu-text">{{title}}</li>
                    <li>
                        <a [routerLink]="['Home']">Home</a>
                    </li>
                    <li><a [routerLink]="['Accordion']">Accordion</a></li>
                    <li><a [routerLink]="['Tabs']">Tabs</a></li>
                    <li><a [routerLink]="['Breadcrumbs']">Breadcrumbs</a></li>
                    <li><a [routerLink]="['Callout']">Callout</a></li>
                    <li><a [routerLink]="['Switches']">Switches</a></li>
                </ul>
            </div>
        </div>

        <div class="row">
            <div class="small-12 columns">
                <router-outlet></router-outlet>
            </div>
        </div>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS
    ]
})
@RouteConfig([
    {
        path: '/accordion',
        name: 'Accordion',
        component: ExampleAccordion
    },
    {
        path: '/breadcrumbs',
        name: 'Breadcrumbs',
        component: ExampleBreadcrumbs
    },
    {
        path: '/callout',
        name: 'Callout',
        component: ExampleCallout
    },
    {
        path: '/switches',
        name: 'Switches',
        component: ExampleSwitch
    },
    {
        path: '/tabs',
        name: 'Tabs',
        component: ExampleTabs
    },
    {
        path: '/home',
        name: 'Home',
        component: HomeComponent,
        useAsDefault: true
    }

])

export class AppComponent {
    title = 'Angular2 Foundation Components';
}