
(function () {
        // var openFormButton = document.querySelector('.btn-down');
         var form = document.querySelector('.form');
        var nav = document.querySelector('.nav');

        if(form){
            form.addEventListener('submit',function (e) {
                e.preventDefault();
                if(ITVDN.form.isValid()){
                    console.log('All good');
                }else {
                    console.log('Is not valid');
                }
            })
        }
    if(nav){
        nav.addEventListener('click',function (e) {
            var target = e.target;
            if(target.tagName.toLocaleLowerCase() !== 'a'){
                return;
            }
            e.preventDefault();
            ITVDN.navigation.toggleToActiveLink(target);
        })
    }
    }());
