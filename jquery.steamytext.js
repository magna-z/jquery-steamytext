/**
 * @name jquery-steamytext
 * @version 1.0.0
 * @description jQuery SteamyText animation plugin
 * @author Maxim Zalysin <max@zalysin.ru>
 */
(function($){
    $.fn.steamyText = function(data){
        var defaults = {
            text: ''
            , duration: 1500
            , displace: 50
            , tag: 'span'
            , zIndex: 0
        }
        , options
        switch(typeof data){
            case 'string':
                defaults.text = data
                options = defaults
                break
            case 'object':
                if(data === null) return this
                options = $.extend({}, defaults, data)
                break
            default:
                return this
        }
        var $text = $('<'+options.tag+' style="position: absolute; z-index: '+options.zIndex+'; display: none;">'+options.text+'</'+options.tag+'>').appendTo('body')
        , textWidth = $text.outerWidth()
        , thisWidth = this.outerWidth()
        , thisOffset = this.offset()
        , thisOffsetLeft
        if(thisWidth > textWidth) thisOffsetLeft = thisOffset.left + ((thisWidth - textWidth)/2)
        else thisOffsetLeft = thisOffset.left - ((textWidth - thisWidth)/2)
        $text.css({'top': thisOffset.top, 'left': thisOffsetLeft}).show()
        .animate({top: '-='+options.displace+'px', opacity: 'toggle'}, options.duration, function(){ /*$(this).remove()*/ })
        return this
    }
}(jQuery))
