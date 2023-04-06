import createApiClient from "./api.service";

class UserService {
    constructor(baseUrl = "/api/users") {
        this.api = createApiClient(baseUrl);
    }

    async signIn(data) {
        return (await this.api.post("/login", data)).data;
    }
    async signUp(data) {
        return (await this.api.post("/registration", data)).data;
    }
    async signOut() {
        return (await this.api.post("/logout")).data;
    }
}

export default new UserService();