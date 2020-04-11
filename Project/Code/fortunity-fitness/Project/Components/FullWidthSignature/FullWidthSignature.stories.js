import { storiesOf } from '@storybook/vue';
import { withKnobs, text } from "@storybook/addon-knobs";
import FullWidthSignature from './FullWidthSignature.vue';

const fullWidthSignatureTemplate = `
    <div>
        <full-width-signature></full-width-signature>
    </div>
`;

storiesOf('Page Components/Full Width Signature', module)
    .addDecorator(withKnobs)
    .add('Default', () => ({
        components: { FullWidthSignature },
        template: `${fullWidthSignatureTemplate}`,
        data: () => ({
        })
    })
);