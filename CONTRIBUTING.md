### 🤖 Contributing to Silvy 💗

See an [issue](/issues) or need that you're able to fulfill?
Then this is the perfect place for you!

## Prerequisites

- NodeJS 16

## Setting Up Locally

<!-- - Create a `.env.local` file or use `npm run pull` if you're part of our team. -->
- Create a `.env.local` file or use `npm run pull` if you're part of our team.

```properties
# .env.local
NEXTAUTH_SECRET="local-secret"
NEXTAUTH_URL="http://localhost:3000"
DISCORD_CLIENT_ID="<discord-client-id>"
DISCORD_CLIENT_SECRET="<discord-client-secret>"
DATABASE_URL="<database-url>"
```

- Install the Node Modules

```sh
$ npm ci
```

## Start the Server~

The app should startup at http://localhost:3000!

```sh
$ npm start
```
