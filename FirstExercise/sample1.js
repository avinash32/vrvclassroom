/* global Item */
var Cool = (function(){

    //private method 

    //public methods 
    function init() {
        Item.Init()
    }

    //expose public methods 
    return {
        Init: init,
    }
})();

Cool.Init();