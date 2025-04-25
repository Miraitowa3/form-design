import s from './Index.module.scss';
import { useHeight } from './hightTransition';
import UpOutlined from '@ant-design/icons-vue/lib/icons/UpOutlined';
export default defineComponent({
    name: 'CollapseContainers',
    props: {
        title: {
            type: String,
            default: ''
        }
    },
    setup(props, { slots }) {
        const isOpen = ref(false);
        const openContainer = ref<HTMLDivElement>();
        const handleToggle = () => {
            isOpen.value = !isOpen.value;
            useHeight(openContainer.value as HTMLDivElement, isOpen.value);
        };
        return () => (
            <div class={s['collapse-container']}>
                <div class={s['container-container__header']}>
                    <span>{props.title}</span>
                    <div class={[isOpen.value ? s.open : '', s['open-icon']]} onClick={handleToggle}>
                        <UpOutlined style="{ fontSize: '16px', color: '#08c' }" />
                    </div>
                </div>

                <div ref={openContainer} class={s['open-container']}>
                    {{
                        default: () => slots && slots.default && slots.default()
                    }}
                </div>
            </div>
        );
    }
});
