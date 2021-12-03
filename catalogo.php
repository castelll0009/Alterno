<?php include("db.php"); ?>

<!DOCTYPE html>

<html lang="en">
	<head>
		<meta charset= "utf-8">
		<link rel="stylesheet" href="css/stylemovil.css">										
		<meta name="viewport"  content="width=device-width initial-scale=1.0">
		<link rel="stylesheet" type="text/css" href="css/slider.css">
    	<link
	    rel="stylesheet"
    	href="https://unpkg.com/swiper/swiper-bundle.min.css"
    	/>         
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" />
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">  
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
		<link rel="stylesheet" href="css/main.css">		
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
		<link rel="preconnect" href="https://fonts.gstatic.com">
		<link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap" rel="stylesheet">
		<link rel="preconnect" href="https://fonts.gstatic.com">
		<link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Lato:wght@300;400;700&family=Zilla+Slab:wght@500&display=swap" rel="stylesheet">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
		<title>Alterno</title>
	</head>
	<body>
		<main>
			<i class="fa fa-th" id="btn-detalles"  onclick="desplegarItems()"></i>
			<i class="fas fa-eye" id="beepc" onclick="vistaEscritorio()" ></i>			
				
			<header>							
				<div class="container-header">
								
					<div  class="container-logo-title">		
						<div class="contenedor-img">
							<img  id="zumbido" class="img-logo animate__animated animate__swing animate__normal" src="alterno.png">
						</div>								
						<h1 >Alterno</h1>
						<h2 style="font-size: 0.6em; margin-top: 20px;">FS </h2>
					</div>
	
					<div id="menu-desplegable" class="container-menu">
						<nav class="menu"></nav>
							<ul  class=" menu-ul">
							<a href = "index.php" >
								<li href= "index.php" ><label class="fa fa-home" style="color: #000" ></label></li>
							</a>
							<a href = "catalogo.php" >
								<li >CATALOGO</li>
							</a>
							<a href = "contactos.html" >
								<li >CONTACTOS </li>
							</a>
							<a href = "" >
								<li >ACERCA DE </li>
							</a>																
							<li style="color: #000; font-weight: bold;">INICIAR SESION</li>
						</ul>
					</div>					
				</div>
			</header>	
			
			<!-- INFO BANNER -->
			<div class="info-container" >		
				<img id="img-home" src="alterno.png" class="overflow-img animate__animated animate__fadeIn img-tam-mediano">							
				<h1 id="info-title" class=" fuente-tam color-verde animate__animated animate__fadeIn">Catalogo</h1>		
				<div id="div-index" class="animate__animated animate__flipInX">
					<h2 class="fuente-lato" style="font-size: 1.5em; margin-top:-10px;" >Detalles que te hacen feliz</h2>
					<p>Si buscas alegrarle el dia a alguien, o simplemente ganarse su corazòn estas en el sition indicado.</p>				
				</div>				
			</div>

			<!-- TABLA -->
			<div class="lista-catalogo" >
				<?php
		        $query = "SELECT p.nombre_pro, c.nombre_cat FROM producto p, categoria c ORDER BY categoria LIMIT 10";
		        $result_query = mysqli_query($conn, $query);

		        while($row = mysqli_fetch_assoc($result_query)) { ?>
		        <tr>
		        	<td><?php echo $row['nombre_pro']; ?></td>
		            <td><?php echo $row['nombre_cat']; ?></td>
		            <td>
		              	<a href="edit.php?id=<?php echo $row['id']?>" class="btn btn-secondary" style="color: #fff; background-color: #000">
		                	<i class="fas fa-cog"></i>
		              	</a>
		                <a href="delete_game.php?id=<?php echo $row['id']?>" class="btn btn-secondary">
		                	<i class="far fa-trash-alt"></i>
		                </a>
		            </td>
		        </tr>
		        <?php } ?>	
			</div>	
						
			<!-- BARRA INFERIOR -->
			<nav class=" nav-barra-inferior animate__animated animate__fadeIn">
				<a href = "index.html" class="margen-derecha">Catalogo</a>
				<a href = "contactos.html" class="margen-derecha" class="margen-derecha">Contactos</a>				
				<a href = "https://www.facebook.com/profile.php?id=100009055449064" class="margen-derecha">Redes Sociales</a>	
				<a href = "https://www.instagram.com/castelll0009">Instragram</a>		
				<a style="background-color: #000; border-radius: 5px; padding-left: 8px; padding-right: 8px; color: beige;"  href = "https://drive.google.com/file/d/1NDsNjMkE4laC038JCCZmbtsV9ulMIvaF/view?usp=sharing">CV-Developer</a>	
			</nav>				
			
		</main>	  
		<audio id="buzz">	  
	  		<source src="buzz.mp3" type="audio/mpeg">
	  		Your browser does not support the audio element.
		</audio>

		<script src="js/menu.js"></script>	
		<script src="js/buttom_menu.js"></script>	
		<script src="js/jquery.js"></script>  		
		 <!-- Swiper JS -->
	    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
	    <!-- Initialize Swiper -->
	    <script src="js/slider.js"></script> 		
	</body>
</html>