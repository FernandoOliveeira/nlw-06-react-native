# Next Level Week #06 #Together [@Rocketseat](https://github.com/Rocketseat) 🚀

<img src="./assets/wallpaper.png"/>

## App to schedule gameplays with your friends 🎮

:white_check_mark: Content Table
===============================
<!--ts-->  
* [Content Table](#white_check_mark-content-table)
* [About](#bulb-about)
* [Installation](#gear-installation)
* [How To Use](#computer-how-to-use)
* [Technologies](#hammer_and_wrench-technologies)    
<!--te-->

# :bulb: About
App created in the sixth edition of Next Level Week. <br>
The idea behind is to make easy organize and schedule gameplays with your friends
through this app integrated with discord API.

# :gear: Installation
Before the installation, be sure that you have your development environment properly set up.  
For that, I recommend following [this tutorial](https://reactnative.dev/docs/environment-setup).
After you set your development environment up, you can continue.

**NOTE:** Make sure you have [expo cli](https://expo.io/tools#cli) installed globally.

* Follow the steps bellow to install the project on your machine:
```
1. git clone https://github.com/FernandoOliveeira/nlw-06-react-native.git
2. cd nlw-06-react-native
```
* Install the dependencies and run the app:
```
3. yarn install
```
or
```
3. npm install
```
Create a **.env** file and set the environment variables following the **.env.example** file. <br>
Once the environment variables are proberly set, run the command:
```
4. expo start
```
# :computer: How To Use
The usage is very simple. <br>
First login with your discord account.<br>
Then click on **plus** button on the top-right of the screen.<br>
The schedule screen will appear, choose a category, select a discord server where the metting will happen, set day and time, 
write a description then click "Agendar" to save. <br>
After that, the app will redirect to the Home screen, where the metting will appear on a list. <br>
If you click on the appointment, the details screen will appear, where all the informations are shown. <br>
On the top-right of the screen is the Share button, by clicking on it, will be able to share a invite to the discord server.
On the bottom of the screen are the "Entrar na partida" button, click on it to be redirected to the discord app, direct on the server where the metting is scheduled.

# :hammer_and_wrench: Technologies
The following tools were used in this project:
- [Async Storage](https://github.com/react-native-async-storage/async-storage)
- [Axios](https://github.com/axios/axios) 
- [babel-plugin-inline-dotenv](https://github.com/brysgo/babel-plugin-inline-dotenv)
- [Dotenv](https://github.com/motdotla/dotenv)
- [Expo](https://docs.expo.io/)
- [Expo App Loading](https://docs.expo.io/versions/latest/sdk/app-loading/)
- [Expo Auth Session](https://docs.expo.io/versions/latest/sdk/auth-session/)
- [Expo Fonts](https://docs.expo.io/versions/latest/sdk/font/)
- [Google fonts](https://fonts.google.com/)
- [React Native](https://reactnative.dev/)
- [React Native Gesture Handler](https://docs.expo.io/versions/latest/sdk/gesture-handler/)
- [React Native Iphone X Helper](https://github.com/ptelad/react-native-iphone-x-helper)
- [React Native SVG](https://github.com/react-native-svg/react-native-svg)
- [React Native UUID](https://github.com/eugenehp/react-native-uuid)
- [Stack Navigation](https://reactnative.dev/docs/navigation#usage)


