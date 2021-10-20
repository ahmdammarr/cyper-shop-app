import { StyleProp, TextStyle } from 'react-native';
export const fontProps:{[key:string]:StyleProp<Pick<TextStyle,'fontSize'|'fontWeight'>>} = {
  headline: {
    fontSize: 30,
    fontWeight: '800'
  },
  title: {
    fontSize: 24,
    fontWeight: '700'
  },
  label: {
    fontSize: 18
  }
}
