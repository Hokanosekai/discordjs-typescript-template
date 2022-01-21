import {UserApplication} from "../../structures";
import {ApplicationCommandTypes} from "discord.js/typings/enums";
import {Logger} from "../../utils";

export default new UserApplication({
    name: 'ping',
    defaultPermission: false,
    type: 'USER',

    permissions: [],

    run: async ({client, interaction}) => {
        Logger.test(interaction.type)
        await interaction.reply({
            content: `Bot ping is ${client.ws.ping}ms`
        })
    }
})