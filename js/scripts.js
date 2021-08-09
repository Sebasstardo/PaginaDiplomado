$(document).ready(function () {
  $(".dropdownButton").click(function () {
    //Elimina la clase on de todos los botones

    //Plegamos todo el contenido que esta abierto
    $(".dropdownContent").slideUp("fast");

    //Si el siguiente slide no esta abierto lo abrimos
    if ($(this).next().is(":hidden") == true) {
      //Añade la clase on en el botón
      $(this).addClass("on");

      //Abre el slide
      $(this).next().slideDown("down");
    }
    //
  });
});
