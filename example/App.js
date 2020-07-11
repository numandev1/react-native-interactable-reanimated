import InteractablePlayground, {
  SCREENS as INTERACTABLE_SCREENS, SCREENS,
} from './src/interactablePlayground';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const ExampleApp = createStackNavigator(
  {
    InteractablePlayground,
    ...SCREENS,
    ...INTERACTABLE_SCREENS,
  },
  {
    headerMode: 'screen',
  }
);

const createApp = Platform.select({
  web: (input) => createBrowserApp(input, { history: 'hash' }),
  default: (input) => createAppContainer(input),
});

export default createApp(ExampleApp);
