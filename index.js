const BooAudio = new Audio('BooSound.m4a');

$("#footerC").hide();
$(document).ready(function(){

	$("#button").mouseover(function(){
		$("#button").css("background", "#ff2020");
	});
	$("p").mouseout(function(){
		$("#button").css("background", "#161616");
	});


	// remove the button and reset opacity when button is clicked
	$("#button").click( function(){


		// stop the hover effect
		$("#button").css("background", "#161616");
		$("#button").unbind('mouseover mouseover');

		// change the text and increase height of button and display start button
		$("#button").animate({height:500},1000);
		$("#button").css('top', '-=300');
		$("#button").html("<p>A family Moves in to a house <br> little do they know that their world is about to turn upside down <br> <br> follow the sign on the entrance and hover over each room to go through the comic! <br> click on the comic panels to zoom in!</p>");
		
		$("#housey").animate({ opacity: 1 }, 100);
		$("#StartButton").css("display","inline");
		});



		$("#StartButton").click( function(){

			// remove the buttons
			$("#StartButton, #button").css("display","none");

		// _____________________________________________________________
		//make story frame in each room appear and remove house outlines
		//user can only tigger effect after user hovers over panels in right order (so we nseted the hover code) 

		//room 1
		$("#R1").hover(function(){
			// make the outlines and signs that guide the user disappear 
			$("#_1,#O1").css("display","none");

			//make the comic panel appear and the next order guide
			$("#C1, #O2").css("display","inline");

			//print this on consol to ensure that code is working
			console.log("room1 hovered over");


			//room 2
			$("#R2").hover(function(){
				$("#_2, #O2").css("display","none");
				$("#C2, #O3").css("display","inline");

				console.log("room2 hovered over");

				//room 3
				$("#R3").hover(function(){
					$("#_3,#O3").css("display","none");
					$("#C3, #O4").css("display","inline");

					console.log("room3 hovered over");

					//room 4
					$("#R4").hover(function(){
						$("#_4,#O4").css("display","none");
						$("#C4, #O5, #C3pt2").css("display","inline");

						//make the "mom" text in panel 3 disappear 
						$("#C3pt2").fadeOut(1500);

						console.log("room4 hovered over");

						//room 5
						$("#R5").hover(function(){
							$("#_5, #O5").css("display","none");


							$("#C5, #O6, #C6").css("display","inline");

							// make image appear and disappear suddenly and play boo audio
							function suddenDisappear(){
								$("#suddenimg").css("display","none");		
							};
							function suddenAppear(){
								$("#suddenimg").css("display","inline");
								BooAudio.play();
								window.setTimeout( suddenDisappear, 300 );
							};
							window.setTimeout( suddenAppear, 10 ); // 
							console.log("room5 hovered over");
							// end of code to make image appear and disappear suddenly and play boo audio

							//room 6
							$("#R6").hover(function(){
								$("#_6, #O6").css("display","none");

								//appear and disappear effect in panel 6
								$("#C7pt2").css("display","inline");
								$("#C7pt2").hide();
								$("#C7pt1").css("display","inline");
								$("#C7pt2").fadeIn(1500);
								console.log("room6 hovered over");

								// display footer
								$("#footerC").fadeIn( "slow");
							});
						});
					});
				});
			});

		});
		// _____________________________________________________________
	});
});