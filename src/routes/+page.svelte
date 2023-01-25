<script>
    import Navbar from "./navigation/Navbar.svelte";
    import Sidebar from "./navigation/Sidebar.svelte";
    import Main from "./navigation/Main.svelte";

    let open = false;
</script>

<Sidebar bind:open />
<Navbar bind:sidebar={open} />
<Main />

<svelte:head>
    <link
        href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
        rel="stylesheet"
    />
</svelte:head>

<h1>Prize Bot</h1>


<style>
    :global(body) {
        padding: 0;
    }
    h1 {
        color: purple;
        font-size: 2em;
    }
</style>
