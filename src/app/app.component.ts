import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { SideNavComponent } from './side-nav/side-nav.component';
import { RightscreenComponent } from './rightscreen/rightscreen.component';
import { IMediatorImpl, Mediator, StateType } from './state.mediator';
import { IBoardListItem, IApplyFilter } from './IBoardList';
import { BoardlistComponent } from './boardlist/boardlist.component';






@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements IMediatorImpl, AfterViewInit {

  @ViewChild(SideNavComponent)
  private sideNav: SideNavComponent;

  @ViewChild(RightscreenComponent)
  private rightScreen: RightscreenComponent;

  @ViewChild(BoardlistComponent)
  private boardList:BoardlistComponent;

  title = "Select an option :";
  isSideNavVisible = true;

  mediator: Mediator = new Mediator(this);

  //实现了afterviewinit这个接口的方法

  ngAfterViewInit() {
    this.mediator.moveToState(StateType.MainPanelOnly);
  }
  

  //准备实现调停者接口
  showNavPanel() {
    this.sideNav.showNav();
    document.getElementById('main').style.marginLeft = "250px";
  }

  hideNavPanel() {
    this.sideNav.closeNav();
    document.getElementById('main').style.marginLeft = "0px";
  }

  showDetailPanel() {
    this.rightScreen.openRightWindow();
    document.getElementById('main').style.transform = "translateX(-100%)";
  }

  hideDetailPanel() {
    this.rightScreen.closeRightWindow();
    document.getElementById('main').style.transform = "translateX(0%)";
  }

  changeShowHideSideButton(fromClass: string, toClass: string) {
    if (fromClass.length > 0 && toClass.length > 0) {
      document.getElementById('show-hide-side-button').classList.remove(fromClass);
      document.getElementById('show-hide-side-button').classList.add(toClass);
    }
  }

  showLoginPanel() {
    // this.rightScreen.closeRightWindow();
    document.getElementById('loginPanel').classList.remove('login_sidenav_fade');
    document.getElementById('loginPanel').style.visibility = 'visible';
  }

  hideLoginPanel() {
    document.getElementById('loginPanel').classList.add('login_sidenav_fade');
    setTimeout(()=>{
      document.getElementById('loginPanel').style.visibility = 'hidden'
    }, 1000);
  }


  //负责响应主面板上面detail按钮的方法
  buttonClickedDetail() {
    this.mediator.moveToState(StateType.DetailPanel);
  }
  //显示或隐藏侧边栏按钮的方法
  showHideSideClicked() {
    this.mediator.showHideSideNavClicked();
  }
  //响应从子组件发出来的事件（从rightscreen.component.ts里面的closeClicked方法发出的notify事件）
  onNotifyRightWindow(message: string): void {
    this.mediator.moveToState(
      this.mediator.getCurrentMainPanelState());//获取进入详细信息页面之前的主面板状态（有可能包含侧边栏也有可能不包含）
  }
  onNotifyBoardList(board: IBoardListItem){
    this.rightScreen.board = board;
    console.log(board)
    this.mediator.moveToState(StateType.DetailPanel);
  }
  onNotifyFilter( filter: IApplyFilter){
    this.boardList.applyFilter(filter);
  }

}

