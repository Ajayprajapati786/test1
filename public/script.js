const form = document.querySelector('#user-form');
const dataa = document.querySelector('#dataa');

axios.get('http://localhost:5000/users')
  .then(response => {
    dataa.innerHTML = `
      <table style="border-collapse: collapse;">
        <tr>
          <th style="border: 1px solid black;">ID</th>
          <th style="border: 1px solid black;">Price</th>
          <th style="border: 1px solid black;">name</th>
          <th style="border: 1px solid black;">category</th>
          <th style="border: 1px solid black;">delete</th>
        </tr>
        ${response.data.map(user => `
          <tr>
            <td style="border: 1px solid black;">${user.id}</td>
            <td style="border: 1px solid black;">${user.price}</td>
            <td style="border: 1px solid black;">${user.name}</td>
            <td style="border: 1px solid black;">${user.category}</td>
            <td style="border: 1px solid black;">
              <button onclick="deleteUser(event,${user.id})">Delete</button>
            </td>
          </tr>
        `).join('')}
      </table>
    `;
  })
  .catch(err => {
    alert('Error fetching data: ' + err.message);
  });



form.addEventListener('submit', event => {
  event.preventDefault();
  console.log("function clicked")
  const price = document.querySelector('#price').value;
  const name = document.querySelector('#name').value;
  const category = document.querySelector('#category').value;
  axios.post('/users', { price, name, category }, {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(() => {
      alert('Product added');
      form.reset();
      window.location.reload(); // reload the page

    })
    .catch(err => {
      alert('Error creating user: ' + err.message);
    });
});

function deleteUser(event, id) {
  event.stopPropagation();
  
  axios.delete(`http://localhost:5000/users/${id}`)
    .then(() => {
      console.log(id);
      console.log("tttttttttttttttttttttttttttttttttttttt");
      window.location.reload();
    })
    .catch(err => {
      alert('Error deleting user: ' + err.message);
    });
}


// function editUser(event, id) {
//   event.stopPropagation();

//   const newType = prompt('Enter new type of expense:');
//   const newDate = prompt('Enter new date:');

//   axios.put(`http://localhost:5000/users/${id}`, { expense: newType, date: newDate }, {
//     headers: { 'Content-Type': 'application/json' }
//   })
//     .then(() => {
//       console.log("User updated");
//       window.location.reload();
//     })
//     .catch(err => {
//       alert('Error updating user: ' + err.message);
//     });
// }
