
async function callApi(){

try{
  const response= await fetch("https://jsonplaceholder.typicode.com/todos");
  const json= await response.json();
  loopThroughResults(json);
}
catch(error){
  console.log(error);
}
}

callApi();


function loopThroughResults(json){

  const resultsContainer= document.getElementById("resultsHere");

  for (let i=0; i<json.length; i++){

    resultsContainer.innerHTML+="<div>" + json[i].userId +json[i].id  + json[i].title +json[i].completed +"</div>";

    document.getElementById('resultsContainer').innerHTML+= "<div class='wrapper'><p>"
     + "User Id:" + json[i].userId + "</p><p>"
     + "Id:" + json[i].id +"</p><p>"
     + "Title:" + json[i].title +"</p><p>"
     + "Completed:" + json[i].completed + "</p></div>"

  }
}
