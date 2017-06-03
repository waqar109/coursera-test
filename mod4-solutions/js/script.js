var array=new Array();
array[0]="John";
array[1]="Billy";
array[2]="Jarco";
function filter(letter) {
  for (var i = 0; i < array.length; i++) {

    if (array[i].indexOf(letter) == 0 || 
    	array[i].indexOf(letter.toLowerCase()) == 0)
    	SpeakGoodBye(array[i]);
    	else
    		SpeakHello(array[i]);
  }
}
filter("Jarco");
