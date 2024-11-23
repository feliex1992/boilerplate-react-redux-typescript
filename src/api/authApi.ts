interface LoginResponse {
    success: boolean;
    message: string;
}

const authApi = {
    login: (username: string, password: string): LoginResponse => {
        if (username === "admin" && password === "testpassword") {
            return {
                success: true,
                message: "Login successful",
            };
        } else {
            return {
                success: false,
                message: "Invalid username or password",
            };
        }
    },
};

export default authApi;