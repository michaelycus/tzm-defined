	<!-- Features -->
	<section class="box features">
		<h2 class="major"><span>Capítulos</span></h2>		
		<div>
			<?php
			$str = file_get_contents('ajax/parts.json');
			$json = json_decode($str);
			$index = 0;
			foreach ($json->parts as $i => $part) {
				foreach ($json->parts[$i]->chapters as $j => $chapter){
					if ( $index % 4 == 0 ){
						echo '<div class="row">
				';
				}
			echo '<div class="3u">
					<section class="box feature">
						<a ui-sref="'.$json->parts[$i]->chapters[$j]->url.'" class="image featured"><img src="images/cap_'.$json->parts[$i]->chapters[$j]->id.'.png" alt="" /></a>
						<h3><a href="#">'.$json->parts[$i]->chapters[$j]->title.'</a></h3>
						<p>'
							.$json->parts[$i]->chapters[$j]->description.
						'</p>
					</section>										
				</div>
				';
					if ( $index++ % 4 == 3 ){
						echo '</div>
						';
					}
				}
			}
			?>
			</div>

		</div>
	</section>