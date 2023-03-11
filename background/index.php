<?php
$prefix = "/background/";
$url = glob('*');
header( 'Location: ' . $prefix . $url[array_rand($url)] );
?>