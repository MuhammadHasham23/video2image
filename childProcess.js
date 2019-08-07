const ffmpeg = require('ffmpeg');
const chalk = require('chalk');

function convertVideoToJPG(path, outputTo) {
  const log = console.log;
  try {
    new ffmpeg(path, function (err, video) {
      if (!err) {
        video.fnExtractFrameToJPG(outputTo, {
          every_n_frames: 30,
          file_name: 'image_%t_%s'
        }, function (error, files) {
          if (error)
            log(error);
          if (!error)
            log(chalk.bold.yellow('Video processing has been completed . . . '));
        });
      } else {
        log('Error: ' + err);
      }
    });
  } catch (e) {
    log(e.code);
    log(e.msg);
  }
}

convertVideoToJPG(process.argv[2], process.argv[3]);
