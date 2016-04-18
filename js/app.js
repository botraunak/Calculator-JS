$(document).ready(function(){
	var Calculator = function(){
		// Init Tasks
		var $exp = $('.expression');
		var $res = $('.result');
		var exp = "";
		var res = {};


		// Bind Tasks
		$('.operation-btn').on('click',_operationHandler);
		$('.numbtn').on('click',_numHandler);
		$('.clearbtn').on('click',_clearHandler);
		$('.equalbtn').on('click',_resultHandler);


		function _operationHandler(){
			var op = $(this).text();
			// Replacing Unicode Divide with / for eval()
			if(op.charCodeAt(0) == 247){
				op = '/';
			}
			// Replacing X with * for eval()
			if(op.charCodeAt(0) == 120){
				op = '*';
			}

			_updateExp(op);
		} 

		function _numHandler(){
			var num = $(this).text();
			_updateExp(num);
		}

		function _clearHandler(){
			var clearAction = $(this).text();
			console.log(clearAction);
			if(clearAction == "AC"){
				res = {};
				exp = "";
			}
			if(clearAction == "CE")
				exp = exp.slice(0,-1);

			_render();
		}

		function _resultHandler(){
			try{
				res.ans = eval(exp);
				res.error = 0;
			}
			catch (e){
				res.ans = "Error! :(";
				res.error = 1;
			}
			_render();
		}

		function _updateExp(sym){
			exp += sym;
			_render();
		}

		function _render(){
			var expression = exp || "Your Expression Goes Here";
			$exp.text(expression);
			$res.text(res.ans).removeClass('error');

			if(res.error)
				$res.addClass('error');
		}


	}();
});