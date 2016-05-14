import {Component, OnInit}                   from '@angular/core';
import {AccordionComponent, PanelComponent}  from './foundation/accordion.component';
import {DataService}                         from './data/data.service';
import {Artist}                              from './data/artist';

@Component({
    selector: 'accordion-tabs',
    directives: [AccordionComponent, PanelComponent],
    providers: [DataService],
    template: `
        <div class="row">
            <div class="small-12columns">
                <h4>Accordion</h4>
            </div>
        </div>
        <div class="row">
            <div class="small-12 columns">

                <h4 class="subheader">Static Data</h4>

                <accordion [multiExpand]="false" [allClosed]="false">
                    <panel title="The Cure" [initial]="true">
                        <div class="my-component-content">The Cure are a rock band which formed in 1976 in Crawley, England, United Kingdom. The band originally consisted of Robert Smith (vocals, guitar), Porl Thompson (guitar), Michael Dempsey (bass) and Lol Tolhurst (drums), with the band's lineup overgoing several changes throughout the years and Smith remaining as the only constant member throughout the band's history. The band currently consists of Smith (vocals, guitar), Simon Gallup (bass), Roger O'Donnell (keyboards), Jason Cooper (drums) and Reeves Gabrels (guitar)</div>
                    </panel>
                    <panel title="Neutral Milk Hotel">
                        Neutral Milk Hotel is an American indie rock band formed by singer, guitarist, and songwriter Jeff Mangum in the early 1990s. On the band's two full-length albums, Mangum played with a number of other musicians, notably Jeremy Barnes (drums), Scott Spillane (horns), Julian Koster (musical saw/banjo/accordion/bass guitar) and producer-instrumentalist Robert Schneider
                    </panel>
                </accordion>
            </div>
        </div>

        <div class="row">
            <div class="small-12 columns">

                <h4 class="subheader">Dynamic Data - Allow Multi Expand</h4>

                <accordion [multiExpand]="true" [allClosed]="false">
                    <panel *ngFor="let artist of artists" [title]="artist.name" [initial]="artist.active">
                        {{ artist.bio }}
                    </panel>
                </accordion>
            </div>
        </div>
    `
})

export class ExampleAccordion implements OnInit {
    artists: Artist[];

    constructor(private _dataService: DataService) {

    }

    ngOnInit() {
        this.getArtists();
    }

    getArtists() {
        this._dataService.getArtists()
            .then(artists => {
                this.artists = artists;
                artists.forEach((artist, index, arr) => {
                    this.artists[index] = Object.assign({}, artist, { active: index%2 === 0 });
                });
            });
    }
}