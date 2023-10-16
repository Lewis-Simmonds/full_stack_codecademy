/*Access and add stats about sports team*/

const team = {

    _players: [
        {firstName: 'Bukayo', lastName: 'Saka', age: 22},
        {firstName: 'Jude', lastName: 'Bellingham', age: 20},
        {firstName: 'Kyle', lastName: 'Walker', age: 33}
    ],

    _games: [
        {opponent: 'Scotland', teamPoints: 3, opponentPoints: 1},
        {opponent: 'Malta', teamPoints: 4, opponentPoints: 0},
        {opponent: 'France', teamPoints: 1, opponentPoints: 2}
    ],

    get players() {
        return this._players;
    },

    get games() {
        return this._games;
    },

    addPlayer(newFirstName, newLastName, newAge) {
        const player = {firstName: newFirstName, lastName: newLastName, age: newAge};
        this._players.push(player);
    },

    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
        const game = {opponent: newOpponent, teamPoints: newTeamPoints, opponentPoints: newOpponentPoints};
        this._games.push(game);
    }

};

/*testing functionality of getters and adding functions*/
team.addPlayer('Jordan', 'Pickford', 29);
console.log(team.players);

team.addGame('Senegal', 3, 0);
console.log(team.games);