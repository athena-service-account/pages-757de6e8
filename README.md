# pages

**Project ID:** pages-757de6e8
**Port:** 3001
**Created:** Tue Jul  8 00:32:14 UTC 2025

## Overview

SeedChange is a frontend-only web application designed to engage users in sustainability and gardening by converting their residual balance into plantable seeds. The platform will feature a modern, eco-friendly design, incorporating elements of nature and growth. Users will accumulate virtual credits by registering their daily spare change, which can then be redeemed for different types of seeds. All interactions, including the conversion of credits to seeds and the educational content, will be simulated on the client-side.

The application will include a variety of features to educate and motivate users:
*   **Seed Library:** A component showcasing different types of seeds available for redemption, including descriptions, growth requirements, and fun facts.
*   **Virtual Garden:** A visual representation where users can see their seeds grow into plants over time, with updates and advice on how to care for them.
*   **Sustainability Tips:** A section offering weekly tips and tricks on reducing waste, conserving water, and other eco-friendly practices.
*   **Community Forum:** A simulated discussion board where users can share their experiences, ask questions, and learn from each other's gardening endeavors.

Here is a detailed breakdown of the project's features and technical aspects:
*   **Pages:**
    *   **Dashboard:** The main page where users can view their current balance, redeem seeds, and access the seed library.
    *   **Seed Library:** A page dedicated to showcasing the available seeds, with detailed information and images.
    *   **Virtual Garden:** A page where users can view the progress of their planted seeds, receive care advice, and enjoy the simulated growth.
    *   **Community:** A page simulating a community forum where users can interact, share knowledge, and get inspired.
*   **Core Components:**
    *   **`SeedCard`:** A reusable component for displaying seed information, including name, description, and an image.
    *   **`GardenPlot`:** A component representing a single plot in the virtual garden, showing the seed's growth stage and care tips.
    *   **`BalanceDisplay`:** A component that shows the user's current balance and allows them to redeem seeds.
*   **Mock Data Structure:**
    *   Seeds will be represented as an array of objects: `[{ id: 1, name: 'Tomato', description: 'Easy to grow, fruitful', image: 'tomato.jpg' }, { id: 2, name: 'Basil', description: 'Fast-growing, fragrant', image: 'basil.jpg' }]`.
    *   The user's balance and redeemed seeds will be stored in a simulated user profile object: `{ id: 1, name: 'User', balance: 10.0, seeds: [{ id: 1, name: 'Tomato', quantity: 2 }] }`.

## Development

This project was auto-generated and is running on port 3001.

```bash
npm install
PORT=3001 npm run dev
```

Visit: http://localhost:3001

## Auto-Generated

This project was created using the Project Manager system.
- Template: cloudflare-next-pages-2025july6
- Generated: Tue Jul  8 00:32:14 UTC 2025
