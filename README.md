# ADVANCED_DATABASE_SYSTEMS_COM519_ASSESSMENT
By Rodrigo Queiroga Amaral

Github repository: https://github.com/RQAmaral/ADVANCED_DATABASE_SYSTEMS_COM519_ASSESSMENT
In browser app: http://localhost:3000/home

This CRUD app was developed with the hospitality sector in mind, with the objective to make it easier for both 
managers and staff to have access to available rooms and their information, such as:

- Room Number
- Price of the room in £
- The name of the guest who is residing in the room
- The type of stay, if the guest is staying one more day or if the guest is staying only one night

As the project stands, the person visiting the website can add, change and delete reservations from a mongoDB Atlas database.

# How to start the project

To change the database, go to the mongo.js and add a mongoDB atlas URL, in order to connect to MongoDB Atlas
Using VScode, the user needs to open a terminal and use the line "npm run dev" in the application folder's command line.
Then, the user should go to the browser and type in the link http://localhost:3000/home to see the application.

# When Running

When the user runs the above link, the application's main page will show on their browser, showing a list of rooms and 
the information about them. The user will be able to use the header on the website to navigate through the main functions
of the app, to change the information about the rooms.
