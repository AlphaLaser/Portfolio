<script>
	
	let bf = false;
	let rf = false;
	let gf = false;
	let yf = false;
	
	function blue_toggle(){
		bf = !bf ;
	}
	
	function red_toggle(){
		rf = !rf ;
	}
	
	function green_toggle(){
		gf = !gf ;
	}
	
	function yellow_toggle(){
		yf = !yf ;
	}

</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@900&family=Poppins:wght@100;400;900&display=swap');	

	
	.bo1{
		position : absolute ;
		left : 0% ;
		top: 100%;
		width:50%;
		height:50%;
		background-color : white ;
		cursor : pointer;
	}
	
	.bo2{
		position : absolute ;
		left : 0% ;
		top: 150%;
		width:50%;
		height:50%;
		background-color : #334063 ;
		cursor : pointer;
	}
	
	.bo3{
		position : absolute ;
		right : 0% ;
		top: 150%;
		width:50%;
		height:50%;
		background-color : white ;
		cursor : pointer;
	}
	
	.bo4{
		position : absolute ;
		right : 0px ;
		top: 100%;
		width:50%;
		height:50%;
		background-color : #1E2D3C ;
		cursor : pointer;
		color: white ;
		font-family:Code-light;
	}
	
	.blue{
		
		height:100%;
		width:100%;
		background-color: white;
		cursor : pointer;
	}
	
	.red{
		
		height:100%;
		width:100%;
		background-color: #1E2D3C;
		cursor : pointer;
	}
	
	.green{
		
		height:100%;
		width:100%;
		background-color: #334063;
		cursor : pointer;
	}
	
	.yellow{
		
		height:100%;
		width:100%;
		background-color: white;
		cursor : pointer;
	}

	.mit{
		position: absolute;
		top : 30% ;
		left : 15%;
	}

	.pb{
		position: absolute;
		top : 32.5% ;
		right : 15%;
	}

	.arq{
		position: absolute;
		top : 32.5% ;
		left : 15%;
		
	}

	.slingshot{
		position: absolute;
		top : 32.5% ;
		right : 15%;
	}

	/* .text1{
		/* position:absolute;

		font-family : Poppins ; 
		color : #1E2D3C ;
	} */


</style>

{#if bf == false}
{#if rf == false}
{#if gf == false}
{#if yf == false}

<div class="bo1" on:click={blue_toggle}>
	<div class="mit" >
		<img src="images/mit.png">
	</div>
	
</div>

<div class="bo2" on:click={green_toggle}>
	
	<div class="arq" >
		<img src="images/arquest.png" >
	</div>
</div>
<div class="bo3" on:click={yellow_toggle}>
	<div class="slingshot" >
		<img src="images/slingshot.png" width="400px" height="136px">
	</div>
</div>
<div class="bo4" on:click={red_toggle}>
	<div class="pb" >
		<img src="images/pb.png" width="400px" height="136px">
	</div>
</div>

{/if}
{/if}
{/if}
{/if}


{#if bf == true}

<div class = "blue" on:click={blue_toggle}>
	
</div>

{/if}

{#if rf == true}

<div class = "red" on:click={red_toggle}>
	
</div>

{/if}

{#if gf == true}

<div class = "green" on:click={green_toggle} >
	
</div>

{/if}

{#if yf == true}

<div class = "yellow" on:click={yellow_toggle}>
	
</div>

{/if}