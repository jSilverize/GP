window.onload = function () {
  var options =
          {
            imageBox: '.imageBox',
            thumbBox: '.thumbBox',
            spinner: '.spinner',
            imgSrc: 'avatar.png'
          };
  var cropper;

  var imgResult = document.querySelector('.cropped');
  var cropContainer = document.querySelector('.crop-container');

  document.getElementById("produtoImagem").addEventListener('change', function () {

    if (cropContainer.classList.contains('oculto')) {
      cropContainer.classList.remove("oculto");
    } else {
      cropContainer.classList.add("oculto");
    }

    if (imgResult.classList.contains('oculto')) {
    } else {
      imgResult.classList.add("oculto");
    }

    var reader = new FileReader();
    reader.onload = function (e) {
      options.imgSrc = e.target.result;
      cropper = new cropbox(options);
    };
    reader.readAsDataURL(this.files[0]);
    this.files = [];
  });

  document.querySelector('#btnCrop').addEventListener('click', function () {
    var img = cropper.getDataURL();
    imgResult.innerHTML = '<img src="' + img + '">';

    if (cropContainer.classList.contains('oculto')) {
      cropContainer.classList.remove("oculto");
    } else {
      cropContainer.classList.add("oculto");
      imgResult.classList.remove("oculto");
    }
  });

  document.querySelector('#btnZoomIn').addEventListener('click', function () {
    cropper.zoomIn();
  });

  document.querySelector('#btnZoomOut').addEventListener('click', function () {
    cropper.zoomOut();
  });

  document.querySelector('#zerar').addEventListener('click', function () {
    cropContainer.classList.add("oculto");
    imgResult.classList.add("oculto");
  });

};
