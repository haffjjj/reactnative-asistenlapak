import { AppRegistry } from 'react-native';

//ignore inMounted warning
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

import App from './App';
AppRegistry.registerComponent('test', () => App);

// import Test from './Test';
// AppRegistry.registerComponent('test', () => Test);
