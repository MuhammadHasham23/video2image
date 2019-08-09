const ffmpeg = require('ffmpeg');

process.on('message', ({ path, outputTo }) => {
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
            process.send({ msg: "Video Processing Completed . . ." })
        });
      } else {
        log('Error: ' + err);
      }
    });
  } catch (e) {
    log(e.code);
    log(e.msg);
  }
})

