#!/bin/bash
sudo apt-get install ffmpeg

echo Enter video path
read videoPath
echo Enter destination folder path
read destFolderPath

node index.js $videoPath $destFolderPath