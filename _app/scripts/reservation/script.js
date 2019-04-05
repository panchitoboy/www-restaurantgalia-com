$('.datepicker').datepicker({
    startDate: '0',
    autoclose: true,
    beforeShowDay: function (day) {
        var start = new Date('2019-02-25'); 
        var end = new Date('2019-03-12'); 
         if(day > start && end > day){
             return false;
         }

        if (day.getDay() === 1) {
            return false;
        } else {
            return true;
        }
    }
});

$('.clockpicker').clockpicker({
    placement: 'bottom',
    align: 'left',
    autoclose: true,
    'default': 'now'
});


var options = {
    rules: {
        name: {
            minlength: 2,
            maxlength: 50,
            required: true
        },
        date: {
            date: true,
            required: true
        },
        email: {
            email: true,
            required: true
        },
        time: {
            required: true
        },
        phone: {
            number: true,
            required: true
        },
        quantity: {
            number: true,
            min: 1,
            max: 20,
            required: true
        }
    },
    errorElement: "span",
    errorClass: "error text-danger",
    errorPlacement: function (error, element) {
        var name = $(element).attr("name");
        error.appendTo($("#" + name + "_validate"));
    },
    submitHandler: function (form, event) {
        event.preventDefault();
        $("#submitButton").hide();
        var data = $('form').serializeArray().reduce(function (result, value) {
            result[value.name] = value.value;
            return result;
        }, {});

        $.ajax({
            url: "https://formspree.io/restaurantgalia@hotmail.com",
            method: "POST",
            data: data,
            dataType: "json",
            error: function (request, error) {
                $("#responseMessage").text('Nous vous informons que un erreur est survenu au moment de traiter votre reservation. Veuillez nous appeller par telephone pour faire votre reservation.');
            },
            success: function () {
                $("#responseMessage").text('Nous vous informons que votre reservation a été pris en compte.');
            }
        });
    }
};

$('#reservation-form').validate(options);
