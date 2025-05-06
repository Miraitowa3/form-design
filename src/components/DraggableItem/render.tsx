
const listMap: any = {
    'a-input': () => {
        return <a-input></a-input>
    },
    'a-input-number': () => {
        return <a-input-number></a-input-number>
    },
    'a-select': () => {
        return <a-select></a-select>
    },
    'a-cascader': () => {
        return <a-cascader></a-cascader>
    },
    'a-radio-group': () => {
        return <a-cascader></a-cascader>


    }, 'a-checkbox-group': () => {
        return <a-checkbox-group></a-checkbox-group>

    }, 'a-switch': () => {
        return <a-switch></a-switch>

    }, 'a-slider': () => {
        return <a-slider></a-slider>

    }, 'a-time-picker': () => {
        return <a-time-picker></a-time-picker>


    }, 'a-date-picker': () => {
        return <a-date-picker></a-date-picker>

    }, 'a-rate': () => {
        return <a-rate></a-rate>

    }, 'a-color-picker': () => {
        return <a-color-picker></a-color-picker>

    },
    'a-upload': () => {
        return <a-upload></a-upload>

    }

}
const RenderItem = defineComponent({
    props: ["conf"],

    setup(props) {
        const {conf} = props
        return () => (listMap[conf.tag](conf))
    }

})

export default RenderItem;
