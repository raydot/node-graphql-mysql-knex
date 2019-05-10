# node-graphql-mysql-knex
Intermediate GraphQL tutorial.

Tutorial from Alien35 at https://steemit.com/graphql/@alien35/creating-a-scalable-api-using-node-graphql-mysql-and-knex

A few mistakes with the tutorial:

1.  Jade has been deprecated for Pug.  Instead of running `express && npm i && npm start` run `express --view=pug && npm i && npm start` This will lead to an issue that can be fixed with `npm audit fix`.

2.  serve-favicon is not installed.  `npm i serve-favicon`.
