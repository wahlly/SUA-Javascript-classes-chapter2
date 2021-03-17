//to create a div element
    const div = document.createElement('div');

//add a class to the div element
    div.className = 'firstClass';

//to add an id to the class...
    div.id = 'firstClass1';

//set an attribute to the element created
    div.setAttribute('style', 'color:red');

//create a text node for the element created so far...
    const createText = document.createTextNode('Hello, this is a hands-on practice with javascript DOM');
    
//add the newly created text node to the div element
    div.appendChild(createText);

//selecting a placeholder inside the html DOM using the javascript...
    const container = document.querySelector('header .container')
    const h1 = document.querySelector('header h1');
        console.log(div);
        container.insertBefore(div, h1);


//looping through an element...
        const items = document.querySelectorAll('#items');
    items.forEach(item => {
        console.log(items.innerText);
        items.innerText += ' to be sold/given'
    });
    console.log(items.innerText)

const paragraph = document.getElementsByTagName('p');
    console.log(paragraph.innerText); 
    
    console.log(div.style);
    console.log(div.style.color);


    console.log(div.classList);
    //to add and remove classes
    div.classList.add('unstableClass');
    div.classList.remove('unstableClass');



