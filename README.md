This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Project setup

First, Clone the repository

```bash
git clone https://github.com/pscon/Pscon-Movie-App.git
```

Install all dependencies

```bash
npm install
```

run the development server:

```bash
npm run dev
# or
yarn dev
```

- Run the tests

```bash
npm run test
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app.js`. The page auto-updates as you edit the file.

## Project name

MOVIX

## Project description

A multi-functional platform where authors and readers can create and have access to their own content. InkSpire aims to knock off competition from the likes of Hashnode and Medium in its first 2 years of launch.

## Project system Architecture

Screenshot of the project architecture:

![project architecture](./public/architecture.png)

### Project features

- Allow users to click on a recommended genre to explore movies and TV shows(Click on Movies or Tv show in the Navbar)
- User can view Trending, Upcoming, Popular Movies/TV Shows
- User can search for movies and TV shows by title, actor, director, or keywords.
- User can view search results in a user-friendly format, showing relevant details like title, poster, rating, and release year.

---

### Project technologies

- React.js
- Tailwind CSS
- React Markdown
- scss
- TMBD (Movies API)
- ESLint

### Project status

95% complete

### Project structure explanation

- `Pscon-Movie-App` - The main folder of the project, contains all the code of the project.
  - `components` - Contains all the components of the project.
  - `store` - store.js (File for setting up the Redux store) - homeSlice.js (Redux slice for the home-related state management)
  - `hooks` - Contains useFetch for API.
  - `pages` - Contains all the pages of the project.
  - `tailwind.config.js` - Contains all the styles of the project.
- `public` - Contains all the public files of the project.

### Project deployment

- Deploy the project to Vercel

```bash
npm run deploy
```

---

### Project screenshots

<!-- ![signup page](./public/signup.png)

![feeds page](./public/feeds.png)

![post page](./public/post.png)

![profile page](./public/profile.png) -->

---

### Project Live link

<!-- [InkSpire](https://ibimina-chatter.vercel.app) -->

---

### Contact

- Linkedin: [Ekunola Paul](https://www.linkedin.com/in/ekunola-paul-42712b1aa/)
- Email : [Email](mailto:ekunolapaul@gmail.com)

---

---

## Author

- Ekunola Paul
