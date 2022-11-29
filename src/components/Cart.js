const Cart = (props) => {
  const { cartItems, total, onRemove, onAdd } = props;
  return (
    <div>
      <div>
        {cartItems.length === 0 && <div class="mt-3 text-base font-medium text-neutral-700">your cart is empty!</div>}
        {cartItems.map((item) => (
          <div key={item.name}>
            <div class="mb-3 text-base font-medium text-neutral-700">
              {item.name} x{item.qty}
              {" "}
            <button onClick={() => onRemove(item)} class="bg-white hover:bg-gray-100 text-gray-800 font-semibold px-2 border border-gray-400 rounded shadow">
              -
            </button> {" "}
            <button onClick={() => onAdd(item)} class="bg-white hover:bg-gray-100 text-gray-800 font-semibold px-2 border border-gray-400 rounded shadow">
              +
            </button>
            </div>
              

          </div>
        ))}
        <div class="mt-3 text-base font-medium text-neutral-700">total cost: ${total}</div>
      </div>
    </div>
  );
};

export default Cart;
