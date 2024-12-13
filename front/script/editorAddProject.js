$(document).ready(() => {
    $("#create_project").submit((event) => {
        event.preventDefault(); // Предотвращаем обычную отправку формы
        $.ajax({
            url: "http://127.0.0.1:8000/projects", // Обратите внимание: изменили URL
            method: "POST",
            data: $("#create_project").serialize(),
            success: (response) => {
                console.log('Проект успешно создан:', response);
                alert('Проект успешно создан!');
                location.href = "editorIndex.html";
            },
            error: (xhr) => {
                console.error("Ошибка при создании проекта:", xhr.responseJSON);
                alert('Произошла ошибка при создании проекта. Попробуйте еще раз.');
                console.log(xhr);
            }
        });
    });
});