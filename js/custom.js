function check() {
    $.ajax({
        url: 'http://127.0.0.1:8000/json',
        // url: "https://tswstatus.pythonanywhere.com/json",
        dataType: 'json',
        success: function(response){
            $('#tswStatus').fadeOut("fast", function() {
                $('#tswStatus').html(response['html']);
                $('#tswStatus').fadeIn("fast");
            });
        },
        error: function(rs, e) {
            console.log(e);
        }
    })
}

check();
