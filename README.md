# Oordliste

This is a simple website generated to explain a bunch of orienteering terms. The
website is built with Next.js.

ordliste = dictionary in Norwegian

## Run website locally

Start development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result.

## API

The data presented on the webpage is available as an API endpoint:
https://oordliste.vercel.app/api/dictionary. The API has the following
TypeScript type:

```typescript
type oordliste = []{
    name: string,
    description: string,
    /** A list of tags that can be used to group related items together */
    tags: []string,
    /** Items in this list related to this item, an array consisting of `name`s of other items. */
    related: []string,
    /** Other names for this item */
    aliases: []string,
}
```

## Deploy

Every push to default branch will create a new deployment and publish the website at https://oordliste.vercel.app

