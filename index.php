<?php
$str = file_get_contents('ajax/parts.json');
$json = json_decode($str);
?>

<!DOCTYPE html>
<html>
<head>
	<title>O Movimento Zeitgeist: Uma Nova Forma De Pensar</title>
	<meta http-equiv="content-type" content="text/html; charset=utf-8" />
	<meta name="description" content="A tradução do livro The Zeitgeist Movement Defined: Realizing a New Train of Thought
								é um projeto voluntário realizado pelo Time Linguístico do Movimento Zeitgeist brasileiro.  O objetivo
								desse trabalho é tornar o conteúdo desse livro acessível para todas as pessoas que falam português.
								Um grupo se reuniu para discutir as etapas que envolvem esse trabalho" />
	<meta name="keywords" content="TZM, MZ, Movimento Zeitgeist, The Zeitgeist Movement, Uma nova forma de pensar, EBR, RBE, economia baseada em recursos" />   
	<meta name="author" content="Michael Marques">
	<meta http-equiv="pragma" content="no-cache" />

	<meta property="og:url" content="http://umanovaformadepensar.com.br/" />
	<meta property="og:image" content="http://umanovaformadepensar.com.br/images/fb-logo.jpg" />
	<meta property="og:type" content="book" />
	<meta property="og:title" content="O Movimento Zeitgeist: Uma Nova Forma de Pensar" />
	<meta property="og:description" content="A tradução do livro The Zeitgeist Movement Defined: Realizing a New Train of Thought é um projeto voluntário realizado pelo Time Linguístico do Movimento Zeitgeist brasileiro." />

	<link rel="image_src" href="http://umanovaformadepensar.com.br/images/fb-logo.jpg" />
	
	<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
	<link rel="icon" href="images/favicon.ico" type="image/x-icon">				

	<base href="/">

    <!-- JS (load angular, ui-router, and our custom js file) -->
    <!-- <script src="http://code.angularjs.org/1.2.13/angular.js"></script>    
    <script src="//cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.8/angular-ui-router.min.js"></script>  -->
    <script src="js/angular.js"></script>
    <script src="js/angular-ui-router.min.js"></script>
    <script src="js/app.js"></script>

    <!--[if lte IE 8]><script src="css/ie/html5shiv.js"></script><![endif]-->
	<script src="js/jquery.min.js"></script>
	<script src="js/jquery.dropotron.min.js"></script>
	<script src="js/skel.min.js"></script>
	<script src="js/skel-layers.min.js"></script>
	<script src="js/init.js"></script>
	<noscript>
		<link rel="stylesheet" href="css/skel.css" />
		<link rel="stylesheet" href="css/style.css" />
		<link rel="stylesheet" href="css/style-desktop.css" />
	</noscript>
	<!--[if lte IE 8]><link rel="stylesheet" href="css/ie/v8.css" /><![endif]-->
</head>

<!-- apply our angular app to our site -->
<body class="homepage" data-ng-app="routerApp">

	<!-- NAVIGATION -->
<?php include ('navigation.php'); ?>	

	<!-- MAIN CONTENT -->	
	<div ui-view="banner"></div>

	<div ui-view="home-template"></div>
    
	<div ui-view="chapters-template"></div>	

	<div data-ng-include src="'footer.html'"></div>

	</script>

</body>

</html>
