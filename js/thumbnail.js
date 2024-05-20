export default function generate_thumbnails(src) {
    return new Promise((resolve, reject) => {
      let thumb = false;
      let thumbnails = []
      let thumbnailWidth = 160
      let thumbnailHeight = thumbnailWidth * 9 / 16
      let horizontalItemCount = 5
      let verticalItemCount = 5
  
      let preview_video = document.createElement('video')
      preview_video.preload = 'metadata'
      preview_video.width = '250'
      preview_video.height = '250'
      preview_video.src = src;
  
      preview_video.addEventListener('loadeddata', async function () {
        var count = 1,
          id = 1,
          x = 0,
          y = 0,
          array = [],
          duration = parseInt(preview_video.duration);
  
        for (var i = 1; i <= duration; i++) {
          array.push(i)
        }
  
        var canvas, i, j;
  
        for (i = 0, j = array.length; i < j; i += horizontalItemCount) {
          for (var startIndex of array.slice(i, i + horizontalItemCount)) {
            var backgroundPositionX = x * thumbnailWidth,
              backgroundPositionY = y * thumbnailHeight,
              item = thumbnails.find(x => x.id === id);
  
            if (!item) {
              canvas = document.createElement('canvas');
              canvas.width = thumbnailWidth * horizontalItemCount;
              canvas.height = thumbnailHeight * verticalItemCount;
              thumbnails.push({
                id: id,
                canvas: canvas,
                sec: [{
                  index: startIndex,
                  backgroundPositionX: -backgroundPositionX,
                  backgroundPositionY: -backgroundPositionY
                }]
              })
            } else {
              canvas = item.canvas;
              item.sec.push({
                index: startIndex,
                backgroundPositionX: -backgroundPositionX,
                backgroundPositionY: -backgroundPositionY
              })
            };
  
            var context = canvas.getContext('2d');
            preview_video.currentTime = startIndex;
  
            await new Promise(function (resolve) {
              var event = function () {
                context.drawImage(preview_video, backgroundPositionX, backgroundPositionY, thumbnailWidth, thumbnailHeight);
                x++;
                preview_video.removeEventListener('canplay', event);
                resolve()
              };
              preview_video.addEventListener('canplay', event);
            });
            // fin de la generation de l'image
            count++;
          };
          x = 0;
          y++;
          if (count > horizontalItemCount * verticalItemCount) {
            count = 1;
            x = 0;
            y = 0;
            id++
          }
        }
  
        thumbnails.forEach(function (item) {
          item.canvas.toBlob(blob => {
            item.data = URL.createObjectURL(blob)
          }, 'image/webp');
          delete item.canvas;
        });
  
        thumb = true;
        resolve(thumbnails);
      });
    });
    
};