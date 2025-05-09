import { Col, Row } from 'ant-design-vue';

import RenderItem from './render';
import { VueDraggable } from 'vue-draggable-plus';

const layouts = {
    colFormItem(h: any, element: any, index: number, parent: any, props: any) {
          let className =
            props.activeId === element.formId
        ? "drawing-item active-from-item"
        : "drawing-item";
        return (
            <Col span={element.span}     class={className}>
                <a-form-item
                    label-width={element.labelWidth ? `${element.labelWidth}px` : null}
                    label={element.label}
                    required={element.required}
                    onClick={(event: Event) => {
                        props.activeItem(element);
                        event.stopPropagation();
                    }}
                >
                    <RenderItem conf={element} key={element.renderKey} />
                </a-form-item>
            </Col>
        );
    },
    rowFormItem(h: any, element: any, index: number, parent: any, props: any) {
            const className =
      props.activeId === element.formId
        ? "drawing-row-item active-from-item"
        : "drawing-row-item";
        let child = renderChildren(h, element, index, parent, props);

        if (element.type === 'flex') {
            child = (
                <Row justify={element.justify} align={element.align}>
                    {child}
                </Row>
            );
        }
        return (
            <Col span={element.span}>
                <Row
                    gutter={element.gutter}
                    class={className}
                    onClick={(event: Event) => {
                        props.activeItem(element);
                        event.stopPropagation();
                    }}
                >
                    <span class="component-name">{element.componentName}</span>
                    <VueDraggable
                        modelValue={element.children}
                        onUpdate:modelValue={(newVal: any[]) => {
                            element.children = newVal;
                        }}
                        animation={150}
                        class="drag-wrapper"
                        group="people"
                    >
                        {child}
                    </VueDraggable>
                </Row>
            </Col>
        );
    }
};

function renderChildren(h: any, element: any, index: number, parent: any, props: any) {
    if (!Array.isArray(element.children)) return null;
    return element.children.map((el: any, i: number) => {
        const layout = layouts[el.layout as keyof typeof layouts];

        if (layout) {
            return layout(h, el, index, parent, props);
        }
        return layoutIsNotFound(el);
    });
}

function layoutIsNotFound(element: any) {
    throw new Error(`没有与${element.layout}匹配的layout`);
}
const DraggableItem = defineComponent({
    name: 'DraggableItem',
    props: ['element', 'index', 'drawingList', 'activeId', 'formConf', 'activeItem'],
    setup(props) {
        return () =>
            layouts[props.element.layout as keyof typeof layouts](
                h,
                props.element,
                props.index,
                props.drawingList,
                props
            );
    }
});

export default DraggableItem;
