import {
  Component,
  OnInit
} from '@angular/core';
import {
  DataService,
  Artist
} from '../data/data.service';

@Component({
  selector: 'foundation-breadcrumbs',
  template: `
    <div class="row">
      <div class="small-12 columns">
        <h4>Callouts</h4>
      </div>
    </div>
    <div class="row">
      <div class="medium-12 large-6 columns">
        Inputs:
        <ul>
          <li>header : The callout header</li>
          <li>modifierClass : any of the Foundation callout modifier classes:
            <ul>
              <li>Colours: "primary", "secondary", "success", "warning", "alert"</li>
              <li>Size: "small", "large"</li>
            </ul>
          </li>
          <li>closable : true/false - if the callout has a close button</li>
        </ul>
      </div>
      <div class="medium-12 large-6 columns">
        <div class="callout">
          &lt;callout header=&quot;Your header&quot; modifierClass=&quot;alert&quot; [closable]=&quot;true&quot;&gt;<br>
          Your text<br>
          &lt;/callout&gt;
        </div>
      </div>
    </div>
    <div class="row">
      <div class="small-12 columns">
        <h4 class="subheader">Static</h4>
        <callout header="The Cure" modifierClass="primary large" [closable]="true">
          The Cure are a rock band which formed in 1976 in Crawley, England, United Kingdom. The band originally consisted of Robert Smith (vocals, guitar), Porl Thompson (guitar), Michael Dempsey (bass) and Lol Tolhurst (drums), with the band's lineup overgoing several changes throughout the years and Smith remaining as the only constant member throughout the band's history.
        </callout>

        <callout header="Neutral Milk Hotel" modifierClass="secondary small">
          Neutral Milk Hotel is an American indie rock band formed by singer, guitarist, and songwriter Jeff Mangum in the early 1990s. On the band's two full-length albums, Mangum played with a number of other musicians, notably Jeremy Barnes (drums), Scott Spillane (horns), Julian Koster (musical saw/banjo/accordion/bass guitar) and producer-instrumentalist Robert Schneider.
        </callout>

        <callout header="Modest Mouse" modifierClass="success">
          Modest Mouse is an alternative rock band which formed in 1993 in Issaquah, Washington, United States. The band's original lineup consisted of guitarist Isaac Brock, drummer Jeremiah Green and bassist Eric Judy.
        </callout>

        <callout header="Sparklehorse" modifierClass="warning">
          Sparklehorse was an American alternative rock band formed in 1995 and led by Mark Linkous (September 9, 1962 - March 6, 2010), a Richmond, Virginia native and last of a long line of southern coalminers. Linkous recorded much of Sparklehorse's material in his home studio, and his Southern Gothic vision guided Sparklehorse.
        </callout>

        <callout header="The Sugarcubes" modifierClass="alert">
          The Sugarcubes (Sykurmolarnir in Icelandic) (1986-1992) were an alternative rock group from Reykjavík, Iceland. For most of their career, the band consisted of Björk Guðmundsdóttir (vocals, keyboards), Einar Örn Benediktsson (vocals, trumpet), Þór Eldon (guitar), Bragi Ólafsson (bass), Magga Örnólfsdóttir (keyboards) and Sigtryggur Baldursson (drums).
        </callout>
      </div>
    </div>
    <div class="row">
      <div class="small-12 columns">
        <h4 class="subheader">Dynamic <small>[Random attributes]</small></h4>
        <callout *ngFor="let artist of artists" header="{{artist.name}}" modifierClass="{{artist.modifierClass}}" [closable]="artist.closable">
          {{ artist.bio }}
        </callout>
      </div>
    </div>
  `
})

export class ExampleCallout implements OnInit {

  artists: Array<any> = [];

  colors: Array<string> = ["primary", "secondary", "success", "warning", "alert"];
  sizes: Array<string> = ["small", "large", ""];

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.getArtists();
  }

  // Random element from array : should be in utils/service
  sample(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  // Random boolean : should be in utils/service
  randomBoolean() {
    return Math.random() < .5;
  }

  // Random params
  getModifier() {
    let c = this.sample(this.colors),
      s = this.sample(this.sizes),
      closable = this.randomBoolean();
    return {
      modifierClass: c + ' ' + s,
      closable: closable
    };
  }

  getArtists() {
    this._dataService.getArtists()
      .then(artists => {
        let o = {};
        // Danger! Using Object.assign >> May blow stuff up!
        artists.forEach((artist, index, arr) => {
          o = Object.assign({}, artist, this.getModifier())
          this.artists[index] = o;
        });
      });
  }
}
