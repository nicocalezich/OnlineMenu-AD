document.addEventListener('DOMContentLoaded', () =>{
     document.getElementById('banner').onclick = loadIndex;
     document.getElementById('btn_mix').onclick = loadMixs;
     document.getElementById('btn_legumbres').onclick = loadLegumbres;
     document.getElementById('btn_harinas').onclick = loadHarinas;
     document.getElementById('btn_leches').onclick = loadLechesVegetales;
     document.getElementById('btn_semillas').onclick = loadSemillas;
     document.getElementById('btn_golosinas').onclick = loadGolosinasSaludables;
     document.getElementById('btn_sales').onclick = loadSales;
     document.getElementById('btn_varios').onclick = loadVarios;    

    function loadIndex() {
        window.open("index.html","_self");
        } 
        
        function loadMixs() {
        window.open("categorias/mixs.html","_self");
        }
        
        function loadLegumbres() {
        window.open("legumbres.html","_self");
        }
        
        function loadHarinas() {
        window.open("harinas.html","_self");
        }
        
        function loadLechesVegetales() {
        window.open("lechesvegetales.html","_self");
        }
        
        function loadSemillas() {
        window.open("semillas.html","_self");
        }
        
        function loadGolosinasSaludables() {
        window.open("golosinassaludables.html","_self");
        }
        
        function loadSales() {
        window.open("sales.html","_self");
        }
        
         function loadVarios() {
        window.open("varios.html","_self");
        }
})

