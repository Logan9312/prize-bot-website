<script>
    export let name = "World";
  </script>
  
  <style>
    nav ul {
      display: flex;
      list-style: none;
      padding: 0;
    }
    
    nav li {
      margin-right: 1rem;
    }
  </style>
  
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </nav>
  
  <main>
    <h1>Welcome to my website, {name}!</h1>
    <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
  </main>