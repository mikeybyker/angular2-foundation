import {Component}               from '@angular/core';

@Component({
    selector: 'foundation-breadcrumbs',
    template: `
        <div class="row">
            <div class="small-12columns">
                <h4>Breadcrumbs</h4>
            </div>
        </div>
        <div class="row">
            <div class="small-12 columns">
                <breadcrumbs [pages]="pages"></breadcrumbs>
            </div>
        </div>
        <div class="row">
            <div class="medium-12 large-4 columns">
                Pass an object containing the breadcrumb pages to the component, with the following properties:
                <ul>
                    <li>title : The test to display</li>
                    <li>url : the url to navigate to</li>
                    <li>disabled : if this breadcrumb is disabled (optional)</li>
                </ul>
            </div>
            <div class="medium-12 large-8 columns">
                eg. In template:<br>
                <div class="callout">
                    <code>
                            &lt;breadcrumbs [pages]=&quot;pages&quot;&gt;&lt;/breadcrumbs&gt;
                    </code>
                </div>
                In component:<br>
                <div class="callout">
                    <pre>
pages: Array&lt;any&gt; = [
  &#123; title: &#039;The Cure&#039;, url: &#039;/a&#039; &#125;,
  &#123; title: &#039;Albums&#039;, url: &#039;/b&#039; &#125;,
  &#123; title: &#039;The Head On The Door&#039;, url: &#039;/c&#039;, disabled: true &#125;,
  &#123; title: &#039;Tracks&#039;, url: &#039;/d&#039; &#125;
  &#123; title: &#039;Sinking&#039;, url: &#039;/e&#039; &#125;
];
                    </pre>
                </div>
            </div>
        </div>
    `
})

export class ExampleBreadcrumbs {

    pages: Array<any> = [
        { title: 'The Cure', url: '/a' },
        { title: 'Albums', url: '/b' },
        { title: 'The Head On The Door', url: '/c', disabled: true },
        { title: 'Tracks', url: '/d' },
        { title: 'Sinking', url: '/e' }
    ];
}