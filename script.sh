#!/bin/bash

echo Lets convert a video to many images 🦄 🦄 🦄 . . .
sudo apt-get install ffmpeg
sudo apt-get autoremove
echo Installing Node modules . . .
sudo npm install
echo Enter video path
read videoPath
echo Enter destination path
read destFolderPath
declare -i fps="30"
printf "\n"
echo "$(tput setaf 1)Beware! Press N if you dont have any idea about fps...$(tput sgr 0)"
printf "\n"
echo "Do you want a different frame rate (current set to 30 FPS) [Y/N]?"
read prompt
if [[ $prompt == "y" || $prompt == "Y" || $prompt == "yes" || $prompt == "Yes" ]]
then
 echo Enter FPS
 read fps
fi
echo Wait 🤚 🤚 🤚

node index.js $videoPath $destFolderPath $fps