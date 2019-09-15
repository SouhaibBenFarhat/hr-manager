This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `Third party libraries`
`axios`: Promise based HTTP client for the browser and node.js.<br>
`redux`: A predictable state container for JavaScript apps.<br>
`react-redux`: The official React binding for Redux.<br>
`redux-thunk`: Thunk middleware for Redux.<br>
`react-bootstrap`: Bootstrap implementation for react components.<br>
`query-string`: Parsing url search params to objects.<br>
`react-router-dom`: For routing management.<br>

### `Reducers`
reducers are under `src/App/Redux/Reducers`:<br>
<hr>

`ApplicationsReducer`: responsible for managing and saving state data related to application loaded from the `/api/v1/candidates`
```javascript
const initialState = {
    loading: false,
    error: false,
    errorPayload: null,
    applications: [],
};
```

<hr>

`FilterReducer`: responsible for saving data related to filtering and ordering data by all existing fields (birth_date, name, email...)
```javascript
const initialState = {
    statuses: [],
    positions: [],
    filteringParams: {}
};
```

### `Action Creators`
action creators are under `src/App/Redux/Actions`

### `Important components`
`UrlWatcher.js`: This component is under `src/App/Components/UrlWatcher.js`
It's responsible for binding the data between the filtering state and the url,
- Read the url and save to state.<br>
- Read the state and write the url.
         
### `Screenshot`
<img width="1680" alt="Screenshot 2019-09-15 at 18 35 59" src="https://user-images.githubusercontent.com/22856303/64925223-b24b2180-d7ed-11e9-8431-dd219df8a232.png">
