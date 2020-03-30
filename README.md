# Movie-euhh

## Back-end setup

- Install python 3.7 and pip
- Run `pip install -r requirements.txt`
- Create a database
- Copy the `.env.example` and rename it to `.env`
- Edit the `.env` to match your settings
- Run `py manage.py migrate` to migrate your database
- Run `py manage.py runserver` to start the dev server

Troubleshooting:
- Errors with the mysqlclient while installing the requirements
    - Download the cp37 version applicable to you https://www.lfd.uci.edu/~gohlke/pythonlibs/#mysqlclient
    - Install it using `pip install [path-to-file]`

### Linux Version
- Navigate to project root `cd /path/where/you/cloned/`
- Run now from here `./docker/bin/start-development`.
- After this navigate to .env file in the system folder. Edit the database connections.
    - ```
      DB_NAME=projectb
      DB_USER=projectb
      DB_PASSWORD=password from docker-compose db service
      DB_HOST=db
      DB_PORT=3306 
      ```
      
- Last step use 1 of the following url's
    - Site on: http://frontend.projectb.vdmi/
      Backend on: http://backend.projectb.vdmi/      