function panggilsort(){
  var angka=[2,39,76,50,9,7,41,2,24,1,16];
 console.log("sebelumnya: " + angka )
	console.log("Ascending: " + angka.sort())
	console.log("Descending: " + angka.reverse())
  var result =angka.filter(function(angka){
    return (angka>15);
  });
  console.log("Filter > 10:"+result)

}
panggilsort();
