/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './app/App';
import { name as appName } from './app.json';

const Main = () => <App title="My Todo App" />;

AppRegistry.registerComponent(appName, () => Main);

