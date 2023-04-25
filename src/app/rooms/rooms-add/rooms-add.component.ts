import { Component } from '@angular/core';
import { RoomList } from '../rooms';
import { RoomsService } from '../services/rooms.service';

@Component({
  selector: 'hinv-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrls: ['./rooms-add.component.scss']
})
export class RoomsAddComponent {

  constructor(private roomService: RoomsService){

  }

  room: RoomList={
    roomType:"",
    amenities:"",
    checkInTime:new Date(),
    checkOutTime:new Date(),
    photos:"",
    price: 0,
    rating: 0,
  }

  success: string = "Fill data and add room";

  AddRoom(){
    this.roomService.addRoom(this.room).subscribe(data => (this.success = "Added room successfully!")
    );
  }

}
