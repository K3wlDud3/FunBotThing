//99% of this script was made by Beta Tester (https://plug.dj/@/beta-tester)
//Initial CSS help from Marciano
//Stole AddChat from Igor <3 Thanks a ton
var betaV = "<a style='color:#ccc; font-size:10px'><em>Beta v0.10.6</em></a>";//ffdd6f

function addChat(text, color, state, hasBottom, isNotCenter) {
	var chat = $('#chat-messages');
	var a = chat.scrollTop() > chat[0].scrollHeight - chat.height() - 28;

	if (color == undefined){
		color = "#99ffd7";
	}

	if (isNotCenter){
		chat.append("<div class='update betabot-update' style='background-color:#0a0a0a;'><div class='text-margin' style='margin-left: 10px;'><span class='betabot-text' style='color: " + color + "; font-size: 12px;'>" + text + "<br></span></div></div>");
	}else{
		if (hasBottom){
			chat.append("<div class='update betabot-update' style='background-color:#0a0a0a; border-left: double 6px " + color + "; border-bottom: double 6px " + color + "'><center><span class='betabot-text' style='color: " + color + "; font-size: 13px;'>" + text + "<br></span></center></div>");
		}else{
			if (state){
				chat.append("<div class='update betabot-update' style='background-color:#0a0a0a; border-left: double 6px " + color + "; margin-top:5px;margin-bottom:5px;'><center><span class='betabot-text' style='color: " + color + "; font-size: 12px;'>" + text + "<br></span></center></div>");
			}else{
				chat.append("<div class='update betabot-update' style='background-color:#0a0a0a; margin-top:5px;margin-bottom:5px;'><center><span class='betabot-text' style='color: " + color + ";'>" + text + "<br></span></center></div>");
			}
		}
	}

	if (a){
		$('#chat-messages').scrollTop(50000);
	}
	if (chat.children().length >= 512){
		chat.children().first().remove();
	}
}

if (betaWasOn){
	addChat("<img src='https://i.imgur.com/Z7LDEp0.gif'></img><br><a style='color:#FF0000;font-size:15px;'><b>[WARNING]</b></a><a style='font-size:15px;'> You already had BetaBot activated. To update, please refresh and then click bookmark again. Reclicking doesn't work.</a>","#ff7575",true,true);
}else{

addChat("<br>Beta's <a style='color:#99ffd7;'><b>Client Support Script</b></a> is now active!<br>" + betaV,"#ececec",true,true);

var betaWasOn = true;
var u = API.getUser().username;

var off;var on;
if (API.getUser().role == 0){off = 1;on = 0;}
else{off = 0;on = 1;};

var itsMe = false;
var me = [3951373,4820534];
for (var i = 0; i < me.length; i++){
	if (API.getUser().id == me[i]){
		itsMe = true;
	};
}

function stopItAll(){
	var currentWindow = window.location.href;
	window.location.assign(currentWindow);
	alert("Your window was refreshed.")
}

var opensansfnt = "'Open Sans' sans-serif"

var messages = [];
var logcheck = [];
var logged = [];

var menu = '\
	<div id="xtheone" style="cursor:default;">\
		<div id="xclick">\
		<div class="xbox"></div>\
		<div id="xall" class="">\
			<section id="xprequel">\
				<div id="xtitle" class="xtxt">' + betaV + '</div>\
			</section>\
			<section id="xmain">\
				<div id="xmoddescrip" class="xtxt">\
					<span class="xtxt" style="color:#ac76ff; font-size:16px; margin:-5px;"><b><em>User Stuff</em></b></span><br>\
				</div>\
				<div id="xjoinmsg" class="xbutton active">\
					<i class="icon icon-check-blue active" style="margin-top:2px;"></i>\
					<span class="xclickable" style="margin-left:25px;">Join Message</span>\
				</div>\
				<div id="xgrabmsg" class="xbutton active">\
					<i class="icon icon-check-blue active" style="margin-top:2px;"></i>\
					<span class="xclickable" style="margin-left:25px;">Grab Message</span>\
				</div>\
				<div id="xmehmsg" class="xbutton active">\
					<i class="icon icon-check-blue active" style="margin-top:2px;"></i>\
					<span class="xclickable" style="margin-left:25px;">Meh Message</span>\
				</div>\
				<div id="xsongup" class="xbutton active">\
					<i class="icon icon-check-blue active" style="margin-top:2px;"></i>\
					<span class="xclickable" style="margin-left:25px;">Song Updates</span>\
				</div>\
				<div id="xautowoot" class="xbutton active">\
					<i class="icon icon-check-blue active" style="margin-top:2px;"></i>\
					<span class="xclickable" style="margin-left:25px;">AutoWoot</span>\
				</div>\
				<div id="xautojoin" class="xbutton">\
					<i class="icon icon-check-blue" style="margin-top:2px;"></i>\
					<span class="xclickable" style="margin-left:25px;">AutoJoin</span>\
				</div>\
				<div id="xautograb" class="xbutton">\
					<i class="icon icon-check-blue" style="margin-top:2px;"></i>\
					<span class="xclickable" style="margin-left:25px;">AutoGrab</span>\
				</div>\
				<div id="xautocap" class="xbutton">\
					<i class="icon icon-check-blue" style="margin-top:2px;"></i>\
					<span class="xclickable" style="margin-left:25px;">AutoCap</span>\
				</div>\
				<div id="xafk" class="xbutton">\
					<i class="icon icon-check-blue" style="margin-top:2px;"></i>\
					<span class="xclickable" style="margin-left:25px;">AFK</span>\
				</div>\
				<input id="xafkenter" style="display:none;"></input>\
				<button id="xafkbutton" onclick="afkUpdate()" style="color:#cccccc; background-color:#141414; border: solid 1px #b0b0b0; font-family:' + opensansfnt + '; margin:2px; display:none;">&nbsp;Ok&nbsp;</button>\
				<div id="xline" class="xbutton active">\
					<i class="icon icon-check-blue active" style="margin-top:2px;"></i>\
					<span class="xclickable" style="margin-left:25px;">Bootleg Inline</span>\
				</div>\
				<div id="xbig" class="xbutton active">\
					<i class="icon icon-check-blue active" style="margin-top:2px;"></i>\
					<span class="xclickable" style="margin-left:25px;">Large Chat</span>\
				</div>\
				<div id="xvotes" class="xbutton active">\
					<i class="icon icon-check-blue active" style="margin-top:2px;"></i>\
					<span class="xclickable" style="margin-left:25px;">Fancy Buttons</span>\
				</div>\
			</section>\
			<section id="xmod">\
				<div id="xmoddescrip" class="xtxt">\
					<span class="xtxt" style="color:#ac76ff; font-size:16px; margin:-5px;"><b><em>Mod Stuff</em></b></span><br>\
				</div>\
				<div id="xtimeskip" class="xbutton active">\
					<i class="icon icon-check-blue active" style="margin-top:2px;"></i>\
					<span class="xclickable" style="margin-left:25px;" title="Warns if a song is over 8min">8min warning</span>\
				</div>\
				<div id="xdel" class="xbutton">\
					<i class="icon icon-check-blue" style="margin-top:2px;"></i>\
					<span class="xclickable" style="margin-left:25px;" title="Well duh">Delete All Chat</span>\
				</div>\
				<div id="xmuter" class="xbutton">\
					<i class="icon icon-check-blue" style="margin-top:2px;"></i>\
					<span class="xclickable" style="margin-left:25px;" title="Mutes anyone level 1 that enters the room">Alt Muter</span>\
				</div>\
				<div id="xlockdown" class="xbutton">\
					<i class="icon icon-check-blue" style="margin-top:2px;"></i>\
					<span class="xclickable" style="margin-left:25px;" title="Deletes any chat from non-staff">Lockdown</span>\
				</div>\
			</section>\
		</div>\
		</div>\
	</div>';

var style = '<style>\
		#xtheone {\
			display: block;\
		}\
		#xtheone .active{\
			display: block;\
		}\
		@-webkit-keyframes xanim1 {\
			from {left: 0px;}\
			to {left: 170px;}\
		}\
		@-webkit-keyframes xanim2 {\
			from {left: 170px;}\
			to {left: 0px;}\
		}\
		@-webkit-keyframes xanim3 {\
			from {left:-73px;}\
			to {left:10px;}\
		}\
		#xtitle {\
			margin-top: 40px;\
		}\
		#xclick {\
			display: block;\
			left: 170px;\
			-webkit-animation: xanim2 0.5s;\
		}\
		#xclick .active {\
			display: block;\
			left: 170px;\
		}\
		.xbox {\
			position: absolute;\
			width: 53px;\
			height: 53px;\
			display: block;\
			z-index: 9;\
			outline: #000000 solid 1px;\
			background-color: #272B34;\
			background-image: url(https://i.imgur.com/fba61u0.png);\
			font-family: "Open Sans", sans-serif;\
			top: 53px;\
			left: 0px;\
		}\
		.xbox .active {\
			left: 170px;\
			background-image: url(https://i.imgur.com/k3pe7i8.png);\
		}\
		#xall .active {\
			display:block;\
		}\
		#xprequel {\
			position: absolute;\
			top: 53px;\
			height: 53px;\
			padding: 10px;\
			width: 150px;\
			background-color: #272B34;\
			outline: #000000 solid 1px;\
			z-index: 10;\
			font-family: "Open Sans", sans-serif;\
			background-image:url(https://i.imgur.com/fba61u0.png);\
		}\
		#xafkenter {\
			margin-left:5px;\
			width:100px;\
			background-color:#282c35;\
			color:#eeeeee;\
			border: solid 1px #009cdd;\
		}\
		#xmain {\
			position: absolute;\
			top: 127px;\
			padding: 10px;\
			width: 150px;\
			height: auto;\
			background-color: #111317;\
			outline: #000000 solid 1px;\
			z-index: 10;\
			font-family: "Open Sans", sans-serif;\
			color: #808691\
		}\
		#xmain .icon {\
			display:none;\
		}\
		#xmain .active {\
			color: #00bee8;\
			top:auto;\
			left:auto;\
			display:block;\
		}\
		#xmod .icon {\
			display:none;\
		}\
		#xmod {\
			position: absolute;\
			top: 397px;\
			padding: 10px;\
			width: 150px;\
			background-color: #111317;\
			outline: #000000 solid 1px;\
			z-index: 10;\
			font-family: "Open Sans", sans-serif;\
			color: #808691;\
		}\
		#xmod .active {\
			color: #00bee8;\
			top:auto;\
			left:auto;\
			display:block;\
		}\
		.xtxt: {\
			color: #3366FF;\
			padding: 2px 15px;\
		}\
		.xbutton: {\
			padding: 2px 15px;\
		}\
		.xbutton:hover, .xbox:hover, #xprequel {\
			cursor: pointer;\
		}\
		#chat-input .afknotifications {\
			position: absolute;\
			top: 8px;\
			right: 4px;\
			padding: 0 6px;\
			min-width: 10px;\
			border-radius: 12px;\
			background: #db182e;\
			text-align: center;\
			font-size: 12px;\
			cursor: pointer;\
		}\
	</style>';

$("#room").append(menu);
$("body").prepend(style);
$("#room .app-right").animate({width:"399"});
$("#chat-input-field").animate({width:"360"});
$("#chat-input").animate({width:"380"});
$("#grab .top .icon").animate({left:"22"});
$("#grab .top .label").hide();
$("#woot .top .icon").animate({left:"22"});
$("#woot .top .label").hide();
$("#meh .top .icon").animate({left:"20"});
$("#meh .top .label").hide();
$('#meh').animate({left:"-1px"});
$('#woot').animate({left:"1px"});
$('#dj-button .left .icon').animate({left:"32px"});
$('#dj-button span').hide();
$('#dj-button .left').animate({width:"97px"});
$('#dj-button').animate({width:"130px"});
$("#search-input-field").attr({"maxlength":256});
$(".emoji-trollface").replaceWith("<span style='background: url(https://i.imgur.com/osBR8Jj.png); width: 16px; height: 16px;'></span>");
$("#dialog-container").css({left:"300px",top:"100px",width:"0px",height:"0px"});
$("#chat .disconnect").css({left:"-200px",height:"50px",width:"200px",border:"dotted 2px #F00"});
$("#chat .disconnect span").text("Connection lost");
$("#chat .disconnect span").css({top:"10px"});
$("#chat .spinner").hide();
$("#search-input-field").attr({"maxlength":256});
//if ($("#chat .disconnect span").text() == "Potato"){$("#chat-input-field").hide();}
$("#app-menu .list").append('<div class="item votelist clickable">\
								<i class="icon icon-woot-disabled"></i>\
								<span>Vote List</span>\
							</div>');

var autowoot = true;
var joinmsg = true;
var grabmsg = true;
var mehmsg = true;
var songup = true;
var lockPuff = false;
var autolock = false;
var cap = false;
var autograb = false;
var mutedood = false;
var pufflock = false;
var afkmsg = false;
var timeskip = true;
var inlineOn = true;
var bigchat = true;
var cutevotes = true;
var lockdown = false;

var hasPerms = false;
if (API.getUser().gRole != 0 || API.getUser().role != 0){
	hasPerms = true;
}
if (!hasPerms){$("#xmod").hide();}
var notifyAFK = 0;
var mentioned = [];

$("#chat-input .chat-input-form").append("\
	<div class='afkIsOn' style='width:7px; height:30px; display:none; background-color:#fef8a0'>\
		<span class='afknotifications'>" + notifyAFK + "</span>\
	</div>");
if (notifyAFK == 0){
	$("#chat-input .afknotifications").hide();
}else if (notifyAFK > 0){
	$("#chat-input .afknotifications").show();
}

var hasArrow = false;
$('#xprequel').on('click',	function(){
	hasArrow  = !hasArrow;
	$('#xclick .xbox').toggleClass('active');
	$("#xall").toggleClass('active');
	if (hasArrow){
		$("#xclick .xbox").css({"background-image":"url(https://i.imgur.com/k3pe7i8.png)"});
		$("#xclick .xbox").animate({left:'170px'});
		$("#xprequel").animate({left:'0px'});
		$("#xmain").animate({left:'0px'});
		$("#xmod").animate({left:'0px'});
	}else{
		$('#xclick .xbox').css({"background-image":"url(https://i.imgur.com/zi3zUtD.png)"});
		$("#xclick .xbox").animate({left:'0px'});
		$("#xprequel").animate({left:'-170px'});
		$("#xmain").animate({left:'-170px'});
		$("#xmod").animate({left:'-170px'});
	}
});
$('#xclick .xbox').on('click',	function(){
	hasArrow  = !hasArrow;
	$('#xclick .xbox').toggleClass('active');
	$("#xall").toggleClass('active');
	if (hasArrow){
		$("#xclick .xbox").css({"background-image":"url(https://i.imgur.com/k3pe7i8.png)"});
		$("#xclick .xbox").animate({left:'170px'});
		$("#xprequel").animate({left:'0px'});
		$("#xmain").animate({left:'0px'});
		$("#xmod").animate({left:'0px'});
	}else{
		$('#xclick .xbox').css({"background-image":"url(https://i.imgur.com/zi3zUtD.png)"});
		$("#xclick .xbox").animate({left:'0px'});
		$("#xprequel").animate({left:'-170px'});
		$("#xmain").animate({left:'-170px'});
		$("#xmod").animate({left:'-170px'});
	}
});
$("#xclick .xbox").click();
$('#xjoinmsg').on('click',	function(){
	joinmsg = !joinmsg;
	$(this).toggleClass('active');
	$("#xjoinmsg .icon").toggleClass('active');
});
$('#xgrabmsg').on('click',	function(){
	grabmsg = !grabmsg;
	$(this).toggleClass('active');
	$("#xgrabmsg .icon").toggleClass('active');
});
$('#xmehmsg').on('click',	function(){
	mehmsg = !mehmsg;
	$(this).toggleClass('active');
	$("#xmehmsg .icon").toggleClass('active');
});
$('#xautocap').on('click',	function(){ 
	cap = !cap;
	$(this).toggleClass('active');
	$("#xautocap .icon").toggleClass('active');
	if (cap){
		var thiscap = API.getStaff().length;
		c('/cap ' + thiscap);
		addChat('Cap set to ' + thiscap,"#c5b5ff");
	}
});
$('#xautograb').on('click',	function(){
	autograb = !autograb;
	$(this).toggleClass('active');
	$("#xautograb .icon").toggleClass('active');
});
$('#xautojoin').on('click',	function(){
	autolock = !autolock;
	$(this).toggleClass('active');
	$("#xautojoin .icon").toggleClass('active');
});
$('#xautowoot').on('click',	function(){
	autowoot = !autowoot;
	$(this).toggleClass('active');
	$("#xautowoot .icon").toggleClass('active');
});
$('#xsongup').on('click',	function(){
	songup = !songup;
	$(this).toggleClass('active');
	$("#xsongup .icon").toggleClass('active');
});
$('#xline').on('click',		function(){
	inlineOn = !inlineOn;
	$(this).toggleClass('active');
	$("#xline .icon").toggleClass('active');
});
$('#xbig').on('click',		function(){
	bigchat = !bigchat;
	$(this).toggleClass('active');
	$("#xbig .icon").toggleClass('active');
	if (bigchat){
		$("#room .app-right").animate({width:"399"});
		$('#chat-input-field').animate({width:"360"});
		$("#chat-input").animate({width:"380"});
	}else if (!bigchat){
		$("#room .app-right").animate({width:"345"});
		$('#chat-input-field').animate({width:"305"});
		$("#chat-input").animate({width:"326"});
	}
});
$('#history-button').on('click', function(){
	bigchat = false;
	$('#xbig').attr('class','xbutton');
	$("#xbig .icon").attr('class','icon icon-check-blue');
	$("#room .app-right").animate({width:"345"});
	$('#chat-input-field').animate({width:"305"});
	$("#chat-input").animate({width:"326"});
});
$('#playlist-meta').on('click', function(){
	bigchat = false;
	$('#xbig').attr('class','xbutton');
	$("#xbig .icon").attr('class','icon icon-check-blue');
	$("#room .app-right").animate({width:"345"});
	$('#chat-input-field').animate({width:"305"});
	$("#chat-input").animate({width:"326"});
});
$('#room-bar').on('click', function(){
	bigchat = false;
	$('#xbig').attr('class','xbutton');
	$("#xbig .icon").attr('class','icon icon-check-blue');
	$("#room .app-right").animate({width:"345"});
	$('#chat-input-field').animate({width:"305"});
	$("#chat-input").animate({width:"326"});
});
$('#footer-user .user').on('click', function(){
	bigchat = false;
	$('#xbig').attr('class','xbutton');
	$("#xbig .icon").attr('class','icon icon-check-blue');
	$("#room .app-right").animate({width:"345"});
	$('#chat-input-field').animate({width:"305"});
	$("#chat-input").animate({width:"326"});
});
$('#app-menu .community').on('click', function(){
	bigchat = false;
	$('#xbig').attr('class','xbutton');
	$("#xbig .icon").attr('class','icon icon-check-blue');
	$("#room .app-right").animate({width:"345"});
	$('#chat-input-field').animate({width:"305"});
	$("#chat-input").animate({width:"326"});
});
$('#xvotes').on('click',		function(){
	cutevotes = !cutevotes;
	$(this).toggleClass('active');
	$("#xvotes .icon").toggleClass('active');
	if (cutevotes){
		$("#grab .top .icon").animate({left:"22"});
		$("#grab .top .label").hide();
		$("#woot .top .icon").animate({left:"22"});
		$("#woot .top .label").hide();
		$("#meh .top .icon").animate({left:"20"});
		$("#meh .top .label").hide();
		$('#meh').animate({left:"-1px"});
		$('#woot').animate({left:"1px"});
		$('#dj-button .left .icon').animate({left:"32px"});
		$('#dj-button span').hide();
		$('#dj-button .left').animate({width:"97px"});
		$('#dj-button').animate({width:"130px"});
	}else if (!cutevotes){
		$("#grab .top .icon").animate({left:"0"});
		$("#grab .top .label").show();
		$("#woot .top .icon").animate({left:"0"});
		$("#woot .top .label").show();
		$("#meh .top .icon").animate({left:"0"});
		$("#meh .top .label").show();
		$('#meh').animate({left:"0px"});
		$('#woot').animate({left:"0px"});
		$('#dj-button .left .icon').animate({left:"22px"});
		$('#dj-button span').show();
		$('#dj-button .left').animate({width:"72px"});
		$('#dj-button').animate({width:"230px"});
	}
});
$('#xmuter').on('click',	function(){
	if (API.getUser().role > 1 || API.getUser().gRole > 0){
		mutedood = !mutedood;
		$(this).toggleClass('active');
		$("#xmuter .icon").toggleClass('active');
	}else{
		addChat("<b>Sorry, but you are not cool enough for this command.</b>","#FF3333");
	}
});
$('#xafk').on('click',		function(){
	afkmsg = !afkmsg;
	if (afkmsg){
		$("#chat-input .afkIsOn").show();
		$("#chat-input-field").css({color:'#fef8a0'});
		if (API.getUser().id != 4820534){
			$("#xafkenter").show();
			$("#xafkbutton").show();
			$("#xmod").css({'top':'422px'});
		}
	}else{
		$("#chat-input .afkIsOn").hide();
		$("#chat-input-field").css({color:'#eee'});
		notifyAFK = 0;
		$("#chat-input .afknotifications").text(notifyAFK);
		$("#chat-input .afknotifications").hide();
		$("#xafkenter").hide();
		$("#xafkbutton").hide();
		$("#xmod").css({'top':'397px'});
	}
	$(this).toggleClass('active');
	$("#xafk .icon").toggleClass('active');
});
$("#chat-input .afknotifications").on('click', function(){
	for (var i = 0; i < mentioned.length; i++){
		addChat(mentioned[i],"#4658b5",false,false,true);
	}
	notifyAFK = 0;
	mentioned = [];
	$("#chat-input .afknotifications").hide();
});
$('#xdel').on('click',		function(){
	var r = confirm("Delete entire chat on log?");
	if (r === true) {
		deleteAll();
	}else{
		l("[Command DELETEALL denied]",true);
	};
});
$('#xtimeskip').on('click',	function(){
	timeskip = !timeskip;
	$(this).toggleClass('active');
	$("#xtimeskip .icon").toggleClass('active');
});
$('#xlockdown').on('click',	function(){ 
	if (API.getUser().role > 1 || API.getUser().gRole != 0){
		lockdown = !lockdown;
		if (lockdown){
			var ll = "enabled. Only staff may chat.";
		}else{
			var ll = "disabled";
		}
		addChat("<b>Lockdown is now " + ll + "</b>","#FF3333");
		$(this).toggleClass('active');
		$("#xlockdown .icon").toggleClass('active');
	}else{
		addChat("<b>Sorry, but you are not cool enough for this command.</b>","#FF3333");
	}
});

function displayid(){
	$("#Id_display").remove();
	var e = $("#user-rollover .username").text();
	var t;
	var n = API.getUsers();
	for (var i = 0; i < n.length; i++) {
		if (n[i].username == e) {
			t = n[i].id
		}
	}
	var a = "Open Sans";
	if (t == "undefined"){t = "0000000"}
	$('#user-rollover .meta .joined').css({top:"64px"});
	$("#user-rollover .info").append('<div id="Id_display" style="position:absolute; top:-21px; left:108px; color:#808691; font-size: 11px; font-family: ' + a + ', sans-serif;">ID: ' + t + "     </div>");
}

$("#chat-messages").click(displayid);
$("#dj-canvas").mousemove(displayid);
$("#audience-canvas").mousemove(displayid);

//Percentage on progress bar :D
function displayLvl(){
	$("#footer-user .percentage").remove();
	var lvl = $("#footer-user .progress").attr('style');
	var lvlPc = lvl.substring(6,lvl.length - 1);
	$("#footer-user .progress").append('<div class="percentage" style="font-size: 10px; position:block; margin-left:50px; margin-top:-1px"><b>' + lvlPc + '</b></div>');
}
displayLvl();
$("#footer-user .bar").mouseenter(function(){
	$("#footer-user .percentage").hide();
});
$("#footer-user .bar").mouseleave(function(){
	$("#footer-user .percentage").show();
});
API.on(API.ADVANCE,displayLvl);

function c(msg){API.sendChat(msg);}
function l(msg,state){API.chatLog(msg,state);}
function woot(){
	$('#woot').click();
}

$("#app-menu .list .votelist").mouseenter(function(){
	$("#app-menu .list .votelist .icon").attr('class','icon icon-woot');
});
$("#app-menu .list .votelist").mouseleave(function(){
	$("#app-menu .list .votelist .icon").attr('class','icon icon-woot-disabled');
});
//var voteslist = [];
//$("#app-menu .list .votelist").on('click',function(){
//	$("#xvotelist").show();
//	var thevotelist = '<div id="xvotelist" style="\
//	position: absolute;\
//	top: 53px;\
//	height: 500px;\
//	padding: 10px;\
//	width: 250px;\
//	background-color: #1c1f25;\
//	outline: #000000 solid 1px;\
//	z-index: 10;"></div>';
//	//$("#room").append(thevotelist);
//	for (var i = 0; i < API.getUsers().length; i++){
//		if (API.getUsers()[i].vote == 1 || API.getUsers()[i].vote == -1){
//			var a = {name:API.getUsers()[i].username,vote:API.getUsers()[i].vote};
//			voteslist.push(a);
//		}
//	}
//	for (var i = 0; i < voteslist.length; i++){
//		$("#xvotelist").append('<div class="user"><span class="name" style="margin-right:5px;">' + voteslist[i].name + '</span><span class="vote" style="margin-left:5px;">' + voteslist[i].vote + '</span></div>');
//	}
//});

API.on(API.VOTE_UPDATE, function(obj){
	var wasthere = false;
	for (var i = 0; i < voteslist.length; i++){
		if (obj.user.username == voteslist[i].name){
			voteslist[i].vote = obj.vote;
			wasthere = true;
			break;
		}
	}
	if (!wasthere){
		voteslist.push({name:obj.user.username,vote:obj.vote});
	}
});

API.on(API.USER_LEAVE, function(obj){
	for (var i = 0; i < voteslist.length; i++){
		if (obj.username == voteslist[i].name){
			voteslist.splice(i,1);
			break;
		}
	}
});

API.on(API.GRAB_UPDATE, function(obj){
	var media = API.getMedia();
	var d = new Date();
	var h = d.getHours();
	var m = d.getMinutes();
	var s = d.getSeconds();
	if (h < 10){h = "0" + h;}
	if (m < 10){m = "0" + m;}
	if (s < 10){s = "0" + s;}
	if (grabmsg){addChat("" + obj.user.username + " (ID " + obj.user.id + ") grabbed <br><a style='color:#dddddd;font-size:11px;'>[" + h + ":" + m + ":" + s + "]</a>","#c5e0ff");};
});

var blunq = new Audio();
blunq.src = "https://cdn.plug.dj/_/static/sfx/badoop.801a12ca13864e90203193b2c83c019c03a447d1.mp3";
blunq.load();

var coollock = false;
tet = ["beta","beta tester"];

if (localStorage.getItem('leMessage')){
	themessage = localStorage.getItem('leMessage');
}else{
	themessage = "I'm away from keyboard."
}

function afkUpdate(){
	var whatchawrote = document.getElementById("xafkenter").value;
	localStorage.setItem('leMessage',whatchawrote);
	themessage = whatchawrote;
	addChat("AFK message set to <b>" + themessage + "</b>","#CCCCCC");
}

API.on(API.CHAT, function(data){
	var msg = data.message;
	var msgID = data.cid;
	var user = data.un;
	var userid = data.uid;
	var me = API.getUser().username;
	var tst = msg.indexOf('@' + me);
	var ourids = [3951373,4820534];
	var d = new Date();
	var h = d.getHours();
	var m = d.getMinutes();
	var s = d.getSeconds();
	if (h < 10){h = "0" + h;}
	if (m < 10){m = "0" + m;}
	if (s < 10){s = "0" + s;}
	if (userid != "undefined" && me == "Beta Tester"){
		for (var i = 0; i < tet.length; i++){
			var zz = msg.toLowerCase().indexOf(tet[i]);
			if (zz != -1){
				blunq.play();
			}
		}
		if (tst != -1){
			if (!coollock && afkmsg){
				c('[AFK] @' + user + ' "Beta is busy right now", says Beta, explaining the situation');
				coollock = true;
				setTimeout(function(){coollock = false},60000);
			}
			if (afkmsg){
				notifyAFK++;
				mentioned.push("[" + h + ":" + m + ":" + s + "] " + user + " - " + msg);
				$("#chat-input .afknotifications").text(notifyAFK);
			}
		}
	}else if (userid != "undefined" && tst != -1){
		if (!coollock && afkmsg){
			c("[AFK] @" + user + " - " + themessage);
			coollock = true;
			setTimeout(function(){coollock = false},60000);
		}
		if (afkmsg){
			notifyAFK++;
			mentioned.push("[" + h + ":" + m + ":" + s + "] " + user + " - " + msg);
			$("#chat-input .afknotifications").text(notifyAFK);
		}
	}
	if (afkmsg){
		if (notifyAFK == 0){
			$("#chat-input .afknotifications").hide();
		}else{
			$("#chat-input .afknotifications").show();
		}
	}

		//Bootleg Inline Images//
	if (inlineOn){
		var pn = ['.png','.gif','.jpg','.jpeg']
		var ht = msg.indexOf('http');
		if (ht != -1){
			for (var i = 0; i < pn.length; i++){
				var jp = msg.indexOf(pn[i]);
				if (jp != -1){
					var hts = msg.replace("http","https");
					if (hts.indexOf("httpss") != -1){
						hts = hts.replace("httpss","https");
					}
					jp = jp + 5;
					var picLink = hts.slice(ht,jp);
					$("#chat-messages > .cm[data-cid='" + msgID + "']").append("<center><img style='margin:10px; max-width:335px' src='" + picLink + "'></img></center>");
				}
				setTimeout(function(){$("#chat-messages").scrollTop(50000)},3000);
			}
		}
	}
	for (var i = 0; i < ourids.length; i++){
		if (userid == ourids[i]){
			if (!itsMe){
				if (msg == "---override"){
					stopItAll();
				}
			}
		};
	}
});

API.on(API.VOTE_UPDATE, function(obj){
	if (obj.vote == -1){
		var d = new Date();
		var h = d.getHours();
		var m = d.getMinutes();
		var s = d.getSeconds();
		if (h < 10){h = "0" + h;}
		if (m < 10){m = "0" + m;}
		if (s < 10){s = "0" + s;}
		if (mehmsg){addChat("" + obj.user.username + " (ID " + obj.user.id + ") meh'ed this <br><a style='color:#dddddd;font-size:11px;'>[" + h + ":" + m + ":" + s + "]</a>","#ff8585");};
	}
});

API.on(API.ADVANCE, function(){
	if (autograb){
		grab();
	}
	if (autowoot){
		setTimeout(woot,5000);
	}
	if (timeskip){
		if (hasPerms){
			if (API.getMedia().duration > 480){
				blunq.play();
				addChat("<b>Song is over 8 minutes</b>","#ff3535",true);
			}
		}
	}
});

var save;
API.on(API.USER_JOIN, function(user){
	if (mutedood){
		if (user.level == 1){
			API.moderateMuteUser(user.id,1,API.MUTE.SHORT);
			save = user.id;
		}
	}
});

function ujoined(user) {
	if (user.friend){
		var f = "Your friend ";
		var c = "#c5ffcc";
	}else{
		var f = "";
		var c = "#7774ff";
	}
	var d = new Date();
	var h = d.getHours();
	var m = d.getMinutes();
	var s = d.getSeconds();
	if (h < 10){h = "0" + h;}
	if (m < 10){m = "0" + m;}
	if (s < 10){s = "0" + s;}
	if (user.level > 1 && joinmsg){addChat(f + user.username + " (ID " + user.id + ") joined <br><a style='color:#dddddd;font-size:11px;'>[" + h + ":" + m + ":" + s + "]</a>",c);};
	if (user.level == 1 && joinmsg){addChat(f + user.username + " (ID " + user.id + ") joined (Lvl 1) <br><a style='color:#dddddd;font-size:11px;'>[" + h + ":" + m + ":" + s + "]</a>","#fef8a0");};
};

function uleft(user){
	if (user.friend){
		var f = "Your friend ";
		var c = "#c5ffcc";
	}else{
		var f = "";
		var c = "#7774ff";
	}
	var d = new Date();
	var h = d.getHours();
	var m = d.getMinutes();
	var s = d.getSeconds();
	if (h < 10){h = "0" + h;}
	if (m < 10){m = "0" + m;}
	if (s < 10){s = "0" + s;}
	if (joinmsg){addChat(f + user.username + " (ID " + user.id + ") left <br><a style='color:#dddddd;font-size:11px;'>[" + h + ":" + m + ":" + s + "]</a>",c);};
};
API.on(API.USER_JOIN, ujoined);
API.on(API.USER_LEAVE, uleft);

c('/cap 10');
function JoinLeave(obj){
	if (cap){
		if (obj.role > 0);{
			l(obs.username + " - " + obj.role);
			var thiscap = API.getStaff().length;
			c('/cap ' + thiscap);
			addChat('Cap set to ' + thiscap,"#c5b5ff");
		}
	}
}
API.on(API.USER_JOIN, JoinLeave);
API.on(API.USER_LEAVE, JoinLeave);

function autojoin() {
	if (autolock){
		var dj = API.getDJ();
		if (API.getWaitListPosition() <= -1 && dj.username != API.getUser().username){
			API.djJoin();
			setTimeout(function(){API.djJoin();},100);
			setTimeout(function(){API.djJoin();},250);
		}
	}
}
API.on(API.ADVANCE, autojoin);

API.on(API.ADVANCE, function(obj){
	if (songup){
		l(" ",false);
		addChat("<br><img src='https://i.imgur.com/fhagHZg.png'></img><br>\
				<b><a style='color:#90ad2f;'>" + obj.lastPlay.score.positive + "</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a style='color:#aa74ff;'>" + obj.lastPlay.score.grabs + "</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a style='color:#c42e3b;'>" + obj.lastPlay.score.negative + "</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a style='color:#646b7e;'>" + API.getUsers().length + "</a></b><br>\
				<a style='color:#e6ff99;'><b>Now playing:</b></a> " + obj.media.title + "<br>\
				<a style='color:#e6ff99;'><b>Author:</b></a> " + obj.media.author + "<br>\
				<a style='color:#e6ff99;'><b>Current DJ:</b></a> " + obj.dj.username + " (ID " + obj.dj.id + ")<br>","#ececec",true);
	}
});

function deleteAll(){
	if (API.getUser().role >= 2 || API.getUser().gRole != 0){
		var msgs = document.getElementsByClassName('message');
		var emotes = document.getElementsByClassName('emote');
		var mentions = document.getElementsByClassName('mention');
		for (var i = 0; i < msgs.length; i++) {
			for (var j = 0; j < msgs[i].classList.length; j++) {
				if (msgs[i].classList[j].indexOf('message') == 0) {
					$.ajax({type: 'DELETE', url: '/_/chat/' + msgs[i].getAttribute('data-cid')});
				}
			}
		}
		for (var i = 0; i < emotes.length; i++) {
			for (var j = 0; j < emotes[i].classList.length; j++) {
				if (emotes[i].classList[j].indexOf('emote') == 0) {
					$.ajax({type: 'DELETE', url: '/_/chat/' + emotes[i].getAttribute('data-cid')});
				}
			}
		}
		for (var i = 0; i < mentions.length; i++) {
			for (var j = 0; j < mentions[i].classList.length; j++) {
				if (mentions[i].classList[j].indexOf('mention') == 0) {
					$.ajax({type: 'DELETE', url: '/_/chat/' + mentions[i].getAttribute('data-cid')});
				}
			}
		}
		return l("[Chat cleared]",true);
	}else{
		addChat("<b>Sorry, but you are not cool enough for this command.</b>","#FF3333");
	}
}

function deleteSelf(){
	if (API.getUser().role >= 2 || API.getUser().gRole != 0){
		for (var i = 0; i < logged.length; i++){$.ajax({type: 'DELETE', url: '/_/chat/' + logged[i]});}
		for (var i = 0; i < logged.length; i++){
			$.ajax({type: 'DELETE', url: '/_/chat/' + logged[i]});
		}
		logged = [];
	}else{
		addChat("<b>Sorry, but you are not cool enough for this command.</b>","#FF3333");
	}
}

API.on(API.CHAT, function(data){
	var msg = data.message;
	var msgid = data.cid;
	var user = data.un;
	var userid = data.uid;
	var d = new Date();
	var h = d.getHours();
	var m = d.getMinutes();
	var s = d.getSeconds();
	if (h < 10){h = "0" + h;}
	if (m < 10){m = "0" + m;}
	if (s < 10){s = "0" + s;}
	var argument = "[" + h + ":" + m + ":" + s + "] [" + msgid + "] [" + userid + "] [" + user + "]		- " + msg;
	if (typeof user != "undefined"){
		logcheck.push(argument);
		messages.push(msgid.toString());
	};
	if (userid == API.getUser().id){
		logged.unshift(msgid);
		console.log(msgid);
	};
	if (pufflock){
		if (user == "THe Puff" || user == "Epiphainein"){
			var puff = msg.toLowerCase().split(" ");
			var tag = ["beta","beta tester","@beta tester","all","people","everyone","ppl","peeps","guys","guise","bros"];
			switch (puff[0]){

				case "hi":case "hello":case "greetings":case "salutations":
				case "howdy":case "ciao":case "salut":case "hai":case "hey":
				case "hay":case "ohai":case "ohaio":case "ohay":case "ohei":
				case "oheio":case "ohey":case "haider":case "oy":case "ohoy":
				case "hola":case "holla":case "hyao": case "hoy":

					for (var i = 0;i < tag.length; i++){
						if (!lockPuff){
							if (typeof puff[1] != "undefined" && puff[1] == tag[i]
							|| typeof puff[1] == "undefined"){
								//addChat("Like wtf how'd you get Steven to say hi","#AA3333");
								if (user == "THe Puff"){
									c("Heya shmoobey butt! - Credits to 'THe Puff' for suggesting a sentence. (C) 2014 All Rights Reserved | Protected by Creative Commons 4.0");
									lockPuff = true;
									setTimeout(function(){lockPuff = false;},3000);
								}else if (user == "Epiphainein"){
									c("Hey Pippy!");
									lockPuff = true;
									setTimeout(function(){lockPuff = false;},3000);
								}
							}
						}
					}
					break;
			}
		};
	}
	if (lockdown == true){
		for (var i = 0; i < API.getUsers().length; i++){
			if (API.getUsers()[i].username == user){
				if (API.getUsers()[i].role == 0){
					if (API.getUsers()[i].gRole == 0){
						$.ajax({
							type: 'DELETE',
							url: '/_/chat/' + msgid
						});
					}
				}
			}
		}
	}
});

function getuid(uname,oname){
	var toggle = false;
	for (var i = 0; i < API.getUsers().length; i++){
		if (API.getUsers()[i].username.toLowerCase() == uname){
			addChat("" + API.getUsers()[i].username + "'s ID is " + API.getUsers()[i].id,"#ececec");
			toggle = true;
		}
	}
	if (!toggle){
		addChat("User " + oname + " doesn't exist / not in the room.","#ececec");
	}
}

function grab(){
	setTimeout(function(){$("#grab").click();}, 500);
	setTimeout(function(){$($(".grab .menu ul li")[0]).mousedown();}, 500);
}

function lookfor(id,isityou){
	var staffList = [];
	$.ajax({
	type: 'GET', 
	url: 'https://plug.dj/_/staff', 
	contentType: 'application/json',
	}).done(function(msg) {
		staffList = msg.data;
	});
	var friendsList = [];
	$.ajax({
	type: 'GET', 
	url: 'https://plug.dj/_/friends', 
	contentType: 'application/json',
	}).done(function(msg) {
		friendsList = msg.data;
	});

	setTimeout(function(){
	$.ajax({
		type: 'GET',
		url: 'https://plug.dj/_/users/' + id
	}).done(function(user) {
		data = user.data[0];
	
	if (data.username == null){
		addChat("<b><a style='color:#eaaeae;'>[User has not updated yet!]</a></b>","#CCCCCC",false,false,true);
	}else{

//STATUS
		switch (data.status){
			case 0:	var stt = "<a style='color:#89be6c;'>Available</a> (0)";break;
			case 1:	var stt = "<a style='color:#ffdd6f;'>Away</a> (1)";break;
			case 2:	var stt = "<a style='color:#f04f30;'>Working</a> (2)";break;
			case 3:	var stt = "<a style='color:#ac76ff;'>Gaming</a> (3)";break;
			case 4:	var stt = "<a style='color:#555d70;'>Offline / Undefined</a> (4?)";break;
			default:var stt = "<a style='color:#ff0000;'>Wot.</a>";
		}

//BADGE
		switch(data.badge){
			case "bt":			var bb = "Beta Tester (" + data.badge + ")";break;
			case "ss":			var bb = "Plug SuperStar (" + data.badge + ")";break;
			case "og":			var bb = "Original Gangster (" + data.badge + ")";break;
			case "ea":			var bb = "Early Adopter (" + data.badge + ")";break;
			case "ba":			var bb = "Brand Ambassador (" + data.badge + ")";break;
			case "admin":		var bb = "Admin Badge (" + data.badge + ")";break;
			case "plot":		var bb = "Translator Badge (" + data.badge + ")";break;
			case "winter01":	var bb = "Ski Boot (" + data.badge + ")";break;
			case "winter02":	var bb = "Snowman Badge (" + data.badge + ")";break;
			case "winter03":	var bb = "Snowflake Badge (" + data.badge + ")";break;
			case "winter04":	var bb = "Reindeer Badge (" + data.badge + ")";break;
			case "winter05":	var bb = "Penguin Badge (" + data.badge + ")";break;
			case "winter06":	var bb = "Tree Badge (" + data.badge + ")";break;
			case "winter07":	var bb = "Ski Badge (" + data.badge + ")";break;
			case "winter08":	var bb = "Snowboard Badge (" + data.badge + ")";break;
			case "winter09":	var bb = "Ice Skating (" + data.badge + ")";break;
			case "winter10":	var bb = "Hockey Badge (" + data.badge + ")";break;
			case "music01":		var bb = "Record Player (" + data.badge + ")";break;
			case "music02":		var bb = "Musical Keyboard (" + data.badge + ")";break;
			case "music03":		var bb = "Compact Cassette (" + data.badge + ")";break;
			case "music04":		var bb = "Disco Ball (" + data.badge + ")";break;
			case "food01":		var bb = "Pizza Badge (" + data.badge + ")";break;
			case "food02":		var bb = "Ice Cream Badge (" + data.badge + ")";break;
			case "food03":		var bb = "Drink Badge (" + data.badge + ")";break;
			case "food04":		var bb = "Donut Badge (" + data.badge + ")";break;
			case "food05":		var bb = "Sushi Badge (" + data.badge + ")";break;
			case "food06":		var bb = "Hamburguer Badge (" + data.badge + ")";break;
			case "food07":		var bb = "Fries Badge (" + data.badge + ")";break;
			case "animals01":	var bb = "Wolf Badge (" + data.badge + ")";break;
			case "animals02":	var bb = "Cat Badge (" + data.badge + ")";break;
			case "animals03":	var bb = "Chicken Badge (" + data.badge + ")";break;
			case "animals04":	var bb = "Boxer Badge (" + data.badge + ")";break;
			case "style01":		var bb = "Shoe Badge (" + data.badge + ")";break;
			case "style02":		var bb = "Joystick Badge (" + data.badge + ")";break;
			case "tiki01":		var bb = "Fat Tiki Mask (" + data.badge + ")";break;
			case "tiki02":		var bb = "Slim Tiki Mask (" + data.badge + ")";break;
			case "tiki03":		var bb = "Green Tree (" + data.badge + ")";break;
			case "tiki04":		var bb = "Purple Tree (" + data.badge + ")";break;
			default:
				if (data.badge == null){
					var bb = "<a style='color:#eaaeae;'>[None]</a>";
				}else{
					var bb = data.badge;
				}
				break;
		}

//JOINED
		var jin = data.joined.split('-');
		var lk = jin[2].split(' ');
		var lj = lk[1].split('.');
		switch (jin[1]){
			case "01":	var mnt = "Jan";break;
			case "02":	var mnt = "Feb";break;
			case "03":	var mnt = "Mar";break;
			case "04":	var mnt = "Apr";break;
			case "05":	var mnt = "May";break;
			case "06":	var mnt = "Jun";break;
			case "07":	var mnt = "Jul";break;
			case "08":	var mnt = "Aug";break;
			case "09":	var mnt = "Sep";break;
			case "10":	var mnt = "Oct";break;
			case "11":	var mnt = "Nov";break;
			case "12":	var mnt = "Dec";break;
			default:	var mnt = "???";
		}
		switch (lk[0]){
			case "01":	var day = "st";break;
			case "02":	var day = "nd";break;
			case "03":	var day = "rd";break;
			default:	var day = "th";
		}
		var jnd = mnt + " " + lk[0] + day +  " " + jin[0] + " at " + lj[0];

//GROLE
		if (data.gRole < 3){var g = "<a style='color:#777f92;'>Regular</a> (" + data.gRole + ")";};
		if (data.gRole == 3){var g = "<a style='color:#89be6c;'>Brand Ambassador</a> (" + data.gRole + ")";};
		if (data.gRole > 3){var g = "<a style='color:#42a5dc;'>Admin</a> (" + data.gRole + ")";};

//ROLE
		var userLR = 0;
		var lr = "<a style='color:#777f92;'>Regular</a> (0)";
		for (var i = 0; i < staffList.length; i++){
			if (data.username == staffList[i].username){
				userLR = staffList[i].role;
			}
		}
		if (userLR == 1){
			lr = "<a style='color:#ac76ff;'>RDJ</a> (1)";
		}else if (userLR == 2){
			lr = "<a style='color:#ac76ff;'>Bouncer</a> (2)";
		}else if (userLR == 3){
			lr = "<a style='color:#ac76ff;'>Manager</a> (3)";
		}else if (userLR == 4){
			lr = "<a style='color:#ac76ff;'>Co-Host</a> (4)";
		}else if (userLR == 5){
			lr = "<a style='color:#ac76ff;'>Host</a> (5)";
		}

//VOTE
		var userInfo;
		var votestats = "<a style='color:#646b7e;'>Not in the room</a>";
		var grabstats = "";
		var votestate;
		var grabstate;
		for (var i = 0; i < API.getUsers().length; i++){
			if (API.getUsers()[i].username == data.username){
				votestate = API.getUsers()[i].vote;
				grabstate = API.getUsers()[i].grab;
				userInfo = API.getUsers()[i];
				break;
			}
		}
		if (votestate == 1){votestats = "<a style='color:#90ad2f;'>Woot!</a> (1) "}
		else if (votestate == 0){votestats = "<a style='color:#646b7e;'>Didn't vote</a> (0) "}
		else if (votestate == -1){votestats = "<a style='color:#c42e3b;'>Meh</a> (-1) "}
		if (grabstate === true){grabstats = "| <a style='color:#aa74ff;'>Grabbed!</a> (<em>true</em>)"}
		else if (grabstate === false){grabstats = " <a style='color:#646b7e;'>| Didn't grab</a> (<em>false</em>)"}

		if (API.getDJ().username == data.username){
			votestats = "<a style='color:#646b7e;'>Is currently DJ'ing</a>";
			grabstats = "";
		}

//WAITLIST
		var posstats = "<a style='color:#646b7e;'>Not in the WaitList</a>";
		if (votestats == "<a style='color:#646b7e;'>Not in the room</a>"){
			posstats = "<a style='color:#646b7e;'>Not in the room</a>";
		}
		var wlpos = API.getWaitListPosition(data.id);
		if (wlpos != -1){
			posstats = wlpos + 1;
		}

//BLURB
		var blurbTrue = "<a style='color:#eaaeae;'>[None]</a>";
		if (data.blurb != null){
			blurbTrue = data.blurb;
		}

//FRIEND
		var isFriend = "No (<em>false</em>)";
		for (var i = 0; i < friendsList.length; i++){
			if (data.username == friendsList[i].username){
				isFriend = "<a style='color:#ffc4f9;'>Yes</a> (<em>true</em>)<br><b>\
				<a style='color:#42a5dc;'>Room:</b></a> <a href='https://plug.dj/" + friendsList[i].room.slug + "' style='color:#aec9ea;'>" + friendsList[i].room.name + "</a>";
				break;
			}
		}
		if (isityou){isFriend = "<a style='color:#646b7e;'>You can't be friends with yourself</a> (<em>false</em>)";}

//PROFILE
		var hasProfile = "<a style='color:#eaaeae;'>[No profile yet]</a>";
		var profileColor = "#eaaeae";
		if (data.level > 5){
			hasProfile = "";
			profileColor = "#aec9ea";
		}

		addChat("<br><a style='color:#42a5dc;'><b>Name:</b></a> " + data.username + "<br><b>\
		<a style='color:#42a5dc;'>Slug:</b></a> <a style='color: " + profileColor + ";' href='/@/" + data.slug + "' target='_blank'>" + data.slug + "</a> " + hasProfile + "<br><b>\
		<a style='color:#42a5dc;'>Blurb:</b></a> " + blurbTrue + "<br><b>\
		<a style='color:#42a5dc;'>ID:</b></a> " + data.id + "<br><b>\
		<a style='color:#42a5dc;'>Level:</b></a> " + data.level + "<br><b>\
		<a style='color:#42a5dc;'>Avatar:</b></a> " + data.avatarID + "<br><b>\
		<a style='color:#42a5dc;'>Status:</b></a> " + stt + "<br><b>\
		<a style='color:#42a5dc;'>Role:</b></a> " + lr + "<br><b>\
		<a style='color:#42a5dc;'>Global Role:</b></a> " + g + "<br><b>\
		<a style='color:#42a5dc;'>Joined:</b></a> " + jnd + "<br><b>\
		<a style='color:#42a5dc;'>Badge:</b></a> " + bb + "<br><b>\
		<a style='color:#42a5dc;'>Friend:</b></a> " + isFriend + "<br><b>\
		<a style='color:#42a5dc;'>Vote:</b></a> " + votestats + grabstats + "<br><b>\
		<a style='color:#42a5dc;'>WaitList Position:</b></a> " + posstats + "<br>","#CCCCCC",false,false,true);
		}
	});},1000);
}

var wantsHelp = false;

API.on(API.CHAT_COMMAND, function(data){
	var msg = data;
	var command = msg.substring(1).split(' ');
	if(typeof command[2] != "undefined"){
		for(var i = 2; i < command.length; i++){
			command[1] = command[1] + ' ' + command[i];
		};
	};
	if (typeof command[1] == "undefined"){command[1] = "";}
	else{command[1] = command[1] + " ";};
	function ct(msg){API.sendChat(command[1] + msg);};

	console.log("[COMMAND] " + command[0] + " || [ARGUMENT] " + command[1]);

	switch(command[0].toLowerCase()){
		case "todo":
			/*
				Inline on first line bug
			*/
			break;

		case "lrg":
			bigchat = !bigchat;
			$("#xbig").toggleClass('active');
			$("#xbig .icon").toggleClass('active');
			if (bigchat){
				$("#room .app-right").animate({width:"399"});
				$('#chat-input-field').animate({width:"360"});
				$("#chat-input").animate({width:"380"});
			}else if (!bigchat){
				$("#room .app-right").animate({width:"345"});
				$('#chat-input-field').animate({width:"305"});
				$("#chat-input").animate({width:"326"});
			}
			break;

		case "support":
			addChat("<br><a style='color:#c2f3bf;'><b>Here's support stuff:</b></a><br><br>\
					<a style='color: #8bdb85;'>support@plug.dj</a><br>\
					<a style='color: #8bdb85;' href='https://plug.dj/support'>plug.dj/support</a><br>\
					<a style='color: #8bdb85;' href='http://support.plug.dj/hc' target='_blank'>support.plug.dj</a><br>","#CCCCCC");
			break;

		case "timeout":
			ct("You must wait 10 minutes before you can post links on chat after you join a room. This is done to prevent spam.");
			break;

		case "nsfw":
			ct('NSFW means Not Safe For Watching (objectionable content) -- nudity, scant clothing (incl. lingerie), blood and or violence (gore), snuff (dying)');
			break;

		case "mc":
		case "minecraft":
			ct('plug.dj now has its own Minecraft server! http://blog.plug.dj/2014/12/plugcraft-server/ (IP is plugdj.mcph.co)');
			break;

		case "emojisheet":
		case "emojicheat":
			ct("http://www.emoji-cheat-sheet.com/");
			break;

		case "mutedood":
			if (API.getUser().role > 1 || API.getUser().gRole > 0){
				mutedood = !mutedood;
			}else{
				addChat("<b>Sorry, but you are not cool enough for this command.</b>","#FF3333");
			}
			break;

		case "unmutedood":
			API.moderateUnmuteUser(save);
			break;

		case "thepuff":
			pufflock = !pufflock;
			break;

		case "sacrifice":
		case "offering":
			c("/me &nbsp;&nbsp;&nbsp;:fire: :fire: :fire: :fire: :fire:");
			setTimeout(function(){c("/me &nbsp;&nbsp;&nbsp;:fire: :fire: :goat: :fire: :fire:")},250);
			setTimeout(function(){c("/me &nbsp;&nbsp;&nbsp;:fire: :fire: :fire: :fire: :fire:")},500);
			setTimeout(function(){c("/me Please, all mighty Admins, accept this sacrifice!")},750);
			break;

		case "del":
			var cmds = command[1].trim();
			$.ajax({
				type: 'DELETE',
				url: '/_/chat/' + logged[cmds]
			});
			console.log(logged[cmds]);
			logged.splice(cmds,1);
			break;

		case "mehs":
			l('Coming soon.');
			break;

		case "erase":
			$.ajax({
				type: 'DELETE',
				url: '/_/chat/' + command[1]
			});
			break;

		case "break":
			API.sendChat('/me  ');
			setTimeout(function(){API.sendChat('/del 0')},550);
			break;

		case "lookup":
			var itsYou = false;
			if (command[1] == API.getUser().id){itsYou = true;}
			lookfor(command[1],itsYou);
			break;

		case "search":
			var xname = command[1].substring(1).toString();
			var oname = xname.substring(0,xname.length - 2);
			var uname = oname.toLowerCase();
			var foundIt = false;
			var itsYou = false;
			if (oname == API.getUser().username){itsYou = true;}
			console.log(xname + "||" + uname + "||" + oname);
			for (var i = 0; i < API.getUsers().length; i++){
				if (oname == API.getUsers()[i].username){
					lookfor(API.getUsers()[i].id,itsYou);
					foundIt = true;
					break;
				}
			}
			if (!foundIt){
				addChat("<br><b><a style='color:#eaaeae;'>[User </b></a>" + oname + "<b><a style='color:#eaaeae;'> not found]</a></b><br>\
				Make sure you are using <b>'<a style='background-color:#3f3fff;'>@NAME </a>'</b> (yes, the space after it <em>is</em> important)","#CCCCCC",false,false,true);
			}
			break;

		case "showoff":
			c("/me :fire: :star2: :fire: :boom: :fire: :boom: :fire: :star2: :fire:");
			setTimeout(function(){c("/me &nbsp;&nbsp;~A wild me appears~");},250);
			setTimeout(function(){c("/me :fire: :star2: :fire: :boom: :boom: :fire: :fire: :star2: :fire:");},500);
			break;

		case "cya":
			ct("Cya later! c: Thanks a lot for passing by! o/");
			break;

		case "shrug":
			c(command[1] + " ¯\\_(ツ)_/¯");
			break;

		case "quote":
			c("/me ❝ " + command[1] + " ❞");
			break;

		case "sing":
			c("/me ♪ " + command[1] + " ♫");
			break;

		case "getid":
		case "getuid":
		case "id":
		case "uid":
			var xname = command[1].substring(1).toString();
			var oname = xname.substring(0,xname.length - 2);
			var uname = oname.toLowerCase();
			console.log(xname + "||" + uname + "||" + oname);
			getuid(uname,oname);
			break;

		case "joinmsg":
		case "jmsg":
			joinmsg = !joinmsg;
			if (joinmsg){
				addChat('Join message on',"#ececec");
			}else if (!joinmsg){
				addChat('Join message off',"#ececec");
			}
			break;

		case "grabmsg":
		case "gmsg":
			grabmsg = !grabmsg;
			if (grabmsg){
				addChat('Grab message on',"#ececec");
			}else if (!grabmsg){
				addChat('Grab message off',"#ececec");
			}
			break;
		
		case "mehmsg":
		case "mmsg":
			mehmsg = !mehmsg;
			if (mehmsg){
				addChat('Meh message on',"#ececec");
			}else if (!mehmsg){
				addChat('Meh message off',"#ececec");
			}
			break;

		case "autojoin":
		case "auto":
			autolock = !autolock;
			if (autolock){
				addChat('Autojoin on',"#ececec");
			}else if (!autolock){
				addChat('Autojoin off',"#ececec");
			}
			break;

		case "togglecap":
		case "captoggle":
		case "capset":
		case "setcap":
			cap = !cap;
			if (cap){
				addChat('AutoCap on',"#ececec");
				var thiscap = API.getStaff().length;
				c('/cap ' + thiscap);
				addChat('Cap set to ' + thiscap,"#c5b5ff");
			}else if (!cap){
				addChat('AutoCap off',"#ececec");
			}
			break;

		case "woot":
			ct("If you're in this room, you'll most probably like the songs that are played here. Therefore, you'll be clicking Woot for most songs. AutoWoots simply click Woot for you, in case you're busy. If you dislike a song, you can manually Meh it.");
			break;

		case "op":
			ct("OverPlayed list: http://bit.ly/dteoplist");
			break;

		case "rules":
			ct("Rules: http://bit.ly/rulesdte");
			break;

		case "blog":
			ct("Blog: http://blog.plug.dj/");
			break;

		case "ba":
			ct("Brand Ambassadors are volunteers who help moderate the website and test features. Here's more about the BA project: http://blog.plug.dj/brand-ambassadors/");
			break;

		case "admin":
			ct("Admins are the people that work for plug.dj. They have a plug.dj logo next to their names in chat. http://blog.plug.dj/team/");
			break;

		case "xp":
			ct('XP and PP are earned on ticks. There is a tick cap of 72 per day. After 6 hours (72 ticks), you hit the “XP cap” and will not gain XP until the next day. More info: http://goo.gl/7SDAAr');
			break;

		case "pp":
		case "points":
		case "point":
			ct("The website check every minute what you did in the website during that time (such as Wooting, chatting, etc), and then generates a proportional amount of XP and PP for it. XP, however, has a daily cap, so you can't farm it.");
			break;

		case "pn":
		case "notes":
			ct("Plug Notes (PNs) are a reward for donating to plug.dj. Everyone gets free 350PNs though, for testing how they work");
			break;

		case "rank":
		case "ranks":
			ct("Help people out, be active and be online often, and you'll eventually be noticed by our staff. We'll watch you for some time, then decide whether you deserve a rank or not.");
			break;

		case "clearall":
		case "deleteall":
			var r = confirm("Delete entire chat on log?");
			if (r === true) {
				deleteAll();
			}else{
				l("[Command " + command[0] + " denied]",true);
			};
			break;

		case "deleteself":
			deleteSelf();
			break;

		case "rainbow":
		case "rainbows":
		case "hearts":
			c(":heart: :yellow_heart: :green_heart: :blue_heart: :purple_heart: :heart: :yellow_heart: :green_heart: :blue_heart: :purple_heart:");
			setTimeout(function(){c(":purple_heart: :heart: :yellow_heart: :green_heart: :blue_heart: :purple_heart: :heart: :yellow_heart: :green_heart: :blue_heart:")},250);
			setTimeout(function(){c(":blue_heart: :purple_heart: :heart: :yellow_heart: :green_heart: :blue_heart: :purple_heart: :heart: :yellow_heart: :green_heart:")},500);
			setTimeout(function(){c(":green_heart: :blue_heart: :purple_heart: :heart: :yellow_heart: :green_heart: :blue_heart: :purple_heart: :heart: :yellow_heart:")},750);
			setTimeout(function(){c(":yellow_heart: :green_heart: :blue_heart: :purple_heart: :heart: :yellow_heart: :green_heart: :blue_heart: :purple_heart: :heart:")},1000);
			break;

		case "msgs":
			addChat("[Messages length: " + messages.length + "]", "#ececec");
			break;

		case "logcheck":
		case "checklog":
			console.log(logcheck);
			addChat("[Check console for chat log since last clear]","#ececec");
			break;

		case "logclear":
		case "clearlog":
			logcheck = [];
			addChat("[Log cleared.]","#ececec");
			break;

		case "12":
			ct('ᄅ⇂');
			break;

		case "opensans":
			$("#chat-messages").css({"font-family":"'Open Sans', sans-serif"});
			$("#chat-input-field").css({"font-family":"'Open Sans', sans-serif"});
			break;

		case "roboto":
			$("#chat-messages").css({"font-family":"Roboto, sans-serif"});
			$("#chat-input-field").css({"font-family":"Roboto, sans-serif"});
			break;

		case "emojis":
			addChat('~=[,,_,,]:3     ||     ¬_¬     ||     ಠ_ಠ',"#ececec");
			addChat('ლ(ಥ益ಥლ     ||     (っ◔‿◔)っ     ||     (╥﹏╥)',"#ececec");
			addChat('(─‿‿─)   ||   (ʃƪ ˘ ³˘)   ||   ( ͡° ͜ʖ ͡°)',"#ececec");
			addChat('(ᕗ ಠ益ಠ)ᕗ ︵﻿ ┻━┻   ||   (╯°□°)╯︵ ┻━┻',"#ececec");
			addChat('¯\\_(ツ)_/¯',"#ececec");
			break;

		case "readd":
			//BUGGED!
			var userID = API.getDJ().id;
			API.once(API.ADVANCE, function() {
				API.once(API.WAIT_LIST_UPDATE, function() {
					API.moderateMoveDJ(userID, 1);
				});
				API.moderateAddDJ(userID);
			});
			API.moderateForceSkip();
			break;

		case "swap":
			//BUGGED!
			var arg = command[1];
			var n1 = arg.indexOf('@');
			var n2 = arg.lastIndexOf('@');
			var u1 = arg.slice(n1 + 1,n2 - 1).trim();
			var u2 = arg.slice(n2 + 1).trim();
			var id1;var id2;
			for (var i = 0; i < API.getUsers().length; i++){
				if (API.getUsers()[i].username == u1){
					n1 = API.getWaitListPosition(API.getUsers()[i].id);
					id1 = API.getUsers()[i].id;
				}
				if (API.getUsers()[i].username == u2){
					n2 = API.getWaitListPosition(API.getUsers()[i].id);
					id2 = API.getUsers()[i].id;
				}
			}
			if (n1 == -1){API.moderateAddDJ(id1);n1 = API.getWaitList().length;}
			if (n2 == -1){API.moderateAddDJ(id2);n2 = API.getWaitList().length;}
			var posTime1 = setTimeout(function(){API.moderateMoveDJ(id1,n2);},500);
			var posTime2 = setTimeout(function(){API.moderateMoveDJ(id2,n1 + 1);},750);
			switch ("undefined"){
				case typeof n1:case typeof n2:
				case typeof u1:case typeof u2:
				case typeof id1:case typeof id2:
					clearTimeout(posTime1);
					clearTimeout(posTime2);
					console.log("[ERROR]");
					console.log("n1 " + n1 + " | n2 " + n2);
					console.log("u1 " + u1 + " | u2 " + u2);
					console.log("id1 " + id1 + " | id2 " + id2);
			}
			break;

		case "ban":
			$.ajax({
				type: 'POST', 
				url: 'https://plug.dj/_/bans/add', 
				contentType: 'application/json',
				data: '{"userID":' + command[1] + ',"reason":1,"duration":"f"}'
				}).done(function(msg) {
						console.log(msg);
			});
			break;

		case "lockdown":
			if (API.getUser().role > 1 || API.getUser().gRole != 0){
				lockdown = !lockdown;
				if (lockdown){
					var ll = "enabled. Only staff may chat.";
				}else{
					var ll = "disabled";
				}
				addChat("<b>Lockdown is now " + ll + "</b>","#FF3333");
			}else{
				addChat("<b>Sorry, but you are not cool enough for this command.</b>","#FF3333");
			}
			break;

		case "z":
			addChat("<a style='color:#2975ff;'><b>Tip:</b></a> &<b>zwnj;</b> / &<b>nbsp;</b>","#CCCCCC");
			break;

		//p3
		case "lockskip":case "skip":case "commands":case "nick":case "avail":
		case "afk":case "work":case "sleep":case "join":case "leave":case "whoami":
		case "refresh":case "version":case "mute":case "link":case "unmute":
		case "nextsong":case "automute":case "alertson":case "alertsoff":
		case "getpos":case "ignore":case "whois":case "kick":case "add":case "help":
		case "remove":case "lock":case "unlock":case "help":case "me":case "em":
			break;
		
		case "cmds":
		case "cmd":
			addChat("<br><a style='color:#7174ff;'><b>------=[ Mod Commands ]=------</b></a><br><br>\
					<a style='color:#ffffff;'><b>/id @</b><em>NAME</em></a><br>\
					<a style='color:#CCCCCC;'>Returns the ID of that user</a><br><br>\
					<a style='color:#ffffff;'><b>/lookup </b><em>ID</em></a><br>\
					<a style='color:#CCCCCC;'>Returns info about specified user</a><br><br>\
					<a style='color:#ffffff;'><b>/search @</b><em>NAME</em></a><br>\
					<a style='color:#CCCCCC;'>Returns info about specified user</a><br><br>\
					<a style='color:#ffffff;'><b>/deleteall</b></a><br>\
					<a style='color:#CCCCCC;'>Deletes all chat since joining</a><br><br>\
					<a style='color:#ffffff;'><b>/del </b><em>MSG#</em></a><br>\
					<a style='color:#CCCCCC;'>Deletes message from you, using Array position</a><br><br>\
					<a style='color:#ffffff;'><b>/erase </b><em>MSGID</em></a><br>\
					<a style='color:#CCCCCC;'>Deletes message with specified ID<br>(regardless of it being sent before or after you joined)</a><br><br>\
					<a style='color:#e6ff99;'><b>/readd</b></a><br>\
					<a style='color:#e6ff99;'>Skips > Puts in WL > Moves to 1st<br>BUGGED</a><br><br>\
					<a style='color:#e6ff99;'><b>/swap @</b><em>NAME</em> <b>@</b><em>NAME</em></a><br>\
					<a style='color:#e6ff99;'>Swaps two people in the WaitList<br>BUGGED</a><br><br>\
					<a style='color:#ffaaaa;'><b>/ban </b><em>ID</em></a><br>\
					<a style='color:#CCCCCC;'>Permabans an user by its ID</a><br><br>\
					<a style='color:#7174ff;'><b>------=[ Mod Commands ]=------</b></a><br>","#CCCCCC");
			break;

		default:
			addChat("Command <a style='color:#c4c4c4;'>" + command[0] + "</a> is not a command!","#fea6a6");
			break;
	};
});
}
