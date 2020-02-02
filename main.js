
const peopleData = function (data) {
  console.log(data);
  const source = $('#people-template').html();
  const template = Handlebars.compile(source);
  const newHTML = template({contact: data});
  $(`#contacts`).append(newHTML)
}


$.ajax({
  method: "GET",
  url: "https://jsonplaceholder.typicode.com/users",
  success: peopleData,
  error: function (xhr, text, error) {
    alert("Seems to be an issue with the request!")
  }
})


