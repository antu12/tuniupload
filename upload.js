
var upload = function(event) {
  // stopping defaults events
  event.preventDefault();
  event.stopPropagation();

  // Update button text.
  var uploadButton = document.getElementById('upload-button');
  uploadButton.innerHTML = 'Uploading...';

  var fileSelect = document.getElementById('file-select');

  // Create a new FormData object.
  var formData = new FormData();

  formData.append('ajax',true);
  //insert file into formData
  formData.append('file', fileSelect.files[0]);

  // Set up the request.
var xhr = new XMLHttpRequest();

xhr.upload.addEventListener('progress', function(event) {
  // body...
  if (event.lengthComputable) {
    var percent = event.loaded / event.total;
    var progress = document.getElementById('upload-progress');

    while (progress.hasChildNodes()) {
      progress.removeChild(progress.firstChild);
    }
    progress.appendChild(document.createTextNode(Math.round(percent * 100)+'%'));
  }
});

xhr.upload.addEventListener('load', function(event) {
  // body...
  document.getElementById('upload-progress').style.display='none';
});

xhr.upload.addEventListener('error', function(event) {
  // body...
  alert('Upload Failed');
});

xhr.addEventListener('readystatechange', function(event) {
  // body...

  if (this.readyState == 4) {
    if (this.status == 200) {
      var links = document.getElementById('uploaded');
      // console.log(this.response);
      var uploaded = eval(this.response);
      // alert('uploaded');
      var div , a;

        div = document.createElement('div');
        a = document.createElement('a');
        a.setAttribute('href','files/'+ uploaded);
        a.appendChild(document.createTextNode(uploaded));
        div.appendChild(a);
        links.appendChild(div);
    }else {
      alert('HTTP Status :' + this.status);
    }
  }
});

xhr.open('POST','upload.php',true);

// Set up a handler for when the request finishes.
xhr.onload = function () {
  if (xhr.status === 200) {
    // File(s) uploaded.
    uploadButton.innerHTML = 'Upload';
  } else {
    alert('An error occurred!');
  }
};


xhr.setRequestHeader('Cache-Control','no-cache');

document.getElementById('upload-progress').style.display='block';


xhr.send(formData);

}

window.addEventListener('load', function(event) {
     var uploadButton = document.getElementById('upload-button');
    uploadButton.addEventListener('click', upload)
});
