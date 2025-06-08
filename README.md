# Hogwarts Houses Frontend (React.js + Javascript)

## Overview

This React frontend fetches Hogwarts houses data from an API and displays the houses with their traits and colors. It supports searching houses by name using a search input, as well as filtering each house's traits.

## Features

- Built with React.js and Javascript
- Uses **shadcn/ui components**, **Lucide React Icon(s)** & **Tailwind CSS** for styling and UI elements
- Uses Verdana font and displays a loading spinner while fetching data
- Search bar on main page passes search input to house list component
- Fetches houses from the API and filters by name _server-side_ when the API supports it
- If the API does not support filtering (e.g., external API), the frontend fetches all houses and no filtering is possible.

## Environment Variables

Set the API URL in `.env.local`:

NEXT_PUBLIC_API_URL=[https://wizard-world-be.onrender.com/houses](https://wizard-world-be.onrender.com/houses)

or

NEXT_PUBLIC_LOCAL_API_URL=http://localhost:5000/houses

depending on whether you use the external API or the matching local backend [wizard-world-be](https://github.com/CSt90/wizard-world-be) that was created for this project.

## Running Locally

```bash
npm install
npm run dev

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

```
