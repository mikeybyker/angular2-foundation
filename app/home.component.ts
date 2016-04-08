import { Component } from 'angular2/core';

@Component({
    selector: 'home',
    template: `
        <div class="row">
            <div class="small-12 columns">
                <h3>Foundation 5 Components in Angular 2</h3>
                <p>
                    A Selection of <a href="http://foundation.zurb.com/">Foundation</a> components made with <a href="https://angular.io">Angular 2</a> (beta 13). The components can be found in the app/foundation folder.
                <p>
                <p>
                    Just playing around with Angular 2 - I only needed the Tabs and Accordion, and just threw a few others in...the most simple ones :-) There will be different (better) ways to go about building these components, and certainly a more consistent approach. Things can/will break with subsequent beta releases.
                </p>
               
                <p>
                    The build/config here is taken directly from the official <a href="https://angular.io/docs/ts/latest/quickstart.html">5 minute quickstart</a>.                    
                </p>
                <p>
                    To get going:
                </p>
                <ul>
                    <li>npm install</li>
                    <li>npm start</li>
                </ul>
            </div>
        </div>        
    `
})

export class HomeComponent {}