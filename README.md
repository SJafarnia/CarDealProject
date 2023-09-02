# CarDealProject

This is a Next.js | Django-graphene Project. 

## Getting Started

This project uses Django-graphql-auth package for authentication, therefore in order to get a valid JWT cookie, you need to run both nextjs and django apps on same origin for CORS and csrf validation.
for developement, easiest way would be to run nextjs on loopback ip on any port via this command :

```bash
#for Next.js project
npm run dev -- -H 127.0.0.1 -p 8001
#any other port apart from port 8000 would do the job

#for Django project
python manage.py runserver

```
## Python Hints

Remember to create a virtual environment for Django project and install required packages via

```bash
pip install -r requirements.txt

```

## Activte Account

django-graphql-auth library also uses email validation and it is using Django's console email backend in developement, so check your python terminal for an activation email after registration.   


