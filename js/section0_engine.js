$(window).ready(function() {
    

    
    
function saveSlices(){
    
    if(bgImg.width && closeImg.width && ctaImg.width){
    bgURL = $('#bgSlice0Preview').text();
	bgWidth = bgImg.width;
	bgHeight = bgImg.height;

   
	closeURL = $('#closeSlice0Preview').text();
	closeWidth = closeImg.width;
	closeHeight = closeImg.height;

    
	ctaURL = $('#ctaSlice0Preview').text();
	ctaWidth = ctaImg.width;
	ctaHeight = ctaImg.height;
        
    checkTheBox();
        
        
    document.getElementById('draggable_parent').style.backgroundImage = 'url(' + bgURL + ')';
    $("#draggable_parent").css('width', bgWidth );
    $("#draggable_parent").css('height', bgHeight );
        
    document.getElementById('draggable_child_cta').style.backgroundImage = 'url(' + ctaURL + ')';
    $("#draggable_child_cta").css('width', ctaWidth );
    $("#draggable_child_cta").css('height', ctaHeight );
        
    document.getElementById('draggable_child_close').style.backgroundImage = 'url(' + closeURL + ')';
    $("#draggable_child_close").css('width', closeWidth );
    $("#draggable_child_close").css('height', closeHeight );
    
    }else{
        alert('Drop all the slices!');
    }
}

function compilePrompt(){

    //var bgURL = $('#bgSlice0Preview').text();
	//var bgWidth = bgImg.width;
	//var bgHeight = bgImg.height;

	//var closeURL = $('#closeSlice0Preview').text();
	//var closeWidth = closeImg.width;
	//var closeHeight = closeImg.height;

	//var ctaURL = $('#ctaSlice0Preview').text();
	//var ctaWidth = ctaImg.width;
	//var ctaHeight = ctaImg.height;

	var promptTemplate_1  = '<div id="ChatMainDiv" style="background-image: url(';
		/*bgURL*/
	var promptTemplate_2  = '); background-attachment: scroll; background-color: transparent; position: fixed; left: 150px; top: 450px; width: ';
		/*bgWidth*/
	var promptTemplate_3  = 'px; height: ';
		/*bgHeight*/
	var promptTemplate_4  = 'px; z-index: 99202; display: block; visibility: visible; background-position: 0px 0px; background-repeat: no-repeat no-repeat;"';
	var promptTemplate_5  = '>\n\n<div id="ChatBackgroundDiv" style="position: absolute; left: 0px; top: 0px; z-index: 9000; display: none;"></div>\n\n';
 	var promptTemplate_6  = '<div id="ChatContentDiv" style="background-color: red; position: absolute; left: 0px; top: 0px; z-index: 9001;"';
 	var promptTemplate_7  = '>\n\n<div id="ChatFlowDiv" style="color: #FFFFFF; font-family: unitweb-medium, arial, sans-serif; font-size: 16px; line-height: 19px; margin: 0px; overflow: hidden; padding: 0px; position: absolute; text-indent: 0px; left: 65px; top: 44px; width: 370px; height: 180px; z-index: 9002; border-width: 0px; text-align: left;letter-spacing: 0px;';
 	var promptTemplate_8  = '">\n\n\n</div>\n\n<div id="ChatStatusDiv" style="display: none;"></div>\n<div style="display: none; height: 26px; left: 51px; position: absolute; top: 324px; width: 339px; z-index: 9005;" id="ChatInputDiv"';
 	var promptTemplate_9  = '>\n<textarea placeholder="Enter your text here..." style="display: none; " id="ChatInputText"></textarea>\n</div>\n<div id="ChatButtonsDiv" style="display: none;"></div>\n\n<div';
 	var promptTemplate_10 = ' style="cursor: pointer; position: absolute; left: 425px; top: 230px; width: ';
 		/*ctaWidth*/
 	var promptTemplate_11 = 'px; height: ';
 		/*ctaHeight*/
 	var promptTemplate_12 = 'px; z-index: 9002; opacity: 1; background-image: url(';
 		/*ctaURL*/
 	var promptTemplate_13 = '); background-attachment: scroll; background-color: transparent; background-position: 0px 0px; background-repeat: no-repeat;" onmouseover="this.style.opaci'
 	var promptTemplate_14 = 'ty = '+'0.8'+'" onmouseout="this.style.opacity = '+'1'+'" onclick="VeAPI.Chat.convertClick('+"'ChatLinkCTA1'"+')"></d';
 	var promptTemplate_15 = 'iv>\n</div>\n\n<div id="WindowBarDiv" style="background-color: #d3d3d3; position: absolute; left: 4px; top: 6px; z-index: 9994; width: 574px;">\n\n<div id="WindowTittleDiv" style="cursor: move;   margin-left: 0px; margin-right: 0px; position: absolute; left: 50px;top: 20px; width: 300px; height: 60px;z-index: 9995;"></div>\n\n<div id="WindowCloseBtn" style="cursor: pointer; margin-left: 0px; margin-right: 0px; position: absolute; left: 515px; top: 35px; width: ';
 		/*closeWidth*/
 	var promptTemplate_16 = 'px; height: ';
 		/*closeHeight*/
 	var promptTemplate_17 = 'px; z-index: 9998; opacity: 1; background-image: url(';
 		/*closeURL*/
 	var promptTemplate_18 = '); background-attachment: scroll; background-color: transparent; background-position: 0px 0px; background-repeat: no-repeat;" onmouseover="this.style.opacity = '+'0.8'+'" onmouseout="this.style.opacity = '+'1'+'"></div>\n\n</div>\n\n</div>';


	document.getElementById('outcomeTemplate').innerHTML = promptTemplate_1 + bgURL + promptTemplate_2 + bgWidth + promptTemplate_3 + bgHeight + promptTemplate_4 + promptTemplate_5 + promptTemplate_6 + promptTemplate_7 + promptTemplate_8 + promptTemplate_9 + promptTemplate_10 + ctaWidth + promptTemplate_11 + ctaHeight + promptTemplate_12 + ctaURL + promptTemplate_13 + promptTemplate_14 + promptTemplate_15 + closeWidth + promptTemplate_16 + closeHeight + promptTemplate_17 + closeURL + promptTemplate_18 ;

	document.getElementById('WindowCloseBtn').onclick = function(){
			document.getElementById('ChatMainDiv').style.visibility = 'hidden';
		}

}


//Grabbing needed elements

	var outcomeTemplate = document.getElementById('outcomeTemplate');
    $('#submitButton0').click( saveSlices );


//ONLOAD ACTIONS============================================
//
//
//
    
    
    function preventDefault(e) {
    	e.preventDefault();
	}

	$('div.module_content').bind('drop dragover', preventDefault);
    
	$('#eraseButton0').bind('click', function () {

	    $('#bgSlice0Preview').text('');
	    $('#closeSlice0Preview').text('');
	    $('#ctaSlice0Preview').text('');

	    $('#bgSlice0').val('');
	    $('#bgSlice0').css("backgroundColor", "white");
	    $('#closeSlice0').val('');
	    $('#closeSlice0').css("backgroundColor", "white");
	    $('#ctaSlice0').val('');
	    $('#ctaSlice0').css("backgroundColor", "white");

	    $('#bgSlice0sizePreview').text('');
	    $('#closeSlice0sizePreview').text('');
	    $('#ctaSlice0sizePreview').text('');

	    console.log('Erased!');
	});

//PROMPT ACTIONS

	$('#bgSlice0').bind('drop', function(event){
		bgURL = event.originalEvent.dataTransfer.getData("URL");
		
		bgImg.onload = function(){
			console.log('Image width: ' + bgImg.width + 'px; Image height: ' + bgImg.height + 'px;');
	    	$('#bgSlice0sizePreview').text(bgImg.width+'x'+bgImg.height);
		};
		bgImg.src = bgURL;

		var bgElem = document.createElement('a');
		bgElem.href = bgURL;
		bgElem.protocol = 'https:';
		bgURL = bgElem.href;

	    $('#bgSlice0Preview').text(bgURL);

	    $(this).css('background-color','green');
	    $(this).blur();
		console.log('BG dropped!');	    
	});

	$('#closeSlice0').bind('drop', function(event){
		closeURL = event.originalEvent.dataTransfer.getData("URL");
		
		closeImg.onload = function(){
			console.log('Image width: ' + closeImg.width + 'px; Image height: ' + closeImg.height + 'px;');
	    	$('#closeSlice0sizePreview').text(closeImg.width+'x'+closeImg.height);
		};
		closeImg.src = closeURL;

		var closeElem = document.createElement('a');
		closeElem.href = closeURL;
		closeElem.protocol = 'https:';
		closeURL = closeElem.href;

	    $('#closeSlice0Preview').text(closeURL);

	    $(this).css('background-color','green');
	    $(this).blur();
		console.log('close dropped!');	  	    
	});

	$('#ctaSlice0').bind('drop', function(event){
		ctaURL = event.originalEvent.dataTransfer.getData("URL");
		
		ctaImg.onload = function(){
			console.log('Image width: ' + ctaImg.width + 'px; Image height: ' + ctaImg.height + 'px;');
	    	$('#ctaSlice0sizePreview').text(ctaImg.width+'x'+ctaImg.height);
		};
		ctaImg.src = ctaURL;

		var ctaElem = document.createElement('a');
		ctaElem.href = ctaURL;
		ctaElem.protocol = 'https:';
		ctaURL = ctaElem.href;

	    $('#ctaSlice0Preview').text(ctaURL);

	    $(this).css('background-color','green');
	    $(this).blur();
		console.log('CTA dropped!');	      
	});

	$('#bgSlice0').bind('click', function(event){
	    $(this).blur();
	});

	$('#closeSlice0').bind('click', function(event){
	    $(this).blur();
	});

	$('#ctaSlice0').bind('click', function(event){
	    $(this).blur();
	});

	console.log('Engine loaded!');

	
});