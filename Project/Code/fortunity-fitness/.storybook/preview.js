import { configure, addDecorator, addParameters } from '@storybook/vue';
import { withA11y } from '@storybook/addon-a11y';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { addons } from '@storybook/addons';

import "normalize.css";
import "../Project/Styles/index.scss";

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS
  },
  options: {
    storySort: (a, b) => a[1].id.localeCompare(b[1].id),
  }
})

addDecorator(withA11y);

addons.setConfig({
    panelPosition: 'bottom',
});

configure(require.context('../Project/', true, /\.stories\.(js|ts)$/), module)
