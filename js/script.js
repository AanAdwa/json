const data = "1245620078.json";
const ListFmly = document.querySelector('#fmly-list');
var urlParams = new URLSearchParams(window.location.search);
var jk = urlParams.get("jk")

const GetListFmly = ()=> {
    fetch(data)
    .then (response =>{
        return response.json();
    }).then (responseJson =>{
        console.log(responseJson.family);
        if (jk == null){
            ShowListFmly(responseJson.family);
        }
        else{
            ShowListfmlyFromGender(responseJson.family)
        }
    }).catch(error =>{
        console.error(error)
    })
}

const ShowListFmly = fmly =>{
        ListFmly.innerHTML = "";
        fmly.forEach(item => {
            ListFmly.innerHTML += `
                    <div class="col s12 m6 l4">
            <div class="card">
                <div class="card-image">
                <img src=${item.profil}>
                <span class="card-title">${item.nama}</span>
                </div>
                <div class="card-content">
                    <p>
                        Nama : ${item.nama} <br>
                        umur : ${item.umur} <br>
                        Alamat : ${item.alamat}<br>
                        pendidikan : ${item.pendidikan}<br>
                        jenis kelamin : ${item.jk}<br>
                        Hobi : ${item.hobi}
                    </p>
            </div>
            </div> `
        });

}

const ShowListfmlyFromGender =  fmly=>{
    if (jk == "L"){
        jk = "laki-laki";
    }else{
        jk = "perempuan";
    }
    ListFmly.innerHTML = " ";
    fmly.forEach(item => {
    console.log(item.jk);
    if (item.jk == jk){
            ListFmly.innerHTML += `
                    <div class="col s12 m6 l4">
            <div class="card">
                <div class="card-image">
                <img src=${item.profil}>
                <span class="card-title">${item.nama}</span>
                </div>
                <div class="card-content">
                    <p>
                        Nama : ${item.nama} <br>
                        umur : ${item.umur} <br>
                        Alamat : ${item.alamat}<br>
                        pendidikan : ${item.pendidikan}<br>
                        jenis kelamin : ${item.jk}<br>
                        Hobi : ${item.hobi}
                    </p>
            </div>
            </div> `
        }
        });
    
    
}

document.addEventListener('DOMContentLoaded', function(){
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
    GetListFmly();
    
});
