//your code here!
const list = document.getElementById("infi-list");

// Function to add list items
function addListItems(count) {
    for (let i = 0; i < count; i++) {
        const li = document.createElement("li");
        li.textContent = `Item ${list.children.length + 1}`;
        list.appendChild(li);
    }
}

// Initial load with 10 items
addListItems(10);

// Event listener for infinite scrolling
list.addEventListener("scroll", function () {
    if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
        addListItems(2); // Add 2 new items when scrolled to the bottom
    }
});

