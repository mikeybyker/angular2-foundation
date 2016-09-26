import { Component, OnInit }               from '@angular/core';
import { DataService }                     from './data/data.service';
import { Artist }                          from './data/artist';

@Component({
    selector: 'foundation-tabs',
    template: `
        <div class="row">
            <div class="small-12columns">
                <h4>Tabs</h4>
            </div>
        </div>

        <div class="row">
            <div class="small-12 columns">
                <h4 class="subheader">Horizontal Tabs <small>[First 2 static data, the rest dynamic]</small></h4>
                <tabset [vertical]="false">
                    <tab title="The Cure">
                        The Cure are a rock band which formed in 1976 in Crawley, England, United Kingdom. The band originally consisted of Robert Smith (vocals, guitar), Porl Thompson (guitar), Michael Dempsey (bass) and Lol Tolhurst (drums), with the band's lineup overgoing several changes throughout the years and Smith remaining as the only constant member throughout the band's history. The band currently consists of Smith (vocals, guitar), Simon Gallup (bass), Roger O'Donnell (keyboards), Jason Cooper (drums) and Reeves Gabrels (guitar)
                    </tab>
                    <tab title="Neutral Milk Hotel">
                        Neutral Milk Hotel is an American indie rock band formed by singer, guitarist, and songwriter Jeff Mangum in the early 1990s. On the band's two full-length albums, Mangum played with a number of other musicians, notably Jeremy Barnes (drums), Scott Spillane (horns), Julian Koster (musical saw/banjo/accordion/bass guitar) and producer-instrumentalist Robert Schneider
                    </tab>
                    <!-- dynamic tabs -->
                    <tab *ngFor="let artist of artists" [title]="artist.name">
                        {{ artist.bio }}
                    </tab>
                </tabset>
            </div>
        </div>

        <div class="row">
            <div class="small-12 columns">
                <h4 class="subheader">Vertical Tabs <small>[static data]</small></h4>
                <tabset [vertical]="true">
                    <tab title="The Cure">
                        The Cure are a rock band which formed in 1976 in Crawley, England, United Kingdom. The band originally consisted of Robert Smith (vocals, guitar), Porl Thompson (guitar), Michael Dempsey (bass) and Lol Tolhurst (drums), with the band's lineup overgoing several changes throughout the years and Smith remaining as the only constant member throughout the band's history. The band currently consists of Smith (vocals, guitar), Simon Gallup (bass), Roger O'Donnell (keyboards), Jason Cooper (drums) and Reeves Gabrels (guitar)
                    </tab>
                    <tab title="Neutral Milk Hotel">
                        Neutral Milk Hotel is an American indie rock band formed by singer, guitarist, and songwriter Jeff Mangum in the early 1990s. On the band's two full-length albums, Mangum played with a number of other musicians, notably Jeremy Barnes (drums), Scott Spillane (horns), Julian Koster (musical saw/banjo/accordion/bass guitar) and producer-instrumentalist Robert Schneider
                    </tab>
                </tabset>

            </div>
        </div>
    `
})

export class ExampleTabs implements OnInit {
    artists: Artist[];

    constructor(private _dataService: DataService) {

    }

    ngOnInit() {
        this.getArtists();
    }

    getArtists() {
        this._dataService.getArtists()
            .then(artists => {
                this.artists = artists.splice(2); // artists from 3rd item on (hard coded first 2)
            });
    }
}
