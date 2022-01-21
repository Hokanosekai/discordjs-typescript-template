import { CommandType, UserApplicationType, MessageApplicationType } from "../typings";

export class Command {
    constructor(commandOptions: CommandType) {
        Object.assign(this, commandOptions);
    }
}

export class UserApplication {
    constructor(applicationOptions: UserApplicationType) {
        Object.assign(this, applicationOptions)
    }
}

export class MessageApplication {
    constructor(applicationOptions: MessageApplicationType) {
        Object.assign(this, applicationOptions)
    }
}