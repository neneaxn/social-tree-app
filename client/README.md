The Event Explorer Platform is a single-page application built with React that allows users to browse, view, and manage various community events. 

*Events features:
- Events.jsx: Displays a list of all available events.
- EventItem.jsx: A reusable card component to display event details (image, title, location) and links to the details page.
- Create.jsx: Authenticated users can create events
- Edit.jsx: The owner of the event can edit/delete it.
- Details.jsx: Displays full information about the event. It is the page where the owner of the event can access Edit/Delete functionality and where non-owners /but authenticated users/ can join the event by clicking on "Join event" button or unsubscribe later. It also displays the number of guests coming to the event.
- Loading.jsx: Displays a "Loading..." component while data is being fetched.

*Users features:
- Register: Allows new users to create accounts. Includes client-side validation for email, password length, and password confirmation.
- Login: Handles user sign-in to access protected routes and features. Allows signed-in users to create/edit/delete/join events.

The project structure is organized by logically grouped folders (components, services, utils, etc).

Styling is implemented with CSS modules.
Routing is implemented with React Router DOM.
State Management is implemented with React Context. (for authentication)
Testing is implemented with Jest.

The application has been built using an external server - Softuni practice server.

*To start:
- Development: npm run dev
- Tests: npm test
- Server: node server.js