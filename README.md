# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![Intro section with dropdown navigation challenge on Frontend Mentor]](images/screenshot.png)

### Links

- Live Site URL: [click here](https://fem-intro-with-dropdown-nav.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- TypeScript - For Type
- [TailwindCSS](https://tailwindcss.com/) - For styles

### What I learned

I learnt how to use React with Typescript, finally worked with several nested react components handling several logic.

To see how you can add code snippets, see below:

```js
{openMenu && (
    <>
      <MobileMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </>
  )}
```

```js
{openCompany ? <IconUp /> : <IconDown />}
```

```js
interface Props {
  openMenu: boolean
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>
}
```

## Author

- Frontend Mentor - [@Headbwoi](https://www.frontendmentor.io/profile/headbwoi)
- Twitter - [@Headbwoi_1](https://www.twitter.com/headbwoi_1)
