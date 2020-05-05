import { Observable, interval, Subscription } from 'rxjs';
import { AppareilService } from './service/appareil.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { resolve } from 'url';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

secondes: number;
counterSubscription: Subscription;
 constructor( ) {

 }
  ngOnDestroy(): void {
    this.counterSubscription.unsubscribe();
  }

 // tslint:disable-next-line:use-lifecycle-interface
 ngOnInit() {
   const counter = interval(1000);
   this.counterSubscription = counter.subscribe(
    (value) => {
      this.secondes = value;
    },
    (error) => {
      console.log('Uh-oh, an error occured! :' + error);
    },
    () => {
      console.log('Observable complete!');
    } );
 }
}
