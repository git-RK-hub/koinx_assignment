# Build coin tracker

### `Live URL`: 

## Description

Convert the following Figma design into code using React.js:-
https://www.figma.com/file/bdXRoUdXpg2bntR6OIfYUP/KoinX-Interview-Task

### Mandatory Tasks(Must have):-
1. Implement the UI as shown in the Figma design.
2. There are some buttons that don’t have any functionality, like the search and burger
icon in the navbar. You don’t have to implement any functionality for them, they can
remain as dummy buttons.
3. You can use the Coingecko API
(https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h%2C7d) to fetch the list of coins ordered by market price. This API request returns the top 10 crypto coins by market price along with all the data required for the Figma design.
4. The page must be completely responsive.
5. Host your code on GitHub.

### Optional Tasks(Good to have):-
1. Instead of just 10 crypto coins, implement pagination so that each page fetches 10
coins, i.e., page 1 should show top 1-10 coins, page 2 should show top 11-20 coins
and so on. The data for this can be fetched from the same API by changing the
`page` parameter in the query string. You can show upto 10 pages having 10 coins
each, i.e., 100 coins in total.
2. Implement the popup as shown in the “Mobile Popup” section in the figma design.
3. Make the number of coins per page customizable, according to the “show rows” input
in the Figma Design. The number of coins to be returned per page can be
customized by modifying the `per_page` parameter in the query string of Coingecko’s
API.
4. Deploy your code using tools like Netlify or Vercel.

### To run this project locally
1. clone the repo
2. run `npm install`
3. run `npm start`
