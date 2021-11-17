<script>
  export let navbar ;
  
</script>

<style global lang="scss">
	@import "main.scss";
</style>

<nav class="navbar is-primary" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="logo">
      </a>
  
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
  
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item">
          Tech Stack
        </a>
  
        <a class="navbar-item" href="#p2">
          Experience
        </a>
  
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            Projects
          </a>
  
          <div class="navbar-dropdown">
            <a class="navbar-item">
              ParaTools
            </a>
            <a class="navbar-item">
              Jobs
            </a>
            <a class="navbar-item">
              Contact
            </a>
            <hr class="navbar-divider">
            <a class="navbar-item">
              Report an issue
            </a>
          </div>
        </div>
      </div>
  
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            
            <a class="button is-link">
              <strong>Hire</strong>
            </a>
            <a class="button is-link">
              <strong>Contact</strong>
            </a>
          </div>
        </div>
      </div>
    </div>
    
  </nav>

