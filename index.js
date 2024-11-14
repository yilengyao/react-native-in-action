/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

const Main = () => <App title={appName} />;

AppRegistry.registerComponent(appName, () => Main);

