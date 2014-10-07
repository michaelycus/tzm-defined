		<nav id="nav" class="skel-layers-fixed">
			<ul>
				<li><a ui-sref="/">Home</a></li>
				<li>
					<a href="">Capítulos</a>

					<ul>
						<?php

						foreach ($json->parts as $i => $part) {
							if ( count($json->parts[$i]->chapters) == 1) 
							{
								echo '<li><a ui-sref="' . $json->parts[$i]->chapters[0]->url . '">' . $json->parts[$i]->title . '</a></li>';
							}
							else
							{
								echo '<li>';
									echo '<a ui-sref="">' . $json->parts[$i]->title . '</a>';

									echo '<ul>';
									foreach ($json->parts[$i]->chapters as $j => $chapter)
									{
										echo '<li><a ui-sref="'. $json->parts[$i]->chapters[$j]->url .'">'. $json->parts[$i]->chapters[$j]->title .'</a></li>';
									}
									echo '</ul>';
								echo '<li>';
							}
				         }

						?>
						
					</ul>
				</li>

				<li><a ui-sref="ajude_a_traduzir">Ajude a Traduzir</a></li>
				<li><a ui-sref="creditos">Créditos</a></li>
			</ul>
		</nav>