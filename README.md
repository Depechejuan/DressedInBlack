# Dressed In Black Website

Overview

The "Dressed In Black Website" is dedicated to the Depeche Mode tribute band, "Dressed In Black." This online platform serves as a comprehensive hub for fans and administrators alike. Users can access information about the band's posts, concert dates, videos, and technical requirements through various endpoints.

\*[Public Endpoints]

GET method
/dibposts
Retrieves all posts created by the band.
/dibposts/:id
Retrieves a specific post using its ID.
/tour
Requests information about all upcoming concert dates.
/video
Fetches videos featuring the band.
/rider
Obtains the technical rider for the band.

\*[POST method]
/dibcontact
Receives contact forms submitted by users (exclusive endpoint for form submissions).
/diblog
Handles user log-ins.
/dibreg
Restricted to ADMIN, not accessible via front-end.

_[Registered Users (Administrators Only)]
_[GET method]
/tour/:id
Retrieves details about a specific concert by its ID.

\*[POST method]
/dibposts
Creates a new post.
/tour
Adds a new concert.

\*[PUT method]
/dibposts/:id
Edits a post based on its ID.
/users/:id
Edits user data using the user's ID.
/users/:id/photo
Edits a user's photo using the user's ID.
/tour/:id
Edits concert details based on its ID.
/dibposts/:id/photos
Edits/Creates photos associated with a specific post.
/tour/:id/photos
Edits/Creates photos associated with a specific concert.

\*[DELETE method]
/dibposts/:id
Deletes a post and all its dependencies (photos, videos, etc.).
/tour/:id
Removes a concert and all its dependencies (photos, videos, etc.).
/post/:id/:idPhoto
Deletes a specific photo associated with a post by its IDs.
/tour/:id/:idPhoto
Deletes a specific photo associated with a concert by its IDs.

For any inquiries, please use the /contact endpoint to submit a contact form and contact card.

Thank you for your interest in the Dressed In Black Website!
