<?php
if (!empty($_FILES['file'])) {
    $name=time();
    if ($_FILES['file']['error']==0 && move_uploaded_file($_FILES['file']['tmp_name'],"files/{$name}")) {
      $uploaded[]=$name;
    }
}

if (!empty($_POST['ajax'])) {
  die(json_encode($name));
}

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
    <div id="uploaded">
      <?php
        if (!empty($uploaded)) {
          foreach ($uploaded as $name) {
            echo '<div><a href="files/',$name,'">',$name,'</a></div>';
          }
        }
       ?>
    </div>

    <div id="upload-progress"></div>

    <div class="">
      <form action="" method="POST" enctype="multipart/form-data">
        <input type="file" id="file-select" name="file"/>
        <button type="submit" id="upload-button">Upload</button>
      </form>
    </div>
  </body>
</html>
