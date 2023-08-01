## Find Me a Table

**LIVE DEMO: https://find-me-a-table.vercel.app/**

Table reservation project, following the model of [Open Table](https://www.opentable.com/).

100% functional, conected to a PostgreSQL DB. Not responsive yet. Fake data

Available action: login, signup, logout, search (by city), check reservation times and make a reservation.

*(The only restaurant that has tables for reservation is the 'Vivaan - fine Indian'.)*

**LIVE DEMO: https://find-me-a-table.vercel.app/**

## Tech & 3rd party used in the project:
- [React](https://react.dev/)
- [NextJS](https://nextjs.org/)
- [Prisma](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Axios](https://axios-http.com/docs/intro)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind](https://tailwindcss.com/)
- [Material UI](https://mui.com/)
- [React Simples Image Viewer](https://www.npmjs.com/package/react-simple-image-viewer)
- [validator.js](https://www.npmjs.com/package/validator)
- [node.bcrypt.js](https://www.npmjs.com/package/bcrypt)
- [jose](https://www.npmjs.com/package/jose)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)

## Services & tools used in the project
- [Vercel](https://vercel.com/)
- [Neon](https://neon.tech/)

# How to run the project:
- Clone the repository
- Edit the .env file to add your Postgresql server, your JWT token and your root path. Your file should look like this:

```bash
DATABASE_URL="postgres://somename:54nWBJEMcbDT@ep-willowing-goat-797154.eu-central-1.aws.neon.tech/dbname"
JWT_SECRET="12w@krj31!853672¤%¤#Y&/ETRFwq58325g2w@2#¤!"
REACT_APP_ROOT_PATH="https://appadress.vercel.app"
```
*(If you want to use another DB structrue like MySQL, for example, you will have to adapt the Prisma Schema file.)*

Start Prisma to garantee that the project won't break for not recognizing something. In a terminal, run:
```bash
npx prisma generate
```
Push your schema to the DB server. Run:
```bash
npx primsa db push
```
Now, seed the DB. You should see a success message. Access:
Then, run:
```bash
https://yourprojecturl.com/api/seed
```
Now, the normal flow. Install the 'node_modules':
```bash
npm install
```
Last, just run the project:
```bash
npm run dev
```

# To-do:
- Make it responsive;
- UI improvements;
- Implemente voting and comments;
- Restrict access to reservation form for logged users only;

**LIVE DEMO: https://find-me-a-table.vercel.app/**
