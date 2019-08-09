#!/bin/bash
echo Lets convert a video to many images 🦄 🦄 🦄 . . .
sudo apt-get install ffmpeg
sudo apt-get autoremove
echo Installing Node modules . . .
sudo npm install
echo Enter video name
read videoPath
echo Enter destination folder path
read destFolderPath

node index.js $videoPath $destFolderPath