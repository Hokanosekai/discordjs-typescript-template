# Typescript DiscordJS template

A typescript discord.js bot template using typeorm with mysql

## How to use this?

1. Clone this repository
2. After done fill [config.json](./src/config/config.json) with your prefered ids
3. Update [ormconfig.json](./src/config/ormconfig.json) file with DB ids
4. Add your bot token in [.env](./.env) file (if you haven't bot token go to the [Discord Developer Portal](https://discord.com/developers/applications) then create a new application)
5. Start command prompt in project folder
6. Run `npm install` to install all project dependencies

<br>

## Project info

All commands are in SlashCommands. So they go through the `interactionCreate` event. You can always add prefixed commands by modifying the code a bit.
By default there is a `ping` command to show the use of the template.

The template contains a connection to a database with the typeorm and mysql2 packages. If you don't know how to use one of them, don't hesitate to have a look at the documentation.

The connection information is in the `ormconfig.json` file, it allows the connection to a mysql database hosted in localhost. You can also edit the file so that you don't see SQL queries executed by typeorm by setting the `logging: false` property to false. You can also disable automatic entity synchronization (default is on).

You will find in the `utils` folder some utilities.

<br>

## Build project

Run commande `npm run build` this will compile typescript in a `dist` folder in project folder.

<br>

## Start in dev mode

Edit the `APP_ENV` propertie by `dev` in the [.env](./.env) file. Then run in command prompt `npm run start:dev`.  
The bot will start and automatically restart if there is a change in your project folder.

<br>

## Start in live mode

Set `APP_ENV` at `live`, don't forget to fill the `config.json` live section with your ids and other info. Then run `npm run start:prod`. This will start the bot after finish to compile it. 

You can also start the bot without compile it by running `npm run start`.

> Note for this command you can replace `node` by `nodemon` to automatically restart bot on dist folder change.


<br>

This is a template so you can update, modify it as you want. If you have suggest to upgrade this repository, please do a pull request. 

Hokanosekai#0001

## Thank's for clone it 😜