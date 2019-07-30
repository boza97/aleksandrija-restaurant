$(document).ready(function () {

    var formBtn = document.getElementById('contact-btn');
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var heading = document.getElementById("heading");
    var message = document.getElementById("message");
    var form = document.getElementById('contact-form');
    var errors = {
        nameErr: '',
        emailErr: '',
        headingErr: '',
        messageErr: ''
    };

    formBtn.addEventListener('click', function () {

        if (isEmpty(name.value)) {
            error('name');
            errors.nameErr = 'error';
        } else {
            success('name');
            errors.nameErr = '';
        }

        if (isEmpty(email.value) || email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
            error('email');
            errors.emailErr = 'error';
        } else {
            success('email');
            errors.emailErr = '';
        }

        if (isEmpty(heading.value)) {
            error('heading');
            errors.headingErr = 'error';
        } else {
            success('heading');
            errors.headingErr = '';
        }

        if (isEmpty(message.value)) {
            error('message');
            errors.messageErr = 'error';
        } else {
            success('message');
            errors.messageErr = '';
        }

        if (errors.nameErr === '' && errors.emailErr === '' && errors.headingErr === '' && errors.messageErr === '') {
            form.submit();
        }
    });

    function isEmpty(str) {
        return (!str || 0 === str.length || /^\s*$/.test(str));
    }

    function error(id) {
        var div = $("#" + id).closest("div");
        div.removeClass("has-success");
        $("#glypcn" + id).remove();
        div.addClass("has-error has-feedback");
        div.append('<span id="glypcn' + id + '" class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>');
    }

    function success(id) {
        var div = $("#" + id).closest("div");
        div.removeClass("has-error");
        div.addClass("has-success has-feedback");
        $("#glypcn" + id).remove();
        div.append('<span id="glypcn' + id + '" class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>');
    }

});