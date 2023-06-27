# Suited

This is a tabletop rpg site to house a game in development.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# The Rule Book

## Introduction

The Rule Book is a comprehensive guide that outlines the mechanics and modifiers of a card-based system. It provides rules and guidelines for various scenarios and tasks within the game.

## The System

The card-based system requires a standard 52-card deck. In this deck, the Ace is considered low and equals 1.

## Mechanics

The system incorporates two main types of flips: Contested Flips and Target Flips.

- Contested Flips: When two characters are in direct opposition, such as in a competition or conflict, each player flips a card from the deck. The player with the higher value wins the contest. In the case of a tie, the player who initiated the contest wins.

- Target Flips: For tasks that involve overcoming a set difficulty or target number, the player flips a card and compares it to the Target Number. If the value on the card is equal to or higher than the Target Number, the task is successful.

## Modifiers

Modifiers can affect the outcome of a flip. There are positive and negative modifiers that adjust the number of cards flipped and how they are chosen.

- Positive Modifiers (Buffs): When a positive modifier is in effect, the player adds an additional card to their flip and gets to choose which card they use for the outcome.

- Negative Modifiers (Debuffs): When a negative modifier is in play, the player adds an extra card to their flip and must pick the lowest value card to determine the outcome.

## Example with Modifiers

Let's walk through an example to illustrate how modifiers work:

Scenario: A skilled Thief is attempting to crack a safe located in a dark crypt. The safe is well manufactured, but the Thief has master-crafted lock picks. Additionally, the Thief has found the first half of the code previously, and he has all the time he needs since he stole the whole safe and brought it to his crypt.

### Modifiers

- It's dark: Negative modifier (-1)
- Well manufactured safe: Negative modifier (-1)
- Master crafted lock picks: Positive modifier (+1)
- Found first half of the code: Positive modifier (+1)
- Ample time: Positive modifier (+1)

Calculating the Flip:

Starting with the base flip of 1 card (0), we add the negative modifiers: -1 + -1 = -2, resulting in 3 cards flipped, with the lowest value chosen.

Next, we add the positive modifiers: +1 + +1 + +1 = +3, giving us 2 cards to choose from, with the highest value selected.

By incorporating all the modifiers, the final flip consists of 2 cards (pick the highest).

This system allows for a dynamic range of outcomes, with the modifiers providing a narrative context and strategic decision-making for the players.
