function checkUserName(ssn)
{
	if(ssn.length<3 || ssn.length>18)
	{
//		alert("请输入正确的用户名，用户名长度为3-18位!");
		document.getElementById("usernameErr").innerHTML="<font color='red'>请输入正确的用户名，用户名长度为3-18位!</font>";
		form.username.focus();
		return false;
	}
	if(isWhiteWpace(ssn))//不好用
	{
		alert("请输入正确的用户名，用户名中不能包含空格");
		form.username.focus();
		return false;
	}
	
	document.getElementById("usernameErr").innerHTML="";
	return true;
}