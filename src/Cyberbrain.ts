import CreepController from "controllers/CreepController";
import SpawnController from "controllers/SpawnController";


export default class Cyberbrain implements Cyberbrain {
    private CreepController = new CreepController();
    private SpawnController = new SpawnController();
    /**
     * nextMove
     */
    public nextMove() {
        this.SpawnController.nextMove();
        this.CreepController.nextMove();
    }
}
