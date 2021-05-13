<script>
    let imageUrl = '';
    let altText = '';
    let message = 'If the dog is for you, let us know!';

    import { onMount } from 'svelte';

    onMount(loadDog);
    async function loadDog() {
        const result = await fetch('https://dog.ceo/api/breeds/image/random/1/alt');
        const imageInfo = (await result.json()).message[0];
        imageUrl = imageInfo.url;
        altText = imageInfo.altText;
    }

    async function saveFavoriteDog() {
        const result = await fetch(
            '/api/save-dog',
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({imageUrl})
            }
        );
        const json = await result.json();
        message = `${altText} saved as favorite!`;
        await loadDog();
    }

    async function nextDog() {
        message = 'They\'re all good dogs';
        await loadDog();
    }
</script>

<svelte:head>
    <title>The Loved Mutt</title>
</svelte:head>
<article class="index">
    <h1>Welcome to the Loved Mutt</h1>
    <p>
        The Loved Mutt is a sample site where you can flip through pictures of dogs to identify which ones you love best!
    </p>

    <div class="message">{message}</div>
    <div class="vote-button-container">
        <button class="vote-button" on:click={saveFavoriteDog}>
            <span class="fas fa-vote-yea fa-4x icon"></span>
            Save as favorite!
        </button>
        <button class="vote-button" on:click={nextDog}>
            <span class="fas fa-forward fa-4x icon"></span>
            Cute dog! But but best for someone else.
        </button>
    </div>
    <div>
        <div class="header">
            How about the {altText}?
        </div>
        <div>
            <img src={imageUrl} alt={altText} />
        </div>
    </div>
</article>

<style>
    .index {
        font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
            "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
        margin: 0 5%;
    }
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
        text-align: center;
    }
    .header {
        text-align: center;
        font-size: 1.5rem;
        font-weight: bold;
    }
</style>
