import { DragSource } from 'react-dnd';

const source = {
	beginDrag(props) {
		return {
			type: props.type
		};
	},

	endDrag(props, monitor) {
		const item = monitor.getItem();
		const result = monitor.getDropResult();

		if (monitor.didDrop() && result) {
			props.onEndDrag(result.id, item.type);
		}
	}
};

function collect(connect) {
	return {
		connectDragSource: connect.dragSource()
	};
}

function Box(props) {
	const { connectDragSource, children } = props;

	return connectDragSource(children, { dropEffect: 'copy' });
}

export default DragSource('ITEM', source, collect)(Box);
