function decide(){
var u = new SpeechSynthesisUtterance();
	if(document.info.height.value == "" && document.info.weight.value == ""){
	alert("身長、体重が入力されていません");
	return false;
	}
	if(document.info.height.value == ""){
	alert("身長が入力されていません");
	return false;
	}
	if(document.info.weight.value == ""){
	alert("体重が入力されていません");
	return false;
	}
var hm = document.info.height.value / 100;
var bmi = document.info.weight.value / (hm * hm);
if(bmi < 18.5){
	status = "thin";
}else if(bmi < 25.0){
	status = "normal";
}else if(bmi < 30.0){
	status = "fat";
}else{
	status ="very fat";
}
u.text = "You are" + status;
u.lang = 'en-US';
u.rate = 1.2;
speechSynthesis.speak(u);
return true;
}