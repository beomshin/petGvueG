function nPage_change(page, cId, listType){
		var nPage = $("#board-page option:selected").val();
		var path = location.origin;
		var param = '';
		
		if(listType == 'best'){
			param = "?cId=" + cId + "&listType=" + listType + "&nPage=" + nPage + "&page=" + page ;
		}else{
			param = "?cId=" + cId + "&nPage=" + nPage + "&page=" + page ;
		}
		
		location.href = path + "/board/boardList.do" + param;
	};
	

$('#board-keyword').keydown(function(key){
		
		if(key.keyCode == 13){
			event.preventDefault();
			boardSearch();
		}
	});
	
	
function boardSearch(){
		
		// 특수문자 삭제
	    var regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;
		var path = location.origin;
		var keyword = $('#board-keyword').val();
		var searchType = $("#board-search-type").val();
		
		if(regExp.test(keyword)){
			var keyword = keyword.replace(regExp, "")
		}
		
		var param = "?cId=" + cId + "&listType=" + listType + "&nPage=" + nPage + "&keyword=" + keyword + "&searchType=" + searchType + "&page=1";

		
		location.href = path + "/board/boardList.do" + param;
};

$("#board-submit").on("click",function(){ 
		
		var title = $("#board-title").val().length;
		var nickName = $("#board-nickName").val();
		var password = $("#board-password").val();
		var content = $("#board-content").val().length;
		var regExpId = /^[0-9a-zA-Z]{1,10}$/;
		var regExpPw = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,}$/;

		console.log(password);

		if(!(title > 0 && title < 31)){
			alert("제목을 30글자 이내로 입력해주세요");
			return;
		}else if(!regExpId.test(nickName)){
			alert("닉네임은 10글자 이내 숫자/영문으로 입력해주세요");
			return;
		}else if(!regExpPw.test(password) && password !== undefined){
			alert("숫자/문자/특수문자 1개 이상 6글자 이상 입력해주세요");
			return;
		}else if(10 > content){
			alert("10자 이상 작성해주세요");
			return;
		} else if(content > 4096){
			alert("글 내용을 줄여주세요.");
			return;
		} else if(doubleSubmitCheck()){
			return; 
		}
		
		document.board.submit();
});
	
function back(){
	window.history.back();
}	

$(document).ready(function(){
	
	var hotBoardTitleList = $('.category-hot-title');
	var petgNewsBoardTitleList = $('.petg-news-title');
	var titleLength = 0;
	
	if(screen.width > 1024){
		titleLength = 13;
	}else if(screen.width > 768){
		titleLength = 23;
	}else if(screen.width > 425){
		titleLength = 19;
	}else if(screen.width > 375){
		titleLength = 22;
	}else if(screen.width > 320){
		titleLength = 18;
	}else{
		titleLength = 13;
	}
	
	for(var hotBoardTitle of hotBoardTitleList){
		if(hotBoardTitle.textContent.trim().length >= titleLength ){
			var title = hotBoardTitle.textContent;
			hotBoardTitle.textContent = title.substr(0, titleLength) + "...";			
		}
	}
	
	for(var petgNewsBoardTitle of petgNewsBoardTitleList){
		if(petgNewsBoardTitle.textContent.trim().length >= titleLength ){
			var title = petgNewsBoardTitle.textContent;
			petgNewsBoardTitle.textContent = title.substr(0, titleLength) + "...";			
		}
	}
	
	var boardTitleList = $('.boardTitle');
	var BoardTitleLength = 0;
	
	if(screen.width > 425){
		BoardTitleLength = 20;
	}else if(screen.width > 375){
		BoardTitleLength = 18;
	}else {
		BoardTitleLength = 12;
	}
	
	if(screen.width <= 425){
		for(var boardTitle of boardTitleList){
			if(boardTitle.textContent.trim().length >= BoardTitleLength ){
				console.log(boardTitle.textContent.trim())
				console.log(boardTitle.textContent.trim().length)
				console.log(BoardTitleLength)
				
				var title = boardTitle.textContent.trim();
				boardTitle.textContent = title.substr(0, BoardTitleLength) + "...";			
			}
		}
	}
	
	
});

