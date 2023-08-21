import axios from "axios";

const fetchProductsReq = () => {
    return {type: "FETCH_PRODUCTS_REQUEST"}
}
const fetchProductsSuc = (products) => {
    return {type: "FETCH_PRODUCTS_SUCCESS", payload: products}
}
const fetchProductsfai = (error) => {
    return {type: "FETCH_PRODUCTS_FAILURE", payload: error}
}

const fetchProducts = () => {
    return (dispatch) => {
        dispatch(fetchProductsReq());
        axios.get("https://fakestoreapi.com/products")
        .then(res => {
            const products = res.data;
            dispatch(fetchProductsSuc(products))
        })
        .then(error => {
            const errorMSG = error;
            dispatch(fetchProductsfai(errorMSG))
        })
    }
}

export { fetchProducts };