import { type XButtonProps } from './x-button';


declare global {
    namespace JSX {
      interface IntrinsicElements {
        'x-button': XButtonProps        
      }
    }
}


export default () => {};