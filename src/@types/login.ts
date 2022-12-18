export interface IIsLoggedIn {
  is: boolean;
}

export type LoginContextType = {
  isLoggedIn: IIsLoggedIn;
  handleLogIn: (bool: IIsLoggedIn) => void;
};
