const Cart = (props) => {
  const { cartItems, total } = props;
  return (
    <div>
      <div>
        {cartItems.length === 0 && <div class="mt-3 text-base font-medium text-neutral-700">your cart is empty!</div>}
        {cartItems.map((item) => (
          <div key={item.name}>
            <div class="text-base font-medium text-neutral-700">
              {item.name} x {item.qty}
            </div>
          </div>
        ))}
        <div class="mt-3 text-base font-medium text-neutral-700">total cost: ${total}</div>
      </div>
    </div>
  );
};

export default Cart;
