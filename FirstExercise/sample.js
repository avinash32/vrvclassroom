//Items is global = window.Items or Items 

//javascript design patterns: https://addyosmani.com/resources/essentialjsdesignpatterns/book/

// revealing module pattern 
var Items = (function(){ //iife pattern 

    //namespace 

    // private members 
    var private;
    var model;

    // javascript class definition and methods implementation 
    // class def and constructor 
    function Model(data) {
        this.model = data;
    }    

    //class public methods 
    Model.prototype.set = function(data) {
        this.model.status = data.status;
    }

    // private methods 
    function privateMethod(params){
        
    }

    // public methods 
    function publicMethod1(param1, param2){

    } 

    function publicMethod2(param1) {

    }

    function init(param) {
        model = new Model({key1: value1, key2: value2});
    }

    // expose public methods 
    return {
        Init   : init, 
        Method1: publicMethod1,
        Method2: publicMethod2
    }

})();

//public method invocation can happen in any file  
Items.Init();

// index.html 
// <script src="sample.js" />
// <script src="sample1.js" /> 
