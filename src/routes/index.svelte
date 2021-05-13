<script>
    let imageUrl = '';
    let dogType = '';
    let message = 'If the dog is for you, let us know!';

    import { onMount } from 'svelte';

    // Load first dog for display
    onMount(loadDog);

    async function loadDog() {
        const result = await fetch('https://dog.ceo/api/breeds/image/random/1/alt');
        const imageInfo = (await result.json()).message[0];
        imageUrl = imageInfo.url;
        dogType = imageInfo.altText.substring(0, imageInfo.altText.lastIndexOf(' '));
    }

    async function saveFavoriteDog() {
        const result = await fetch(
            '/api/save-dog',
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({imageUrl, dogType})
            }
        );
        const json = await result.json();
        message = `${dogType} saved as favorite!`;
        await loadDog();
    }

    async function nextDog() {
        message = 'They\'re all good dogs';
        await loadDog();
    }

    async function getUserInfo() {
        const response = await fetch('/.auth/me');
        const payload = await response.json();
        if (payload.clientPrincipal) {
            // user is authenticated
            return payload.clientPrincipal.userDetails;
        } else {
            // anonymous
            return null;
        }
    }
</script>

<svelte:head>
    <title>Dog shelter sample site</title>
</svelte:head>
<article class="index">
    <h2>Identify your favorite dogs!</h2>
    <p>
        This is a sample site where you can flip through pictures of dogs to identify which ones you love best!
    </p>

    <div class="message">{message}</div>
    {#await getUserInfo()}
        Getting user info...
    {:then username}
        {#if username}
        <div class="center">Welcome, {username}! See your <a href="favorites">favorites</a>!</div>
        <div class="vote-button-container center">
            <button class="vote-button" on:click={saveFavoriteDog}>
                <span class="fas fa-vote-yea fa-4x icon"></span>
                Save as favorite!
            </button>
            <button class="vote-button" on:click={nextDog}>
                <span class="fas fa-forward fa-4x icon"></span>
                Cute dog! But but best for someone else.
            </button>
        </div>
        {:else}
        <a href="/.auth/login/github">Login to save dogs as favorites!</a>
        {/if}
    {/await}
    <div>
        <div class="header center">
            How about the {dogType}?
        </div>
        <div>
            <img src={imageUrl} alt={dogType} />
        </div>
    </div>
</article>

<style>
    img {
        width: 90%;
        margin: auto;
    }
    /* .saved {

    }
    .skipped {

    } */
    .message {
        border-radius: 5px;
        border-style: solid;
        border-color: black;
        border-width: 2px;
        margin-bottom: 10px;
        padding: 5px;
        background-color: lightgreen;
        text-align: center;
    }
    .icon {
        display: block;
        margin-bottom: 4px;
    }
    .vote-button {
        width: 150px;
        text-align: center;
        height: 175px;
        font-weight: bold;
        display:flexbox;
        vertical-align: top;
        margin-bottom: 10px;
    }
    .vote-button-container {
        vertical-align: middle;
    }
    .header {
        font-size: 1.5rem;
        font-weight: bold;
    }
    .center {
        text-align: center;
    }
</style>
