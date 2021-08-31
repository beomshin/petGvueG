
	var doubleSubmitFlag = false;
		
	function doubleSubmitCheck(){
	        if(doubleSubmitFlag){
	            return doubleSubmitFlag;
	        }else{
	            doubleSubmitFlag = true;
	            return false;
	        }
	    }
	    
	 function fnLimitText(obj, limit) {
        if (obj.value.length > limit) {
            obj.blur();
            obj.value = obj.value.substring(0, limit);
            obj.focus();
            return false;
        }
    }