
// 先划分要实现的模块

export enum StateType {
  MainPanelOnly,
  MainPanelWithSideNav,
  DetailPanel,
  LoginPanel
}

// 再细分模块的类型

export enum PanelType {
  Primary,
  Detail,
  OverlayPanel
}

// 这些模块具备哪些功能

export interface IState {
  getPanelType(): PanelType;
  getStateType(): StateType;
  isSideNavVisible(): boolean;
  getPanelButtonClass(): string;
  isLoginVisible(): boolean;
}


// 怎么实现这些模块的功能

export class MainPanelOnly implements IState {
  getPanelType(): PanelType { return PanelType.Primary; }
  getStateType(): StateType { return StateType.MainPanelOnly; }
  getPanelButtonClass(): string { return 'fa-chevron-right'; }
  isSideNavVisible(): boolean { return false; }
  isLoginVisible(): boolean { return false; } 
}

export class MainPanelWithSideNav implements IState {
  getPanelType(): PanelType { return PanelType.Primary; }
  getStateType(): StateType { return StateType.MainPanelWithSideNav; }
  getPanelButtonClass(): string { return 'fa-chevron-left'; }
  isSideNavVisible(): boolean { return true; }
  isLoginVisible(): boolean { return false; }
}

export class DetailPanel implements IState {
  getPanelType(): PanelType { return PanelType.Detail; }
  getStateType(): StateType { return StateType.DetailPanel; }
  getPanelButtonClass(): string { return ''; }
  isSideNavVisible(): boolean { return false; }
  isLoginVisible(): boolean { return false; }
}

export class LoginPanel implements IState {
    getPanelType(): PanelType { return PanelType.OverlayPanel; }
    getStateType(): StateType { return StateType.LoginPanel; }
    getPanelButtonClass(): string { return ''; }
    isSideNavVisible(): boolean { return false; }
    isLoginVisible(): boolean { return true; }

}

// 定义了一个可以控制整个页面的调停者的接口（app.commpent实现的方法）

export interface IMediatorImpl {
  showNavPanel(): void;
  hideNavPanel(): void;
  showDetailPanel(): void;
  hideDetailPanel(): void;
  changeShowHideSideButton(fromClass: string, toClass: string): void;
  showLoginPanel(): void;
  hideLoginPanel(): void;
}

// 定义了一个调停者的类
export class Mediator {
  private _mainPanelState = new MainPanelOnly();
  private _detailPanelState = new DetailPanel();
  private _sideNavState = new MainPanelWithSideNav();
  private _loginState = new LoginPanel();

  private _currentState: IState;
  private _CurrentMainPanelState: IState;
  private _mediatorImpl: IMediatorImpl;

  constructor(mediatorImpl: IMediatorImpl) {
    this._mediatorImpl = mediatorImpl;
    this._currentState = this._CurrentMainPanelState = this._sideNavState;
  }

  getStateImpl(stateType: StateType): IState {
    var stateImpl: IState;
    switch (stateType) {
      case StateType.DetailPanel: stateImpl = this._detailPanelState;
        break;
      case StateType.MainPanelOnly: stateImpl = this._mainPanelState
        break;
      case StateType.MainPanelWithSideNav: stateImpl = this._sideNavState;
        break;
      case StateType.LoginPanel: stateImpl = this._loginState;
        break;

    }
    return stateImpl;

  }



  moveToState(StateType: StateType) {
    var previousState = this._currentState;
    var nextState = this.getStateImpl(StateType);

    if (previousState.getPanelType() == PanelType.Primary && nextState.getPanelType() == PanelType.Detail) {
      this._mediatorImpl.showDetailPanel();
    }

    if (previousState.getPanelType() == PanelType.Detail && nextState.getPanelType() == PanelType.Primary) {
      this._mediatorImpl.hideDetailPanel();
    }

    if (nextState.isSideNavVisible())
      this._mediatorImpl.showNavPanel();
    else
      this._mediatorImpl.hideNavPanel();

    if (nextState.isLoginVisible())
        this._mediatorImpl.showLoginPanel();
    else
        this._mediatorImpl.hideLoginPanel();

    this._mediatorImpl.changeShowHideSideButton(
      previousState.getPanelButtonClass(),
      nextState.getPanelButtonClass()
    );

    this._currentState = nextState;
    if (this._currentState.getPanelType() == PanelType.Primary) {
      this._CurrentMainPanelState = this._currentState;
    }

  }

  showHideSideNavClicked() {
    switch (this._currentState.getStateType()) {
      case StateType.MainPanelWithSideNav:
        this.moveToState(StateType.MainPanelOnly);
        break;
      case StateType.MainPanelOnly:
        this.moveToState(StateType.MainPanelWithSideNav);
        break;
    }
  }

  getCurrentMainPanelState() {
    return this._CurrentMainPanelState.getStateType()
  }
}