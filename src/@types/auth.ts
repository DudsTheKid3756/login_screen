export interface IAuthInfo {
  target: { name: any; value: any; };
  e: { target: { name: any; value: any } };
  setInfo: {
    (value: React.SetStateAction<{ email: string; password: string }>): void;
    (
      value: React.SetStateAction<{
        fullName: string;
        email: string;
        password: string;
      }>
    ): void;
    (arg0: (values: any) => any): void;
  };
}

export type onChangeType = {
  loginInfo: IAuthInfo;
  signUpInfo: IAuthInfo;
  onChange: (e: { target: { name: any; value: any } }, setInfo: any) => void;
};
