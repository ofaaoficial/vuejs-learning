new Vue({
	el : '#appVue',
	data : {
		newKeep : '',
		lists : [

		],
	},
	methods :{
		addKeep : function(){
			this.lists.push({ keep : this.newKeep, complete : false });
			this.newKeep = '';
		}
	}
	});