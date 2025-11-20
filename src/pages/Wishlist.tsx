import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { removeWishlist } from "../redux/wishlistSlice";
import { addToCart } from "../redux/cartSlice";

export default function WishlistPage() {
  const dispatch = useDispatch();
  const wishlist = useSelector((state: RootState) => state.wishlist.items);

  const moveToCart = (item: any) => {
    dispatch(addToCart(item));
    dispatch(removeWishlist(item.id));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Your Wishlist</h1>

      {wishlist.length === 0 ? (
        <p className="text-gray-500">Your wishlist is empty.</p>
      ) : (
        <div className="space-y-4">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 border rounded-lg"
            >
              <div>
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-600">${item.price}</p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => moveToCart(item)}
                  className="px-4 py-1 bg-black text-white rounded"
                >
                  Move to Cart
                </button>

                <button
                  onClick={() => dispatch(removeWishlist(item.id))}
                  className="text-red-500 font-semibold"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
