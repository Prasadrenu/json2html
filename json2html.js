// json2html.js
export default function json2html(data) {
    // Initialize the table with the required data-user attribute
    let html = '<table data-user="darck21042004@gmail.com">';
  
    // Add the table header
    html += '<thead><tr><th>Name</th><th>Age</th><th>Gender</th></tr></thead>';
  
    // Add the table body with rows based on the data
    html += '<tbody>';
    data.forEach(row => {
      html += '<tr>';
      html += ⁠ <td>${row.Name}</td><td>${row.Age}</td> ⁠;
      html += row.Gender ? ⁠ <td>${row.Gender}</td> ⁠ : ''; // Only add Gender if it exists
      html += '</tr>';
    });
    html += '</tbody>';
  
    // Close the table
    html += '</table>';
  
    // Return the generated HTML string
    return html;
  }