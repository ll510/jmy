
// 计算总金额,总数

let btn=$(".bTn");
var t=$(".tb");
function  calTotalMoney(){
	let totalMoney=0;
	let totalCount=0;
	let price=$(".price");
	for(let i=0;i<btn.length;i++){
		totalMoney += parseInt(btn[i].value)*parseFloat(price[i].firstElementChild.innerHTML);
		totalCount += parseInt(btn[i].value);
	};
	$("#totalMoney").innerHTML=totalMoney.toFixed(2);
	$("#totalCount").innerHTML=totalCount;
}
for(let i=0;i<btn.length;i++){

	btn[i].onclick=function(){
			
		calTotalMoney();
	}
	
}
// 删除商品
function deleteGoods(num,node){
	let box = node.parentNode.parentNode.parentNode;
	box.remove()
	
	calTotalMoney();
}
let deletes=$(".delete");

for(let i=0;i<deletes.length;i++){
	this.index=i;
	deletes[i].onclick=function(){
		if(confirm("确认要删除吗?")){
		deleteGoods(i,this);
			}
	}
}

function $(str){
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}