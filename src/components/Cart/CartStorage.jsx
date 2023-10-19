
const CART_STORAGE_KEY = "cart";

export function getCartFromLocalStorage() {
    try {
        const cartFromStorage = JSON.parse(localStorage.getItem(CART_STORAGE_KEY));
        return cartFromStorage;
    } catch (error) {
        console.error("Error parsing cart data from localStorage:", error);
        return [];
    }
}

export function saveCartToLocalStorage(cart) {
    try {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (error) {
        console.error("Error saving cart data to localStorage:", error);
    }
}

export function addToCartWithUniqueKey(item, quantity, cart) {
    const uniqueKey = `${item.id}_${Date.now()}`;
    const newItem = { ...item, quantity, uniqueKey };
    const updatedCart = [...cart, newItem];
    return updatedCart;
}