import {ApplicationCommandDataResolvable, Collection} from "discord.js";
import ConfigJson from "../config/config.json";

export interface RegisterCommandsOptions {
    guildId?: string;
    clientId?: string;
    commands: ApplicationCommandDataResolvable[];
}

export type ConfigType = {
    ids: (typeof ConfigJson.dev | typeof ConfigJson.live),
    text: typeof ConfigJson.text
}