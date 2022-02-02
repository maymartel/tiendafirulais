import Item from "./Item";

function ItemList({ productos }) {

    return (
        <div className="item-list">
            {productos.map((item) => {
                return < Item producto={item} key={item.id} />
            })}
        </div>
    );
}

export default ItemList;