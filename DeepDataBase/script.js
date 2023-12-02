
$(document).ready(function () {

    $("#form_data").submit(function (e) {
        e.preventDefault();

        var firstname = $(this).find("#firstname").val().trim();
        var lastname = $(this).find("#lastname").val().trim();
        console.log(firstname, lastname);


        var form = $("#form_data")[0];
        var formData = new FormData(form);

        formData.append("type", "form_data");
        console.log(formData);


        $.ajax({
            type: 'POST',
            url: 'action.php',
            data: formData,
            dataType: 'JSON',
            processData: false,
            contentType: false,
            cache: false,
            success: function (response) {
                console.log(response);
            },
            error: function (xhr, status, error) {
                console.error(xhr, status, error);
            },
        });

    });

});