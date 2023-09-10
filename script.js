<script>
        // Select the list items
        var listItems = document.querySelectorAll('#development-paths li');

        // Append "Development" to each list item
        listItems.forEach(function(item) {
            item.textContent += 'Development';
        });
    </script>