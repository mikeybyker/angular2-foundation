import {
  Component
} from '@angular/core';
import {
  DataService,
  Artist
} from '../data/data.service';

@Component({
  selector: 'foundation-tabs-alt',
  template: `

    <div class="row">
      <div class="small-12 columns">
        <h4>Tabs - An alternative approach</h4>
        <p>For static tabs, a template outlet is another way to go...</p>
      </div>
    </div>

    <div class="row">
      <div class="small-12 columns">
        <h4 class="subheader">Horizontal Tabs</h4>
        <tabset-alt [vertical]="false">
          <tab-alt name="The Cure" [tabRef]="cure"></tab-alt>
          <tab-alt name="Neutral Milk Hotel" [tabRef]="neutral" active="true"></tab-alt>
        </tabset-alt>
      </div>
    </div>

    <hr>

    <div class="row">
      <div class="small-12 columns">
        <h4 class="subheader">Vertical Tabs</h4>        
          <tabset-alt [vertical]="true">
            <tab-alt name="The Cure" [tabRef]="cure"></tab-alt>
            <tab-alt name="Neutral Milk Hotel" [tabRef]="neutral"></tab-alt>
          </tabset-alt>
      </div>
    </div>



    <!-- Each tab template -->
    <ng-template #cure>
      The Cure are a rock band which formed in 1976 in Crawley, England, United Kingdom. The band originally consisted of Robert Smith (vocals, guitar), Porl Thompson (guitar), Michael Dempsey (bass) and Lol Tolhurst (drums), with the band's lineup overgoing several changes throughout the years and Smith remaining as the only constant member throughout the band's history. The band currently consists of Smith (vocals, guitar), Simon Gallup (bass), Roger O'Donnell (keyboards), Jason Cooper (drums) and Reeves Gabrels (guitar)
    </ng-template>
    
    <ng-template #neutral>
      Neutral Milk Hotel is an American indie rock band formed by singer, guitarist, and songwriter Jeff Mangum in the early 1990s. On the band's two full-length albums, Mangum played with a number of other musicians, notably Jeremy Barnes (drums), Scott Spillane (horns), Julian Koster (musical saw/banjo/accordion/bass guitar) and producer-instrumentalist Robert Schneider
    </ng-template>


  `
})

export class ExampleTabsAlt {

  constructor() { }

}
