import { Draggable } from "react-beautiful-dnd";
import "@/static/css/editor/ComponentsGlobal.css"

export const ProductInput = ({ item, index }) => {
    return (
        <Draggable draggableId={item.id} index={index}>
            {provided => (
                <div
                    className="editor_component"
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    <h3>Product</h3>
                    <input id={item.id + "_input_1"} type="text" placeholder="Input 1 de product"/>
                    <input id={item.id + "_input_2"} type="text" placeholder="Input 2 de product"/>
                    <input id={item.id + "_input_3"} type="text" placeholder="Input 3 de product"/>

                </div>
            )}
        </Draggable>
    )
}