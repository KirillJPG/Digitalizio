export const userQueries = {
    getUser: () => ["user"],
    session: () => [...userQueries.getUser(), "session"],
    login: () => [...userQueries.getUser(), "login"],
    logout: () => [...userQueries.getUser(), "logout"],
    register: () => [...userQueries.getUser(), "register"],
    profile: () => [...userQueries.getUser(), "profile"],
    avatar: () => [...userQueries.getUser(), "avatar"]
}