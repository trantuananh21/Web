function checkSize()
{
    im = new Image();
    im.src = document.Upload.submitfile.value;
if(!im.src)
    im.src = document.getElementById('submitfile').value;
    alert(im.src);
    alert(im.width);
    alert(im.height);
    alert(im.fileSize);

}