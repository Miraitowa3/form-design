import s from './Index.module.scss';
import UpOutlined from 'ant-design-vue';
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
            <div class={s['collapse-container']}>
                <div class={s['collapse-container__header']}>
                    <span>基础组件</span>
                    <div class="open">
                        <UpOutlined />
                    </div>
                </div>
            </div>
        );
    }
});
