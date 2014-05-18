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

	{
		photo:"https://scontent-b.xx.fbcdn.net/hphotos-frc3/t1.0-9/376663_10150451842794789_676954083_n.jpg",
		name:"Chelsie Erickson"
	}
];


$(document).ready(function(){
//about data in footer

var aboutTemplate = _.template ($('#aboutStaff').html(),aboutData);
				$('footer').append(aboutTemplate);

});