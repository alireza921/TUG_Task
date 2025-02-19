# Naming Conventions
All components are prefixed with TUG.

# Login
Since the fake API used for authentication works with a username instead of an email, the login process was implemented accordingly.
The required credentials for logging in are:

## Username: emilys
## Password: emilyspass
The expiresInMins field in the login page is set to 120 as a sample value, but it is not mandatory for authentication.

# Project Structure
The project structure follows the RTK Query documentation guidelines:

## pages/ - Contains the main pages of the project.
## features/ - Manages the core features, in this case, the login functionality.
## components/ - Houses reusable UI components.
## utils/ - Contains utility functions that are used across the project.
## services/ - Handles API requests and backend interactions.
## types/ - Stores TypeScript types used in the project.
## redux/ - Contains the Redux store and state management logic.
## Favicon & Open Graph Image
## Since no specific icons were provided for favicon and og-image, the default React assets were used.

# SEO Metadata
The title, description, and other meta tags for SEO were not included due to the lack of provided content.

# Manifest File
Similar to the SEO metadata, the manifest.json file was left as the default from the React template.

# Project Initialization
The project was bootstrapped using Create React App (CRA).