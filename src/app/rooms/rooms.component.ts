import { AfterViewInit, Component, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { RoomList, Rooms } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';
import { Subscription, map } from 'rxjs';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit, AfterViewInit {
  hotelName = 'Punjab Dhaba';
  numberOfRooms = 10;
  hideRooms = false;
  title: string = "Room List";

  selectedRoom!: RoomList;

  room: Rooms = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };


  roomList: RoomList[] = [];

  @ViewChild(HeaderComponent, {static:true}) headerComponent!: HeaderComponent;

  @ViewChildren(RoomsComponent) roomChildrenComponent !: QueryList<RoomsComponent>
  constructor( private roomsService: RoomsService) {
    // this.roomsService.getRooms$.subscribe(rooms =>{
    //   this.roomList = rooms
    // })
  }

  subscription !: Subscription
  rooms$ = this.roomsService.getRooms$;
  roomsCount$ = this.roomsService.getRooms$.pipe(
    map((rooms) => rooms.length)
  )

  ngOnInit(): void {

    console.log(this.headerComponent);
    this.getPhotos();
    
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = "Rooms List";
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  ngAfterViewInit(): void {
    this.headerComponent.title="Rooms Views";
    // this.headerChildrenComponent.last.title = "Last Title";
    console.log(this.roomChildrenComponent)
  }

  addRoom() {
    const room: RoomList = {
      // roomNumber: "4",
      amenities: 'Bathroom, Kitechen, Pool',
      price: 5000,
      photos:
        'https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg',
      checkInTime: new Date('04/24/2023'),
      checkOutTime: new Date('04/29/2023'),
      rating: 4.678,
      roomType: 'Private Suite',
    };
    // this.roomList = [...this.roomList, room];
    this.roomsService.addRoom(room).subscribe((data)=>{
      this.roomList = data;
    })
  }
  editRoom(){
    const room: RoomList = {
      roomNumber: "3",
      amenities: 'Bathroom, Kitechen, Pool',
      price: 5000,
      photos:
        'https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg',
      checkInTime: new Date('04/24/2023'),
      checkOutTime: new Date('04/29/2023'),
      rating: 4.678,
      roomType: 'Private Suite',
    }; 
  
    this.roomsService.editRoom(room).subscribe((data)=>{
      console.log(data);
      this.roomList = data;
    })
  }
  
  deleteRoom(){
    this.roomsService.deleteRoom("3").subscribe((data)=>{
      this.roomList = data;
    })
  }

  getPhotos(){
    this.roomsService.getPhotos().subscribe((data)=>{
      console.log(data);
    })
  }

  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
}





