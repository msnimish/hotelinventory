import { AfterContentInit, Component, ContentChild } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';
import { RoomsComponent } from '../rooms/rooms.component';

@Component({
  selector: 'hinv-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements AfterContentInit {
  @ContentChild(EmployeeComponent) employee !: EmployeeComponent;
  @ContentChild(RoomsComponent) rooms !: RoomsComponent;

  constructor(){}

  ngAfterContentInit(): void {
    console.log(this.employee);
    this.employee.empName = "Rick";
    // this.rooms.roomList[0].price = 60000
  }
  
}
