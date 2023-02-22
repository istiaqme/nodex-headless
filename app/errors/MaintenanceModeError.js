module.exports = class MaintenanceModeError extends Error {
    constructor(message, deadline = null, note = null){
        super(message);
        this.name = "MaintenanceModeError";
        this.deadline = deadline;
        this.note = note
    }
}