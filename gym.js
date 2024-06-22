function submit(){
  let name = document.getElementById("name");
  let number = document.getElementById("number");

  if(name.value == ""){
      alert("Please Enter Name")
  }else if(number.value == ""){
      alert("Please Enter Number")
  }else{
      alert("Thanks For Join : " + name.value)
  }
}

