
import { Col } from 'ant-design-vue';

import RenderItem from "./render";

const layouts = {
    colFormItem(h: any, element: any, index: number, parent: any) {
        // const { activeItem } = this.$listeners;

        return (
            <Col span={element.span}>
                <a-form-item
                    label-width={element.labelWidth ? `${element.labelWidth}px` : null}
                    label={element.label}
                    required={element.required}
                >
                    <RenderItem conf={element}  />
                </a-form-item>
            </Col>
        );
    }
};

const DraggableItem = defineComponent({
    name: 'DraggableItem',
    props: ['element', 'index', 'drawingList', 'activeId', 'formConf'],
    setup(props) {
        const { element,index ,drawingList} = props;

        return () => layouts.colFormItem(h, element,index, drawingList);
    }
});

export default DraggableItem;
