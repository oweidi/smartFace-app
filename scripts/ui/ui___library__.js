/* 
		WARNING 
		Auto generated file. 
		Do not modify it's contents.
*/

const extend = require('js-base/core/extend');
const Page = require('nf-core/ui/page');

const Color = require('nf-core/ui/color');
const FlexLayout = require('nf-core/ui/flexlayout');


const __library___ = extend(Page)(
	//constructor
	function(_super){
		// initalizes super class for this page scope
		_super(this, {
			onLoad: onLoad.bind(this)
		});
		
		var children = {
		};
		
		var orderedChildrenOfPage = [
		];
		
		this.mapChildren = mapChildren.bind(this, orderedChildrenOfPage, children);
		
});

const mapChildren = function(ordersOfchildren, children, callback){
	callback = callback.bind(this);
	ordersOfchildren.map(function(child){
		callback(children[child], child);
	});
};

function onLoad() { 
    this.headerBar.visible = false;
    this.headerBar.title = "__library__";
    this.headerBar.titleColor = Color.create("#000000");
    this.headerBar.backgroundColor = Color.create("#FFFFFF");
    this.statusBar.visible = false;
    this.statusBar.android && (this.statusBar.android.color = Color.create("#00A1F1"));
    this.layout.alignContent = FlexLayout.AlignContent.STRETCH;
    this.layout.alignItems = FlexLayout.AlignItems.STRETCH;
    this.layout.direction = FlexLayout.Direction.INHERIT;
    this.layout.flexDirection = FlexLayout.FlexDirection.COLUMN;
    this.layout.flexWrap = FlexLayout.FlexWrap.NOWRAP;
    this.layout.justifyContent = FlexLayout.JustifyContent.FLEX_START;
    this.layout.backgroundColor = Color.create("#FFFFFF");
    //add components to page.
    this.mapChildren(function(component){
        if(component.mapChildren){
            addChild(component);
        }
        this.layout.addChild(component);
    });
}

//add child components to parent component.
function addChild(component){
    component.mapChildren(function(child){
        if(child.mapChildren){
            addChild(child);
        }
        this.addChild(child);
    });
}

module && (module.exports = __library___);
