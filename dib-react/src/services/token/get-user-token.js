function getUserToken() {
    return JSON.parse(localStorage.getItem("DIB_USER"));
}
export default getUserToken;
