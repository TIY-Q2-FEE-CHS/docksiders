var aboutData= [
	{
		photo:"https://s3.amazonaws.com/uploads.hipchat.com/31349/751955/W67YG2LeMysO5MU/brooke-casey-pic.jpg",
		name:"Brooke Casey"
	
	},
	{
		photo:"https://s3.amazonaws.com/uploads.hipchat.com/31349/751945/FgDbKrWpLiXS4mS/me.png",
		name:"Devon Hicks"
	},
	{
		photo:"https://s3.amazonaws.com/uploads.hipchat.com/31349/751960/UEzeBpxaXtRbG2X/reallyheadup.jpg",
		name:"Kat Mattison"
	},
	
	{
		photo:"http://i1.sndcdn.com/avatars-000043348921-lnmuj4-crop.jpg?77d7a69",
		name:"Robert Hitt"
	},
];


$(document).ready(function(){
//about data in footer

var aboutTemplate = _.template ($('#aboutStaff').html(),aboutData);
				$('footer').append(aboutTemplate);

});