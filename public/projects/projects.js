const { log } = console;

(async function getProjects() {
    try {

        $.ajax({
            method: "GET",
            url: '/api/projects',
            dataType: 'json'
        }).done(function(data) {

            $.each(data, function(i, projects) {

                projects.forEach(function(value) {
                    $('<div class="card-size">').appendTo("#projects")
                    .append($("<h1></h1>").text(value.title))
                    .append($("<h2></h2>").text(value.description))
                    
                });
            });
        })

    } catch (error) {
        log(error);
    }

})();