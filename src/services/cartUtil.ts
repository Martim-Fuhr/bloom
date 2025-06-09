export interface CartItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
  image: string;
  description: string;
  category: string;
  originalPrice?: number;
}

export interface CartState {
  cartItems: CartItem[];
}

export type CartAction =
  | { type: "ADD_TO_CART"; payload: CartItem }
  | { type: "REMOVE_FROM_CART"; payload: { id: number } }
  | { type: "INCREMENT_ITEM"; payload: { id: number } }
  | { type: "DECREMENT_ITEM"; payload: { id: number } };

export const cartReducer = (
  state: CartState,
  action: CartAction
): CartState => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        };
      }
    }

    case "REMOVE_FROM_CART": {
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload.id),
      };
    }

    case "INCREMENT_ITEM": {
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    }

    case "DECREMENT_ITEM": {
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
    }

    default:
      return state;
  }
};

export const initialState: CartState = { cartItems: [] };
