$(".datepicker").datepicker({
  startDate: "0",
  autoclose: true,
  beforeShowDay: function(day) {
    var start = new Date("2019-02-25");
    var end = new Date("2019-03-12");
    if (day > start && end > day) {
      return false;
    }

    if (day.getDay() === 1) {
      return false;
    } else {
      return true;
    }
  }
});

$(".clockpicker").clockpicker({
  placement: "bottom",
  align: "left",
  autoclose: true,
  default: "now"
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
  errorPlacement: function(error, element) {
    var name = $(element).attr("name");
    error.appendTo($("#" + name + "_validate"));
  },
  submitHandler: function(form, event) {
    event.preventDefault();
    $("#submitButton").hide();
    form.submit();
  }
};

$("#reservation-form").validate(options);
