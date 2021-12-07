window.onload = function () {
    document.querySelector('.text-box').value = '';
}
let text_box = document.querySelector('.text-box');
let add_btn = document.querySelector('.add-btn');
//click enter to add task
text_box.addEventListener('keyup', (event) => {
    if (event.keyCode == 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        add_btn.click();
    }
});

let list_item = document.querySelectorAll('.list-item');

let task_list = document.querySelector(".task-list");

add_btn.addEventListener('click', (e) => {
    if (text_box.value.trim() != "") {

        let li_tag = document.createElement("li");
        create_set_Alt_value(li_tag, "class", "list");
        task_list.appendChild(li_tag);

        let p_tag = document.createElement("p");
        p_tag.innerHTML = text_box.value;
        create_set_Alt_value(p_tag, "class", "list-item");
        li_tag.appendChild(p_tag);

        let span_tag = document.createElement("span");
        create_set_Alt_value(span_tag, "class", "cancel-icon fa fa-times");
        li_tag.appendChild(span_tag);

        let cancel_icon = document.querySelectorAll('.cancel-icon');
        cancel_icon.forEach(element => {
            element.addEventListener('click', (e) => {
                console.log(element.parentElement);
                var list = element.parentElement;
                list.remove();
            });
        });

    } else {
        alert("Task should not be empty");
    }
    text_box.value = "";
    text_box.focus();
});

function create_set_Alt_value(tag, attName, attValue) {
    let att = document.createAttribute(attName);
    att.value = attValue;
    tag.setAttributeNode(att);
}