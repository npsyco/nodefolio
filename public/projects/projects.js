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
                    $('<div>').appendTo("#projects")
                    .append($("<h2></h2>").text(value.title))
                    .append($("<h3></h3>").text(value.description))
                    
                });
            });
        })

    } catch (error) {
        log(error);
    }

})();