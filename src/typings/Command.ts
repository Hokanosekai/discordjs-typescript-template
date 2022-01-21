import {
    ApplicationCommandData,
    ApplicationCommandDataResolvable,
    ChatInputApplicationCommandData,
    CommandInteraction,
    CommandInteractionOptionResolver,
    GuildMember, MessageApplicationCommandData,
    PermissionResolvable, UserApplicationCommandData
} from "discord.js";
import { ExtendedClient } from "../structures/";

export interface ExtendedInteraction extends CommandInteraction {
    member: GuildMember;
}

interface RunOptions {
    client: ExtendedClient;
    interaction: ExtendedInteraction;
    args: CommandInteractionOptionResolver;
}

type RunFunction = (options: RunOptions) => any;

interface Permissions {
    id: string,
    type: string,
    permission: boolean
}

export type CommandType = {
    permissions?: Permissions[];
    run: RunFunction;
} & ChatInputApplicationCommandData

export type UserApplicationType = {
    permissions?: Permissions[];
    run: RunFunction
} & UserApplicationCommandData;

export type MessageApplicationType = {
    permissions?: Permissions[];
    run: RunFunction
} & MessageApplicationCommandData