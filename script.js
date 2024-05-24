function submitForm() {
  var name = document.getElementById("inputnama").value;
  var speciality = document.getElementById("speciality").value;
  var lane = document.getElementById('lane').value;
  var difficulty = document.getElementById("difficulty").value;

  var roles = [];
  var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  checkboxes.forEach(function (checkbox) {
      roles.push(checkbox.id);
  });

  var message = "Nama: " + name + "\n";
  message += "Speciality: " + speciality + "\n";
  message += "Lane: " + lane + "\n";
  message += "difficulty: " + difficulty + ("\n");
  message += "Roles: " + roles.join("/");

  alert(message);
}