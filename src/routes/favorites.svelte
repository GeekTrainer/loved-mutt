<svelte:head>
    <title>Dog shelter sample site</title>
</svelte:head>

<script>
    async function loadFavorites() {
        const response = await fetch('/api/favorites');
        return (await response.json()).favorites;
    }
</script>

<h1>Your favorite mutts</h1>
<div>Here's the list of all the mutts you've marked as your favorite</div>

{#await loadFavorites()}
    ...loading favorites
{:then favorites} 
    <ul>
    {#each favorites as favorite}
        <li><a href={favorite.imageUrl}>{favorite.dogType}</a></li>    
    {/each}
    </ul>
{/await}