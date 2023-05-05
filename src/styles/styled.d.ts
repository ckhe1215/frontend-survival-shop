import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    colors: {
      background: string;
      text: string;
      primary: string;
      secondary: string;
    }
  }
}
