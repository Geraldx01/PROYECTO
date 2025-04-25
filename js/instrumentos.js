/*funcionalidad de la galeria evento onchange*/
document.getElementById('Opciones').addEventListener('change', galeria);

function galeria() {
    var opciones = document.getElementById('Opciones').value;
    switch (opciones) {
        case "Pipetas":
            document.querySelector('.Pipetas').style.display = "block";
            document.querySelector('.probetasGraduadas').style.display = "none";
            document.querySelector('.balanzasPrecision').style.display = "none";
            document.querySelector('.morteroPistilo').style.display = "none";
            document.querySelector('.Termometrodigital').style.display = "none";
            


            break;
        case "probetasGraduadas":
            document.querySelector('.Pipetas').style.display = "none";
            document.querySelector('.probetasGraduadas').style.display = "block";
            document.querySelector('.balanzasPrecision').style.display = "none";
            document.querySelector('.morteroPistilo').style.display = "none";
            document.querySelector('.Termometrodigital').style.display = "none";
     

            break;
        case "balanzasPrecision":
            document.querySelector('.Pipetas').style.display = "none";
            document.querySelector('.probetasGraduadas').style.display = "none";
            document.querySelector('.balanzasPrecision').style.display = "block";
            document.querySelector('.morteroPistilo').style.display = "none";
            document.querySelector('.Termometrodigital').style.display = "none";
 

            break;
        case "morteroPistilo":
            document.querySelector('.Pipetas').style.display = "none";
            document.querySelector('.probetasGraduadas').style.display = "none";
            document.querySelector('.balanzasPrecision').style.display = "none";
            document.querySelector('.morteroPistilo').style.display = "block";
            document.querySelector('.Termometrodigital').style.display = "none";


            break;
        case "Termometrodigital":
            document.querySelector('.Pipetas').style.display = "none";
            document.querySelector('.probetasGraduadas').style.display = "none";
            document.querySelector('.balanzasPrecision').style.display = "none";
            document.querySelector('.morteroPistilo').style.display = "none";
            document.querySelector('.Termometrodigital').style.display = "block";
          

            break;
        default:
            document.querySelector('.Pipetas').style.display = "none";
            document.querySelector('.probetasGraduadas').style.display = "none";
            document.querySelector('.balanzasPrecision').style.display = "none";
            document.querySelector('.morteroPistilo').style.display = "none";
            document.querySelector('.Termometrodigital').style.display = "none";
      

    }
}


/// cargar video lightbox
function ejecutar(div, video_id) {
  // Obtener el elemento de video por su ID
  var video = document.getElementById(video_id).src;

  // Agregar el parámetro autoplay a la URL del video
  document.getElementById(video_id).src = video + '&autoplay=0';

  // Mostrar el lightbox cambiando su display a 'block'
  document.getElementById(div).style.display = 'block';
}



// Función para ocultar la caja y eliminar la reproducción automática de YouTube
function ocultar(div, video_id) {
  // Obtener la URL actual del video
  var video = document.getElementById(video_id).src;

  // Remover el parámetro autoplay de la URL
  var cleaned = video.replace('&autoplay=1', '');

  // Actualizar la URL del video sin autoplay
  document.getElementById(video_id).src = cleaned;

  // Ocultar el lightbox cambiando su display a 'none'
  document.getElementById(div).style.display = 'none';
}