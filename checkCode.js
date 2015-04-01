$(document).ready(function (){
	createCode();
	})

var info1 = "<img src='/images/accInfo.gif'>"//信息
var info2 = "<img src='/images/accTg.gif'>"//通过
var info3 = "<img src='/images/accNo.gif'>"//未通过
var code;
//在全局界说验证码
//发生验证码
function createCode() {
//$("#yanzheng").text()="";
var Jscode=document.getElementById("yanzheng");
    code = "";
    var codeLength = 4; //验证码的长度
    var random = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); //随机数
    for (var i = 0; i < codeLength; i++) {
        //轮回操纵
        var charIndex = Math.floor(Math.random() * 34); //取得随机数的索引
        code += random[charIndex]; //按照索引取得随机数加到code上
    }
   Jscode.innerHTML=code; //把code值赋给验证码
   

  
}
//校验验证码
function validate() {
    var inputCode = $("#lgcode").val().toUpperCase(); //取得输入的验证码并转化为大写
    var objQueryStat = document.getElementById("lginfo");
    if (inputCode.length <= 0) {
        //若输入的验证码长度为0 
        //alert("请输入验证码！"); //则弹出请输入验证码
        objQueryStat.innerHTML = "<font color=red>请输入验证码！</font>";
    } else if (inputCode != code) {
        //若输入的验证码与发生的验证码纷歧致时
        //alert("验证码输入错误！"); //则弹出验证码输入错误
        objQueryStat.innerHTML = "<font color=red>验证码输入错误！</font>";
        createCode(); //革新验证码
    } else { //输入正确时
        //alert("^-^"); //弹出^-^
        Login();
    }
}


function lgreset(){
	$("#lguid").val("");
	$("#lgpwd").val("");
	$("#lgcode").val("");
	createCode();
}

function Login(){
	var uid= $("#lguid").val();
	var pwd= $("#lgpwd").val();
	var objQueryStat = document.getElementById("lginfo");
	if(uid.length>15||uid.length<1){
		 objQueryStat.innerHTML = "<font color=red>请输入正确的用户名！</font>";
	}else if(pwd.length>15||pwd.length<1){
		objQueryStat.innerHTML = "<font color=red>请输入正确的密码！</font>";
		}else{
			alert("OK");
			//AJAX
		}
}
