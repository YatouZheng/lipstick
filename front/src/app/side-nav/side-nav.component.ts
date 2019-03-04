import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IApplyFilter } from '../IBoardList';
import { IFilter, FilterType } from "../IBoardList";




@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  @Output() notify:EventEmitter<IApplyFilter> = new EventEmitter<IApplyFilter>();
  filterList:IFilter[]=[
    {
      filterName:'Manufacturer',
      filterType:FilterType.Manufacturer,
      filterValues:['RRD', 'JP Australia', 'Starboard']
    },
    {
      filterName:'Board Types',
      filterType:FilterType.BoardType,
      filterValues:['Wave', 'Freestyle', 'Slalom']
    },
    {
      filterName:'All',
      filterType:FilterType.None,
      filterValues:['Clear Filter']
    }    
  ]

  constructor() { }

  ngOnInit() {
  }

  closeNav(){
    document.getElementById('mySidenav').style.width = "0px";
  }

  showNav(){
    document.getElementById('mySidenav').style.width = "250px";
  }
  filterClicked(filter: IFilter, filterValue:string){
    this.notify.emit(
      {
        filterType:filter.filterType,
        filterValue:filterValue
      }
    );
  }

}