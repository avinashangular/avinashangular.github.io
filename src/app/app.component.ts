import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Navigation, NavigationStart, Router, RouterEvent } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  sideNavVisible:boolean = true;
 
   constructor(private observer: BreakpointObserver, private router: Router) {
    // router.events.subscribe((event) => {
    //   if(event instanceof NavigationStart) {
    //     console.log(event);
    //     if(event.url.includes('/mcq')) {         
    //       this.sidenav.opened = false; 
    //       this.sideNavVisible = false;         
    //     } else {
    //       this.sidenav.opened = true;
    //       this.sideNavVisible = true
    //     }
    //   }      
    // });
   }
 
   ngAfterViewInit() {
     this.observer.observe(['(max-width: 800px)']).subscribe((res: { matches: any; }) => {
       if (res.matches) {
         this.sidenav.mode = 'over';
         this.sidenav.close();
       } else {
         this.sidenav.mode = 'side';
         this.sidenav.open();
       }
     });
   }
}
