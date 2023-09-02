function saveToken(response) {
    const token = response.token;
    const userData = response.userData;
    localStorage.setItem("DIB_TOKEN", token);
    localStorage.setItem("DIB_USER", JSON.stringify(userData));
}
export default saveToken;
