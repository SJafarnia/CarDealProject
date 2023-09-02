# CarDealProject


This is a Next.js | Django-graphene Project. 



## Getting Started

This project takes advantage of Django-graphql-auth package for authentication, therefore in order to get a valid JWT cookie, you need to run both Next.js and Django apps on same origin for CORS and csrf validation.
for development, easiest way would be to run Next.js project on loopback ip on any port to match Django's origin

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

django-graphql-auth library utilizes email validation and it is using Django's console email backend in developement, so check your python terminal for an activation email after registration.   


