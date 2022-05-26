$(function () {
    $(".delete").click(function () {
        Swal.fire({
            title: "Czy na pewno chcesz usunąć rekord",

            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: "Nie",
            confirmButtonText: "Tak",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    $.ajax({
                        method: "DELETE",
                        url: deleteUrl + $(this).data("id"),
                    })
                        .done(function (response) {
                            window.location.reload();
                        })
                        .fail(function (response) {
                            Swal.fire({
                                icon: "error",
                                title: "Oops...",
                                text: "Coś poszło nie tak!!",
                            });
                        })
                );
            }
        });
    });
});
