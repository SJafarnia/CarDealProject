# CarDealProject

this project uses django-graphql-auth package for authentication, therefore in order to get a valid JWT cookie, you need to run both nextjs and django apps on same origin.
for developement, easiest way would be to run nextjs on loopback ip via this command :
npm run dev -- -H 127.0.0.1 -p 8001(any other port would do the job)
django-graphql-auth also uses email validation and it's using django's console email backend in developement, so check your python terminal for an activation email after registration.   
