# FACE RECOGNITION LOGIN

This app authenticates the user with a picture of their face. The picture that the user provides gets stored in the Microsoft Azure Face Recognition Cloud and can be used to authenticate the user upon login. To login, the user's current foto is compared to the foto that was provided at registration.

Currently, the app works by using links to pictures. The next step is to add capability to get face pictures directly from the users webcam. The same could be done for audio to execute voice recognition authenitcation. The database is a mySQL database that is hosted on Heroku using an instance of JawsDB.   


#1. Register
![Results Image](https://github.com/fedevillalp/FaceloginFede/blob/master/image2.png)

#2. Try to login
![Results Image](https://github.com/fedevillalp/FaceloginFede/blob/master/image3.png)

#3. Authenticate
![Results Image](https://github.com/fedevillalp/FaceloginFede/blob/master/image4.png)

#4. Entrance Forbidden 
![Results Image](https://github.com/fedevillalp/FaceloginFede/blob/master/image5.png)

