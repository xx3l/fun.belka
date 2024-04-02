<?php 
// simple logger for customers to log datetime and some info 
// - for example - some cookie values
$log = date("d.m.Y H:i:s ").$_COOKIE["sh_username"]."\n";
file_put_contents("1a.log", $log, FILE_APPEND);