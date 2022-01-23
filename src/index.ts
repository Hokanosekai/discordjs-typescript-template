require('dotenv').config({path: `${process.cwd()}/.env`})
import {ExtendedClient} from "./structures";
import {Logger} from "./utils";

export const client = new ExtendedClient({intents: 32767});
client.start();

process.on('unhandledRejection', (reason, promise) => {
    Logger.error(`\n\n========================================= Unhandled Rejection Error ========================================`)
    Logger.error(reason)
    Logger.error(promise)
    Logger.error(`============================================================================================================\n\n`)
})

process.on('uncaughtException', (error, origin) => {
    Logger.error(`\n\n========================================= Uncaught Exception Error =========================================`)
    Logger.error(error)
    Logger.error(origin)
    Logger.error(`============================================================================================================\n\n`)
})

process.on('uncaughtExceptionMonitor', (error, origin) => {
    Logger.error(`\n\n========================================= Uncaught Exception Error =========================================`)
    Logger.error(error)
    Logger.error(origin)
    Logger.error(`============================================================================================================\n\n`)
})