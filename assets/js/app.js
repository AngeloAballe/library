(function( $ ) {

	$.fn.searchBar = function( options ) {
        var settings = $.extend({
            width: "100%",
            height: "100%",
            placeholder: "Search...",
            customClass: ""
        }, options );

        this.css({
            width: settings.width,
            height: settings.height
        });

        this.attr("placeholder", settings.placeholder);
        this.addClass("form-control" + settings.customClass);

        return this;
	};

    $.fn.passwordViewer = function( ) {
        var password = this,
            passwordElement = $(this);

        var formGroup = document.createElement("DIV");
        formGroup.className = "form-group";
        var formGroupElement = $(formGroup);

        var passwordViewContainer = document.createElement("DIV");
        passwordViewContainer.className = "pos-relative inline-block password-container";
        var passwordViewContainerElement = $(passwordViewContainer);

        var spanView = document.createElement("SPAN");
        spanView.className = "pass-view";
        spanView.innerHTML = "view";
        var spanViewElement = $(spanView);

        spanViewElement.on({
            'mousedown': function(){
                passwordElement.attr('type', 'text');
            },
            'mouseup': function(){
                passwordElement.attr('type', 'password');
            }
        });

        var group = password.wrap(passwordViewContainerElement);
        group.parent().append(spanViewElement).wrap(formGroupElement);

        return this;
    };

}( jQuery ));