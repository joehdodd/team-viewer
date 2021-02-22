# Getting Started with Epic Team Viewer

This was created with `create-react-app`, so just `yarn` / `npm install` and then `yarn start` / `npm start` will get things runnning.

# Important Pieces

-- `/store`

-- `/views`

# Approach

Given the REST endpoints provided, I decided to approach structuring the application to closely follow how those resources are set up. The routing for my application mirrors how the REST endpoints work (e.g. `/users/<SOME_ID>` loads a view with info about the user belonging to the supplied ID).

Additionally, I decided that I could reuse at least the `<ItemList>` component to render the lists of data fetched at `/teams` and `/users`. 

Loading `/teams` allows you to click through and see each teams' users. Clicking one of those users then shows you the ID of the team they're on, which is again a clickable link to a detail screen of that team. 

