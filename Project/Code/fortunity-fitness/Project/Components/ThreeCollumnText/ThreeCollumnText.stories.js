import { storiesOf } from '@storybook/vue';
import { withKnobs, text } from "@storybook/addon-knobs";
import ThreeCollumnText from './ThreeCollumnText.vue';

const threeCollumnTextTemplate = `
    <div>
        <three-collumn-text>
            <template v-slot:heading-one>{{ heading1 }}</template>
            <template v-slot:content-one>{{ content1 }}</template>
            <template v-slot:heading-two>{{ heading2 }}</template>
            <template v-slot:content-two>{{ content2 }}</template>
            <template v-slot:heading-three>{{ heading3 }}</template>
            <template v-slot:content-three>{{ content3 }}</template>
        </three-collumn-text>
    </div>
`;

storiesOf('Page Components/Three Collumn Text', module)
    .addDecorator(withKnobs)
    .add('Default', () => ({
        components: { ThreeCollumnText },
        props: {
            heading1: {
                default: text('Heading One', 'What is Lorem Ipsum?')
            },
            content1: {
                default: text('Content One', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")
            },
            heading2: {
                default: text('Heading Two', 'Why do we use it?')
            },
            content2: {
                default: text('Content Two', "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).")
            },
            heading3: {
                default: text('Heading Three', 'Where does it come from?')
            },
            content3: {
                default: text('Content Three', "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32.")
            },
        },
        template: `${threeCollumnTextTemplate}`,
        data: () => ({
        })
    })
);