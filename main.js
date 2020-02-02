
const peopleData = function (contacts) {
  const source = $('#people-template').html();
  const template = Handlebars.compile(source);
  const newHTML = template({contacts});
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


