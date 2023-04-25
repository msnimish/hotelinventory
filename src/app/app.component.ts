import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef, Inject } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { localStorageToken } from "./localstorage.token";
import { InitService } from './init.service';
@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  // template: `<h1>Welcome</h1>`,
  styleUrls: ['./app.component.scss'],
  // styles:[`h1 { color: goldenrod }`]
})
export class AppComponent implements OnInit {
  title = 'hotelinventoryapp';
  
  ngOnInit(): void {
    // this.name.nativeElement.innerText = "Hegde!!!"
    this.localstorage.setItem('name', "Punjab Dhaba");
  }

  @ViewChild("name", { static: true }) name !: ElementRef;

  constructor(@Inject(localStorageToken) private localstorage: Storage,
  private initService: InitService) {
    console.log("Config.json",initService.config);
  }

  // @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;

  // ngAfterViewInit(): void {
  //   // const componentRef = this.vcr.createComponent(RoomsComponent);
  //   // componentRef.instance.numberOfRooms = 50;
  // }
}
