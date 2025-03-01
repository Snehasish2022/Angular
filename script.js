
document.getElementById('tableBtn').addEventListener('click', function() {
   let leftNavbar=document.getElementById('leftNavbar');
   let tables=['table1Section','table2Section','table3Section'];
   let html='<ul>';

   for(let i=0;i<tables.length;i++){
       html+=`<li><a href="#' onclick="showTable('${tables[i]}')">Table $(i+1)</a></li>`;
   }
    
   html+='</ul>';
   leftNavbar.innerHTML=`${tables[0]}`;
   
});

document.getElementById('imageBtn').addEventListener('click', function() {
    document.getElementById('leftNavbar').innerHTML = `
        <ul>
            <li><a href="#" onclick="showImage('image1')">Image 1</a></li>
            <li><a href="#" onclick="showImage('image2')">Image 2</a></li>
            <li><a href="#" onclick="showImage('image3')">Image 3</a></li>
        </ul>
    `;
    
});
function showTable(tableId) {
    // document.querySelectorAll('.section').forEach(section => {
    //     section.style.display = 'none';
    // });
    document.getElementById(tableId).style.display = 'block';
}

function showImage(imageId) {
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById('imageSection').style.display = 'block';
    document.querySelectorAll('.image-container img').forEach(img => {
        img.style.display = 'none';
    });
    document.querySelector(`img[alt="${imageId}"]`).style.display = 'block';
}


