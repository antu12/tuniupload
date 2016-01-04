<?php

 ?>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Upload</title>
    <link rel="stylesheet" href="upload.css" media="screen" charset="utf-8">
    <script type="text/javascript" src="upload.js"></script>
  </head>
  <body>
    <div class="uploaded">

    </div>

    <div class="upload-progress">

    </div>

    <div class="">
      <form id="file-form" action="handler.php" method="POST">
        <input type="file" id="file-select" name="photos[]" multiple/>
        <button type="submit" id="upload-button">Upload</button>
      </form>
    </div>
  </body>
</html>
