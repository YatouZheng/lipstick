import { Component, Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders} from '@angular/common/http';
import { IBoardSizeItem, IBoardType, IBoardListItem, IManufacturer, IApplyFilter, FilterType } from '../IBoardList';


@Component({
  selector: 'app-boardlist',
  templateUrl: './boardlist.component.html',
  styleUrls: ['./boardlist.component.css']
})
@Injectable()
export class BoardlistComponent {
  manufacturerList: any;
  currentList: any;

  @Output() notify: EventEmitter< IBoardListItem > = new EventEmitter<IBoardListItem>();
  boardClicked(board:IBoardListItem){
    this.notify.emit(board);
  }

  constructor(private http: HttpClient) {
    console.log(`BoardListComponent constructor`);
    this.http.get('http://localhost:3000/boards').subscribe(  //定阅从get方法返回的可观察者对象（只要get一有数据就传给subscribe）
      (data) => {
        this.currentList = this.manufacturerList = data
      },
      err => {
        console.log(`error: ${err}`);
      },
      () => {
        console.log(`success`);
      }
    );
  }
  applyFilter(filter: IApplyFilter){
    this.currentList = new Array();
    if (filter.filterType == FilterType.Manufacturer){
      for(let manuf of this.manufacturerList){
        if(manuf.manufacturer == filter.filterValue){
          this.currentList.push(manuf);
          console.log(this.currentList)
        }
      }
    }
    //code for board type filter
    if (filter.filterType == FilterType.BoardType) {
      for (let manuf of this.manufacturerList) {
          let currentManf : IManufacturer =  { 
              manufacturer : manuf.manufacturer, 
              manufacturer_logo : manuf.manufacturer_logo };
          currentManf.boards = new Array();
          let boardFound = false;
          for (let board of manuf.boards) {
              //if (board.board_types)
              for (let boardtype of board.board_types) {
                  if (boardtype.board_type == filter.filterValue) {
                      boardFound = true;
                      currentManf.boards.push(board);
                  }
              }
          }
          if (boardFound) {
              this.currentList.push(currentManf);
          }
      }
  }
    if (filter.filterType == FilterType.None){
      this.currentList = this.manufacturerList;
    }
  }
}
