import { BLACK } from '../constants/styles';
const getButtonState = (text, state) => {
    switch (state) {
      case 'success':
        return { text: 'Success!', style: { color: 'green', opacity: 0.6 }, disabled: true, cursor: 'not-allowed' };
      case 'sign-up':
        return { text: 'Singing up...', style: { color: BLACK, opacity: 0.6 }, disabled: true, cursor: 'not-allowed' };
      case 'sign-in':
        return { text: 'Signing in...', style: { color: BLACK, opacity: 0.6 }, disabled: true, cursor: 'not-allowed' };
      default:
        return { text, style: { color: BLACK, opacity: 1 }, disabled: false, cursor: 'pointer' };
    }
  };

  export default getButtonState