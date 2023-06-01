function openInbox() {
    document.getElementById("myInbox").style.display="flex";
    document.getElementById("myToday").style.display="none";
    document.getElementById("myWeek").style.display="none";
    document.getElementById("myCompleted").style.display="none";
    document.getElementById("myTrash").style.display="none";
}

function openToday() {
    document.getElementById("myToday").style.display="flex";
    document.getElementById("myInbox").style.display="none";
    document.getElementById("myWeek").style.display="none";
    document.getElementById("myCompleted").style.display="none";
    document.getElementById("myTrash").style.display="none";
}

function openWeek() {
    document.getElementById("myWeek").style.display="flex";
    document.getElementById("myInbox").style.display="none";
    document.getElementById("myToday").style.display="none";
    document.getElementById("myCompleted").style.display="none";
    document.getElementById("myTrash").style.display="none";
}

function openCompleted() {
    document.getElementById("myCompleted").style.display="flex";
    document.getElementById("myWeek").style.display="none";
    document.getElementById("myInbox").style.display="none";
    document.getElementById("myToday").style.display="none";
    document.getElementById("myTrash").style.display="none";
}

function openTrash() {
    document.getElementById("myWeek").style.display="none";
    document.getElementById("myInbox").style.display="none";
    document.getElementById("myToday").style.display="none";
    document.getElementById("myCompleted").style.display="none";
    document.getElementById("myTrash").style.display="flex";
}

function openTaskForm() {
    document.getElementById("taskAdd").style.display="flex";
}

function closeTaskForm() {
    document.getElementById("taskAdd").style.display="none";
}

/*function openMenuBar() {
    document.getElementById("menu").style.display="flex";
    document.getElementById("tasks").style.display="none";
}*/

$(document).ready(openMenuBar() {
    $("button.menu-toggle-icon").click()
})