
const createBlock2 = (date, data) => {
    const divDateTasks = document.createElement('li');
    const divTitles = document.createElement('p');
    const divTasks = document.createElement('ul');
    
    divTitles.innerHTML = date+" [DIR]";

    data.forEach((file) =>{
        const task = document.createElement('li');
        task.innerHTML = file.time+".txt [FILE]";
        divTasks.appendChild(task);
    });

    divDateTasks.append(divTitles, divTasks);
    document.getElementById('list').appendChild(divDateTasks);
}


//Obtiene y muestra la lista de desde el servidor
const listTask = () => {
    //Solicitud al servidor HTTP
    const xhr = new XMLHttpRequest();
    //Cuando la solicitud se complete
    xhr.onreadystatechange = () =>{
        if (xhr.readyState === 4 && xhr.status === 200) {
            //Obtiene la respuesta del servidor en formato JSON
            const data = JSON.parse(xhr.responseText);
            console.log(data.dates);
            data.dates.forEach((day) => {
                createBlock2(day.date, day.data);
            });
        }
    }
    xhr.open('GET', '/list', true);
    xhr.send();
}

