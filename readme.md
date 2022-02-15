
Development PSSQL
CREATE DATABASE portfolio;
\l

Sequelize CLI [Node: 14.17.6, CLI: 6.4.1, ORM: 6.16.1]
npx sequelize-cli init

npx sequelize-cli model:generate --name Projects --attributes imageUrl:string,imageAlt:string,site:string,code:string,ptTitle:string,ptDescription:text,enTitle:string,enDescription:text
npx sequelize-cli model:generate --name Contents --attributes url:string,stack:string,imageUrl:string,imageAlt:string,videoId:string,site:string,ptTitle:string,ptDescription:text,ptShortDescription:string,enTitle:string,enDescription:text,enShortDescription:string
npx sequelize-cli db:migrate