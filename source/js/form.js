(function () {
    var me ={};
    var form = document.querySelector('.form-container');
    var closeButton = null;
    function onClose() {
        me.close();
        closeButton.removeEventListener('click',onClose);
    }
    me.open = function () {
        form.classList.remove('is-hidden');
        closeButton = document.querySelector('.form__close-button');
        closeButton.addEventListener('click',onClose);
    };
    me.close = function () {
        form.classList.add('is-hidden');
    };
    me.isValid = function () {
        var requiredFields = document.querySelectorAll('[data-valid="required"]');
        var emailValue = document.querySelector('[data-email]').value;
        var numberValue = document.querySelector('[data-number]').value;
       if(!me.isAllCompleted(requiredFields)){
            console.log('Заполните все необходимые поля');
            return false;
       }else if(!ITVDN.validation.isEmail(emailValue)){
           console.log('Заполните верный email');
           return false;
       }else if(!ITVDN.validation.isNumber(numberValue)){
           console.log('Заполните верный номер');
           return false;
       };
        return true;
    };
    me.isAllCompleted = function (data) {
        var result = true;
        for (var i=0; i < data.length; i++){
            if(!ITVDN.validation.isEmpty(data[i].value)){
                result = false;
                break;
            }
        }
        return result;
    };

    ITVDN.form = me;

}());