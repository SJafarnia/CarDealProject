# CarDealProject

This is a Next.js | Django-graphene Project. 

## Getting Started

This project uses django-graphql-auth package for authentication, therefore in order to get a valid JWT cookie, you need to run both nextjs and django apps on same origin for CORS and csrf validation.
for developement, easiest way would be to run nextjs on loopback ip on any port via this command :

```bash
npm run dev -- -H 127.0.0.1 -p 8001
#any other port would do the job
```
## Activte Account

django-graphql-auth library also uses email validation and it is using Django's console email backend in developement, so check your python terminal for an activation email after registration.   


