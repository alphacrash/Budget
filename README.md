# React Reference POC

## Pending

- [ ] Authentication and Authorization
- [ ] Styling - Mammoth

## React Reference Application Requirements

### [ ] 2.1 Necessary Configuration

- [x] Add all the necessary packages
- [x] Add routing
- [x] Add necessary folder structures
- [ ] Add necessary project build configuration
  - Webpack required
- [ ] Add the docker file for creating the application image
  - Docker required

### [x] 2.2 Set up the redux store configuration (including saga) - POC

- [x] Set up the folder structure to store actions, reducers, sagas
- [x] Set up the main application store
- [x] Add the saga middleware and configure the store to work with saga

### [x] 2.3 Set up the redux store configuration (including saga)

- [x] Set up the folder structure to store actions, reducers, sagas
- [x] Set up the main application store
- [x] Add the saga middleware and configure the store to work with saga

### [x] 2.4 Error Logging (uncaught exceptions in the client code)

- [x] Write an windows event listener to run when there is an error event.
- [x] Format the error message, stack trace, context
- [x] Call the logging service endpoint to persist the error in the database.

### [x] 2.5 Dirty Check (Is Dirty Check) - POC

- [x] Build a function to compare objects based on the values for each key

### [x] 2.6 Dirty Check (Is Dirty Check)

- [x] Build a function to compare objects based on the values for each key"

### [ ] 2.7 Add Authentication & Authorization

- [x] Build the http interceptor, and add some dummy token as a work around
- [ ] Need to add the code to retreive the refresh token

### [ ] 2.8. Build Reusable Components

- [ ] Create a table with
  - [x] Sorting
  - [x] Searching
  - [ ] Filtering
  - [x] Paging
  - [x] Export to Excel, CSV files
- [x] Rich Text Box
- [x] Spinner(with customizable message)
- [x] Warning/Information/Alert Card

### [x] 2.9 User (Session) Time Out

- [x] Build a component to watch the JWT token expiry time
- [x] Timer component will be a higher order function which will wrap the application code
