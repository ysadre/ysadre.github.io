function askQuestions() {
var firstName= prompt('What is your firstName');
var lastName= prompt('What is your lastName');
var fullName= firstName+ ' ' + lastName;
console.log ('User is called ' + fullName);

var age= prompt('How old are you?');
age=parseInt(age)

if(age>=18){
	console.log('User is an adult');

} else if (age>=13){
	console.log('User is a teenager');
} else {
	console.log('User is a child')
}

if ((firstName.toLowerCase().trim()=="general") && (lastName.toLowerCase().trim()!=="assembly")){
	console.log('Greetings, General !')
}

var faveColour = prompt('What is your favourite colour?');

faveColour = faveColour.toLowerCase().trim();

if (faveColour == 'red' || 
	faveColour == 'green' || 
	faveColour == 'blue'||
	faveColour == 'yellow')  {

	$('h1').css('color', faveColour);
    }

}   

	


// When the page has loaded
$(function(){
	$('img').on('click', askQuestions);

//When the user clicks an h3
$('h3').on('click', function(){

	//Hide the next element
	$(this).next().slideToggle(300);
	//this selectionne le H3, next selectionne ici le paragraphe juste apres le H3, hide ou toggle pour le cacher (voir photo)
    });

});

