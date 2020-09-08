import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
function component(){
	var element = document.createElement('div');
	
	element.innerHTML = _.join(['hello','webpack'],' ');
	element.classList.add('hello');
	
	//将图片导入现有的div
	var myIcon = new Image();
	myIcon.src = Icon;
	element.appendChild(myIcon);
	
	return element;
}

document.body.appendChild(component());