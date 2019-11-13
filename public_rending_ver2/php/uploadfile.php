<?php

include('../../conn/conn.php');
mysqli_set_charset($conn,"utf8");
$target_dir = "../../bminsu/uploads/";
$reqKey = $_POST['reqkey'];
$target_file = $target_dir . $reqKey.'-'.basename($_FILES["fileToUpload"]["name"]);
$uploadOk = 1;


// 파일 확장자 저장
$imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);

// 이미지가 실제 이미지인지 확인
if(isset($_POST["submit"])) {
$check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
if($check !== false) {
echo "File is an image - " . $check["mime"] . ".";
$uploadOk = 1;
} else {
    echo "File is not an image.";
    $uploadOk = 0;
    }
}
// 파일이 존재하는지 확인
if (file_exists($target_file)) {
echo "Sorry, file already exists.";
$uploadOk = 0;
?>
<script>
alert('죄송합니다 이미 존재하는 파일명입니다 파일이름을 변경하고 시도해 주세요');
location.href='../upload.html';
</script>
<?php
}
// 파일 사이즈 확인
if ($_FILES["fileToUpload"]["size"] > 300000) {
$uploadOk = 0;
?>
<script>
alert('파일 사이즈가 너무 큽니다.(20메가 이하로 업로드 해주세요');
location.href='../upload.html';
</script>
<?php
}
// 특정 파일 포맷만 허용
if($imageFileType != "jpg"  && $imageFileType != "jpeg"
&& $imageFileType != "gif" ) {
$uploadOk = 0;
?>
<script>
alert('jpg 파일형만 지원 지원없음');
location.href='../upload.html';
</script>
<?php
}
// $uploadOk 가 에러로 0 으로 성정되었는지 확인
if ($uploadOk == 0) {
echo "Sorry, your file was not uploaded.";
// 모든 것이 괜찮다면 파일 업로드 시도
} else {
if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
    $sql = "UPDATE `public_rending_data` SET `newImg`='$target_file.".".$imageFileType' WHERE `idx`='$reqKey'";
    $conn = mysqli_query($conn,$sql);
?>

<script>
    alert('신청 완료되었습니다')
    location.href='../controller.html'
</script>
<?php
} else {
echo "Sorry, there was an error uploading your file.";
}
}
?>
