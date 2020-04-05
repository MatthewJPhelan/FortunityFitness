import { storiesOf } from '@storybook/vue';
import { withKnobs, text } from "@storybook/addon-knobs";
import LandingHeader from './LandingHeader.vue';

const landingHeaderTemplate = `
    <div>
        <landing-header></landing-header>
    </div>
`;

storiesOf('03 - Page Components/Landing Header', module)
    .addDecorator(withKnobs)
    .add('Default', () => ({
        components: { LandingHeader },
        template: `${landingHeaderTemplate}`,
        data: () => ({
        })
    })
);