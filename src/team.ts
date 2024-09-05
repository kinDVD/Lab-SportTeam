import Player from "./Player";

export class team {
    Players: Player[];
    teamName: string;
    
    constructor(teamName: string, Players: Player[]){
        this.teamName = teamName;
        this.Players = Players;
    }

    addPlayer(newPlayer: Player): void{
        console.log( `Added: ${newPlayer.firstname}`);
        this.Players.push(newPlayer);
    }

    removePlayer(index: number): void{
        console.log(`Removed: ${this.Players[index].firstname}`);
        this.Players.splice(index, 1);
    }

    setActive(playerIndex: number, activeStatus: boolean): void{
        console.log(`${this.Players[playerIndex].firstname} is set to ${activeStatus}.`);
        this.Players[playerIndex].active = activeStatus;
    }

    getPlayerCount(): number{
        return this.Players.length;
    }

    logBench(): void{
        let benchPlayers: Player[] = [];
        this.Players.forEach(p=>{
            if(p.active === false){
                benchPlayers.push(p)
            }
        })
        console.log("Benched Players:")
        benchPlayers.forEach(p=> console.log(p.firstname))
    }

    logActivePlayers(): void{
        let activePlayers: Player[] = [];
        this.Players.forEach(p=>{
            if(p.active === true){
                activePlayers.push(p)
            }
        })
        console.log("Active Players:")
        activePlayers.forEach(p=> console.log(p.firstname))
    }

    sortPlayerNames():void{
        this.Players.sort((a,b) => (a.lastname > b.lastname)?1:((a.lastname<b.lastname)?-1:0))
    }
}