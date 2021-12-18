# Helpful Notes

## Catching Errors in React with Error Boundaries

### Helpful Links

* https://blog.openreplay.com/catching-errors-in-react-with-error-boundaries
* https://reactjs.org/docs/error-boundaries.html
* https://blog.logrocket.com/handling-javascript-errors-react-error-boundaries/
* https://codepen.io/gaearon/pen/wqvxGa?editors=0010

### Limitations of Error Boundary introduced in React 16

Error boundaries are great for what they do - catch runtime errors you didn’t expect during rendering. However, there are a few types of errors that aren’t caught, and that you need to deal with in a different way. These include:

* errors in event handlers (when you click a button for instance)
* errors in asynchronous callbacks (setTimeout for instance)
* errors that happen in the error boundary component itself
* errors that occur during server side rendering

2	FE	Create a reference application	Reference Implementation	NewDev	Create a reference react app with features like authentication, redux store, error handling
2.1	FE	Application Set up	Code	NewDev	"Application Set up inlcuding docker image set up
- Add all the necessary packages
- Add routing
- Add necessary folder structures
- Add necessary project build configuration
- Add the docker file for creating the application image"
2.2	FE	Set up the redux store configuration (including saga) - POC	Code	POC	"Set up the redux store configuration (including saga) - POC
- Set up the folder structure to store actions, reducers, sagas
- Set up the main application store
- Add the saga middleware and configure the store to work with saga"
2.3	FE	Set up the redux store configuration (including saga)	Code	NewDev	"Set up the redux store configuration (including saga)
- Set up the folder structure to store actions, reducers, sagas
- Set up the main application store
- Add the saga middleware and configure the store to work with saga"
2.4	FE	Error Logging (uncaught exceptions in the client code)	Logging	NewDev	"Error Logging (uncaught exceptions in the client code)
- Write an windows event listener to run when there is an error event.
- Format the error message, stack trace, context
- Call the logging service endpoint to persist the error in the database."
2.5	FE	Dirty Check (Is Dirty Check) - POC	Performance	POC	"Dirty Check (Is Dirty Check) - POC
- Build a function to compare objects based on the values for each key"
2.6	FE	Dirty Check (Is Dirty Check)	Performance	NewDev	"Dirty Check (Is Dirty Check)
- Build a function to compare objects based on the values for each key"
2.7	FE	Add Authentication & Authorization	Security	Enhance/ReUse HBX	"Add Authentication & Authorization
- Build the http interceptor, and add some dummy token as a work around
- Need to add the code to retreive the refresh token
** Understand the code in HBX and implement the same for Enrollment **"
2.8	FE	Build Reusable Components	Code	NewDev	"Build Reusable Components
- Create a table with
               - Sorting
               - Searching
               - Filtering
               - Paging
               - Export to Excel, CSV files
- Rich Text Box
- Spinner(with customizable message)
- Warning/Information/Alert Card (Multi Use Card in React Consumer)
**Will be adding more to this list**"
2.9	FE	User(Session) Time Out	Security	Enhance/ReUse HBX	"User(Session) Time Out
- Build a component to watch the JWT token expiry time
- Timer component will be a higher order function which will wrap the application code"


