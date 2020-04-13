import { storiesOf } from '@storybook/vue';
import { withKnobs } from "@storybook/addon-knobs";
import ClassGrid from './ClassGrid.vue';

const classGridTemplate = `
    <div>
        <class-grid>
        </class-grid>
    </div>
`;

storiesOf('Page Components/Class Grid', module)
    .addDecorator(withKnobs)
    .add('Default', () => ({
        components: { ClassGrid },
        template: `${classGridTemplate}`,
        data: () => ({
        })
    })
);