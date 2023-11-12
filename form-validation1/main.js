
function validator(options) {
    var formElement = document.querySelector(options.form)

    var selectorRules = {};
    function validate(inputElement, rule) {
        var errorElement = inputElement.parentElement.querySelector('.form-message');
        var errorMessage = rule.test(inputElement.value);

        // var rules = selectorRules[rule.selector];
        // console.log(rules);
        // // for (var i = 0; i < rules.length; i++) {
        // //     switch(inputElement.type) {
        // //         case 'checkbox':
        // //         case 'radio':
        // //             errorMessage = rules[i](formElement.querySelector(rule.selector + ':checked'));
        // //             break;
        // //     }
        // // }

        if (errorMessage) {
            errorElement.innerText = errorMessage;
            inputElement.parentElement.classList.add('invalid');
        }
        else {
            errorElement.innerText = '';
            inputElement.parentElement.classList.remove('invalid');
        }
        return !errorMessage;
    }
    if (formElement) {
        formElement.onsubmit = function (e) {
            e.preventDefault();
            var isFormValid = true;

            options.rules.forEach(function (rule) {
                var inputElement = formElement.querySelector(rule.selector);
                var isValid = validate(inputElement, rule);
                if (!isValid) {
                    isFormValid = false;
                }
            });

            if (isFormValid) {
                if (typeof options.onSubmit === 'function') {
                    var inputValues = Array.from(formElement.querySelectorAll('[name]')).reduce(function (values, input) {
                        return (values[input.name] = input.value) && values;
                    }, {})

                    options.onSubmit(inputValues);
                }
            }

        }
        options.rules.forEach(function (rule) {
            var inputElement = formElement.querySelector(rule.selector);
            if (inputElement) {
                inputElement.onblur = function () {
                    validate(inputElement, rule);
                }
                inputElement.oninput = function () {
                    var errorElement = inputElement.parentElement.querySelector('.form-message');
                    errorElement.innerText = '';
                    inputElement.parentElement.classList.remove('invalid');
                }
            }
        })
    }
}

validator.isEmail = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (value.trim().length === 0) return 'Vui lòng nhập Email!';
            return regex.test(value) ? undefined : 'Email không hợp lệ!';
        }
    };
}

validator.isRequired = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : 'Vui lòng nhập thông tin!';
        }
    };
}

validator.isPassword = function (selector, minLenth) {
    return {
        selector: selector,
        test: function (value) {
            if (value) {
                if (value.length < minLenth) return 'Mật khẩu phải có ít nhất 6 ký tự';
                return undefined;
            }
            else return 'Vui lòng nhập mật khẩu';
        }
    };
}

validator.isConfirmPassword = function (selector, passwordSelector) {
    return {
        selector: selector,
        test: function (value) {
            if (value) {
                if (value === password.value) {
                    return undefined;
                }
                else
                    return 'Xác nhận mật khẩu thất bại!';
            }
            else
                return 'Vui lòng nhập mật khẩu!';
        }
    };
}