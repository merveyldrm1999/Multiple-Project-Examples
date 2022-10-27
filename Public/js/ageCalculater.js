function filteredAgeCAlculator() {
  const birt = document.getElementById("birt_date").value;
  const year = birt.split("-")[0];
  const date = new Date();
  todayYear = date.getFullYear();

  age = todayYear - year;

  console.log(age);
}
