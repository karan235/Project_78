var images =[
    "https://i.postimg.cc/MKdhy06Z/family.jpg","https://i.postimg.cc/wjMnFtMX/father.jpg","https://i.postimg.cc/bw5W5zSK/mother.jpg","https://i.postimg.cc/JnL6wtrd/sister.jpg","https://image.shutterstock.com/image-illustration/3d-render-old-happy-woman-260nw-588605546.jpg"
];

var names =[
    "Family Book","Rghuram Karanam","Archana Karanam","Manvitha Karanam","Vijaya Karanam"
];

 var i=0;
 function update()
 {
     i++;
     var numbers_of_family_members_in_arrys= 4;
     if(i>numbers_of_family_members_in_arrys){
         i=0;
     }
     var updatedImags= images[i];
     var updatedName=names[i];
     document.getElementById("family_member_image").src=updatedImags;
     document.getElementById("family_member_name").innerHTML=updatedName;
 }



