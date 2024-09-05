import Player from "./Player";
import { team } from "./Team";

let Doogy: Player = {firstname: "Doogie", lastname: "Howser, MD", jersey: 69, active: false};
let Lewis: Player = {firstname: "Lewis", lastname: "Hamilton", jersey: 44, active: true};
let Billy: Player = {firstname: "Billy", lastname: "Madison", jersey: 8, active: false};
let Seb: Player = {firstname: "Sebastian", lastname: "Vettel", jersey: 5, active: true};
let Alonso: Player = {firstname: "Albon", lastname: "Alonso", jersey: 14, active: true};
let Max: Player = {firstname: "Max", lastname: "Verstappen", jersey: 1, active: true};

let GCClowns: team = new team("GC Clowns", [Doogy, Lewis, Billy, Seb, Alonso, Max]);
console.log(GCClowns.getPlayerCount());
GCClowns.logActivePlayers();
GCClowns.logBench();
let DVD: Player = {firstname: "DVD", lastname:"GDWN", jersey: 47, active: true}
GCClowns.addPlayer(DVD);
GCClowns.logActivePlayers();
GCClowns.removePlayer(0);
GCClowns.setActive(1, true);
GCClowns.logActivePlayers();
GCClowns.logBench();
GCClowns.sortPlayerNames();
console.log(GCClowns);
