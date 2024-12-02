import s from './Index.module.scss';
console.log(s,9999999);

// import AButton from 'ant-design-vue/es/button';
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
    setup() {
        const handleToggle = () => {
            // props.isOpen = !props.isOpen;
        };
        return () => (
            <div class={s['collapse-container']}>
                <div class={s['container-container__header']}>
                    <span>基础组件</span>
                    <div class="open">
                        <UpOutlined style="{ fontSize: '16px', color: '#08c' }" />
                    </div>

                </div>
                   <div class={s['open-container']}>

                    </div>
            </div>
        );
    }
});
