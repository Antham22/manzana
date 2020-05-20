import { BLACK } from '../constants/styles';
const getButtonState = (text, state) => {
    switch (state) {
      case 'success':
        return { text: 'Success!', style: { color: 'green'}, disabled: true };
      case 'sign-up':
        return { text: 'Singing up...', style: { color: BLACK}, disabled: true };
      case 'sign-in':
        return { text: 'Signing in...', style: { color: BLACK}, disabled: true };
      default:
        return { text, style: { color: BLACK}, disabled: false };
    }
  };

  export default getButtonState