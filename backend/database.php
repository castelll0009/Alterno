<?php //gestina las peticiones que se hacen desde el request-app.js 
    //No conectamos a la base de datos
    $connection = mysqli_connect(
        //host,user,pasword,nombre base datos,
        /* base de datos Clever cloud
        'blzwwwafrtnoulyompah-mysql.services.clever-cloud.com', 'uflmxyisjbdu7w7l', 'k5ulb9EJWmdqIgYLjNHF', 'blzwwwafrtnoulyompah'
        */
         '127.0.0.0', 'root','','alterno-db'
        //conexion Base de datos hosgator
       // '162.241.61.135', 'mojitosc_castelll0009','Castillo1997177-','mojitosc_mojitos-db'
    );
    
    /*
    if($connection){
        echo "database is connected";
    }   else{
        echo "no se pudo conectar a la BD";
    }
    */
?>