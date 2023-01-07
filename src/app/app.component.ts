import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Navigation, NavigationStart, Router, RouterEvent } from '@angular/router';
import { TocService } from './core/toc.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  sideNavVisible:boolean = true;

  isLoggedIn:boolean = false;
 
   constructor(private observer: BreakpointObserver, private router: Router, private tocService: TocService) {
    // router.events.subscribe((event) => {
    //   if(event instanceof NavigationStart) {
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

   ngOnInit(): void {
     this.tocService.LoggedIn.subscribe(value=> this.isLoggedIn = value)
   }

   logout(){
    this.tocService.LoggedIn.next(false);
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
