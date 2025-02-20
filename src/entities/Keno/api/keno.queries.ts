export const kenoQueries = {
    getKeno: () => ["keno"],
    getResult: () => [kenoQueries.getKeno(), "result"],
    createBet: () => [kenoQueries.getKeno(), "createBet"],
}