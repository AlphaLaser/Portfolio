<script>
	let skill= 0;
	
	function to_0(){
		skill = 0;
		skill = skill;
	}
	
	function to_1(){
		skill = 1;
		skill = skill;
	}
	
	function to_2(){
		skill = 2;
		skill = skill;
	}
	
	function to_3(){
		skill = 3;
		skill = skill;
	}
	
	function to_4(){
		skill = 4;
		skill = skill;
	}
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@900&family=Poppins:wght@100;100;100&display=swap');	

	.sidebar{
		position:absolute;
		height :100%;
		width:10%;
		background-color:#F86F6D;
	}
	
	
	
	.home{
		cursor:pointer;
	}

    .robot{
        cursor:pointer;
    }

    .data{
        cursor:pointer;
    }

    .web{
        cursor:pointer;
    }

    .ui{
        cursor:pointer;
    }

    .skill-content{
        position:absolute;
        left : 25%;
        top: 25%;
    }

    .skills{
        position:absolute;
        top:10%;
        left:25%;
        font-family: 'Poppins', sans-serif;
        font-size: 100px;
        font-weight: 100;
        color:black;
    }

    .right-main-section{
        position:absolute;
        width:90%;
        height:100%;
        right:0%;
        background-color:#344050;
    }
	

</style>

<div class="sidebar">
    <div class="skill-content">
        <div class="home" on:click={to_0}><img src = "images/home.png" width="50px" alt="home"></div><br><br>
        <div class="robot" on:click={to_1}><img src = "images/robot.png" width="50px" alt="home"></div><br><br>
        <div class="data" on:click={to_2}><img src = "images/data.png" width="50px" alt="home"></div><br><br>
        <div class="web" on:click={to_3}><img src = "images/web.png" width="50px" alt="home"></div><br><br>
    </div>
	
</div>

<div class="right-main-section">

</div>

<!-- {#if skill == 0 }
<div class="home-main"></div>

{:else if skill == 1}
<div class="ml-main"></div>

{:else if skill == 2}
<div class="ds-main"></div>

{:else if skill == 3}
<div class="web-dev-main"></div>

{/if} -->