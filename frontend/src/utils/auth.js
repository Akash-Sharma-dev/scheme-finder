export const getToken = () => localStorage.getItem("token");

export const getUser = () => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
};

export const isAuthenticated = () => !!localStorage.getItem("token");

export const logoutUser = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
};