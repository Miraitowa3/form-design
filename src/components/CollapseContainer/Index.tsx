import s from './Index.module.scss';
export default defineComponent({
    name: 'CollapseContainers',
    props: {
        title: {
            type: String,
            default: ''
        },
        isOpen: {
            type: Boolean,
            default: false
        }
    },
    setup(props, { slots }) {
        const handleToggle = () => {
            // props.isOpen = !props.isOpen;
        };
        return () => (
            <div class={[s.collapseContainer]}>

            </div>
        );
    }
});
