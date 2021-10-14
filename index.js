const BooAudio = new Audio('BooSound.m4a');
var room = document.getElementById("C1");

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
		$("#button").html("<p>A family Moves in to a house <br> little do they know that their world is about to turn upside down <br> <br> follow the sign on the entrance and hover over each room to go through the comic! <br> once you have explored all rooms hover over the comic panels to zoom in!</p>");
		
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
			// make the outlines disappear
			$("#_1,#O1").css("display","none");

			//make the comic panel appear and the next order guide
			$("#C1, #O2").css("display","inline");

			// remove signs that guide the user 
			$("#O1").remove();

			//print this on consol to ensure that code is working
			console.log("room1 hovered over");

			//room 2
			$("#R2").hover(function(){
				$("#_2").css("display","none");
				$("#C2, #O3").css("display","inline");
				$("#O2").remove();

				console.log("room2 hovered over");

				//room 3
				$("#R3").hover(function(){
					$("#_3").css("display","none");
					$("#C3, #O4").css("display","inline");
					$("#O3").remove();

					console.log("room3 hovered over");

					//room 4
					$("#R4").hover(function(){
						$("#_4").css("display","none");
						$("#C4, #O5, #C3pt2").css("display","inline");
						$("#O4").remove();

						//make the "mom" text in panel 3 disappear 
						$("#C3pt2").fadeOut(1500);

						console.log("room4 hovered over");

						//room 5
						$("#R5").hover(function(){
							$("#_5").css("display","none");
							$("#C5, #O6, #C6").css("display","inline");
							$("#O5").remove();

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
								$("#_6").css("display","none");
								$("#O6").remove();

								//appear and disappear effect in panel 6
								$("#C7pt2").css("display","inline");
								$("#C7pt2").hide();
								$("#C7pt1").css("display","inline");
								$("#C7pt2").fadeIn(1500);
								console.log("room6 hovered over");

								// display footer
								$("#footerC").fadeIn( "slow");

								// _____________________________________________________________
								// zoom in effect

								// room1
								$("#C1").mouseover(function(){
									$("#Z1").css("display","inline");
								});
								$("#C1").mouseout(function(){
									$("#Z1").css("display","none");
								});

								// room2
								$("#C2").mouseover(function(){
									$("#Z2").css("display","inline");
								});
								$("#C2").mouseout(function(){
									$("#Z2").css("display","none");
								});

								// room3
								$("#C3").mouseover(function(){
									$("#Z3").css("display","inline");
									$("#C3").css("display","none");
								});
								$("#C3").mouseout(function(){
									$("#Z3").css("display","none");
									$("#C3").css("display","inline");
								});

								// room4
								$("#C4").mouseover(function(){
									$("#Z4").css("display","inline");
								});

								$("#C4").mouseout(function(){
									$("#Z4").css("display","none");
								});

								// room5
								$("#C5").mouseover(function(){
									$("#Z5").css("display","inline");
								});
								$("#C5").mouseout(function(){
									$("#Z5").css("display","none");
								});

								// room6
								$("#C7pt2").mouseover(function(){
									$("#Z6").css("display","inline");
									$("#C7pt1").css("display","none");
								});
								$("#C7pt2").mouseout(function(){
									$("#Z6").css("display","none");
									$("#C7pt1").css("display","inline");
								});

							});
						});
					});
				});
			});
		});
	});
});