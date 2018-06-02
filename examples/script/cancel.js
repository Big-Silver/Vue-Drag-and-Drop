var vm = new Vue({
	el: "#main",
	data: {
		list: [
			{name: "apple"}, 
			{name: "banana"}, 
			{name: "pinapple"},
			{name: "grape"},
			{name: "strawberry"},
			{name: 'odd'},
			{name: 'pair'}
		],
		list2: [],
		dragging: false,
		targetElement: null,
		canDrag:null,
		futureIndex:null
	},
	methods:{
		privateCheckMove: function(evt){
			this.targetElement = evt.relatedContext.element
			return true;
		},
		checkMove: function(evt){
			res = this.privateCheckMove(evt)
			this.canDrag=res;
			this.futureIndex = evt.draggedContext.futureIndex;
			return res;
		},
		endDrag: function () {
			this.canDrag=null;
			this.targetElement=null;
			this.futureIndex =null;
		},
		startDrag: function (evt) {
			console.log(evt)
		}
	}
});
