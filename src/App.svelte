<script>

	import Navbar from './Navbar.svelte' ;
    import Icons from './Icons.svelte' ;
    import Experience from './Experience.svelte';
    import Typewriter from 'svelte-typewriter'

	
</script>

<style global lang="scss">
	@import "main.scss";
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@900&family=Poppins:wght@100;400;900&display=swap');	.upper-orange{
        position: absolute;
        height: 50%;
        width: 100%;
        background-color:  #F86F6D;
    }

    .lower-white{
        position: absolute;
        top:50%;
        height: 50%;
        width: 100%;
        background-color: #344050;
    }

	.boy-image{
        position: absolute;
        width: 40%;
        height: auto;
        top : 18% ;
        left : 32% ;
    }

    .name{
        position: absolute ;
        align-items: center;
        top : 3% ;
        font-family: 'Poppins', sans-serif;
        font-size: 170px;
        color: #344050;
        opacity: 60%;
    }

    section{
        width : 100% ;
        height :100% ;
        float : left;
    }

   




</style>

<Typewriter loop>Hello World!</Typewriter>

<section class="p1">
<container class = "upper-orange">
	<Navbar/>

    
        <div class="name">
            <p>
                Adit Magotra

            </p>
        </div>
    
        
    
    
</container>



<container class = "lower-white">

</container>


<div class = "boy-image">
	<figure class="image">
		<img src="../images/boy-pc.png" width="721px" height="703px" alt="boy">
	  </figure>
	</div>

<Icons/>

</section>  


<br>   
        
<section class = "p2" >


<Experience/>

</section>
<!-- <section class = "p3" >


    <TechStack/>
    
    </section>  -->

        

   



