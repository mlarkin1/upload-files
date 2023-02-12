'use strict';

/* Upload videos from computer and play them on a webpage

THE BODY TAGS: 
  <body>
    <div id="box"></div>
    <input type="file" id="fileInput" multiple />
    <script src="/starter/more-practice.js"></script>
  </body>

THE CSS FILE:
body {
  display: grid;
  height: 100vh;
  place-items: center;
}

input::file-selector-button {
  background-image: linear-gradient(
    to right,
    #ff7a18,
    #af002d,
    #319197 100%,
    #319197 200%
  );
  background-position-x: 0%;
  background-size: 200%;
  border: 0;
  border-radius: 8px;
  color: #fff;
  padding: 1rem 1.25rem;
  text-shadow: 0 1px 1px #333;
  transition: all 0.25s;
}
input::file-selector-button:hover {
  background-position-x: 100%;
  transform: scale(1.1);
}


*/

// ===========================
/*  The JS that makes this work */
// ===========================
document
  .getElementById('fileInput')
  .addEventListener('change', function selectedFileChanged() {
    const fileName = document.getElementById('fileInput').files[0];
    console.log(fileName);
    let reader = new FileReader();
    reader.readAsArrayBuffer(fileName);
    reader.onload = function (e) {
      // The file reader gives us an ArrayBuffer:
      let buffer = e.target.result;

      // We have to convert the buffer to a blob:
      let videoBlob = new Blob([new Uint8Array(buffer)], { type: 'video/mp4' });

      // The blob gives us a URL to the video file:
      let url = window.URL.createObjectURL(videoBlob);

      video.src = url;
    };
    // Create video element
    const video = document.createElement('video');

    // Use local file
    // video.src = 'video.mp4';
    console.log(fileName);

    // Use remote file
    // video.src = `${fileName}`;

    video.controls = true;
    video.muted = false;
    video.height = 240; // in px
    video.width = 320; // in px

    const box = document.getElementById('box');

    // Include in HTML as child of #box
    box.appendChild(video);
  });
