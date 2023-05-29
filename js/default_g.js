
//フォント用CSSを変更します
function fontChange(f){
var fontSize = '100%'
switch(f){
	case 1: 
		fontSize = '50%';
		break;
	case 2: 
		fontSize = '80%';
}
document.body.style.fontSize = fontSize;
}
