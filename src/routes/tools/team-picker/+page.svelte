<script lang="ts">
    const ratings = {
        S: ['Aurates_', 'GamingPinguinYT'],
        A: ['OmlByte', 'Beyondd_', 'DocDeathSNR', 'Poowen_', 'E1ox', 'Whispree', 'rzyuk'],
        B: ['x_Alastoro_', 'djc11', 'Breezify_', 'Pyro_Pirates', 'ClashOfPhilipp', 'Zackisboi1051', 'AJBlaster2009'],
        C: ['Noxious2719', 'BossXmage', 'SharknessMC', 'OAPdust66', 'Squidling4121', 'X_TyFighter', 'Mysticboss2022', 'Blood09', 'Captainmail', 'R399y', 'Nazvito'],
        D: ['MCfreezieYT', '43resumodnar', 'TheBabaYaga', 'ItsVain', 'NavyHAWKS', 'CasperBomSquad', 'MisremEmberEd', 'LivaTheDiva'],
        E: ['Never63', 'Notlamii', 'VoidEternal11'],
        F: ['Rozzer047', 'SupineJarl', 'Freenora', 'M1CI']
    }

    let selected: Array<{
        name: string;
        rating: string;
    }> = $state([]);

    function isDisabled(rating: string) {
        // Max team size is 4
        if (selected.length >= 4) return true;
        
        // S ratings cannot team with anyone
        if (selected.some(p => p.rating === 'S')) return true;
        if (rating === 'S' && selected.length > 0) return true;
        
        // Max of two A ratings on a team
        if (rating === 'A' && selected.filter(p => p.rating === 'A').length >= 2) return true;
        
        return false;
    }
</script>

<svelte:head>
    <title>Team Picker - Lifeforce</title>
</svelte:head>

<p>Pick your team!</p>

<div class="tool">
    <div class="list">
        {#each Object.entries(ratings) as [rating, players] (rating)}
            <div class="rating">
                <em>{rating}</em>
                <ul>
                    {#each players.sort((a, b) => a.localeCompare(b)) as player (player)}
                        <li>
                            <button class="player" onclick={() => {
                                console.log(selected);
                                if (isDisabled(rating)) return;
                                console.log('Adding', player, 'to team');
                                selected = [...selected, { name: player, rating }];
                            }} class:disabled={isDisabled(rating)} class:selected={selected.some(p => p.name === player)}>
                                <img src={`https://minotar.net/helm/${player}/32`} alt="{player} avatar" />
                                <span>{player}</span>
                            </button>
                        </li>
                    {/each}
                </ul>
            </div>
        {/each}
    </div>
    <div class="selection">
        <h2>Your Team</h2>
        <p>Click on a player to add them to your team! (You also have to click yourself :3)</p>
        {#key selected}
            <ul>
                {#each selected as player, i (player.name)}
                    <li>
                        <button class="player" onclick={() => {
                            console.log('Removing', player.name, 'from team');
                            selected = selected.filter((_, index) => index !== i);
                        }}>
                            <img src={`https://minotar.net/helm/${player.name}/32`} alt="{player.name} avatar" />
                            <span>{player.name} ({player.rating})</span>
                        </button>
                    </li>
                {/each}
            </ul>
        {/key}
    </div>
</div>

<style>
    .tool {
        display: flex;
        justify-content: space-between;
        gap: 2rem;
        margin-top: 1rem;
    }

    .list {
        background-color: #111a;
        padding: 1rem;
        border-radius: 8px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 2rem;
        flex: 1;
    }

    .selection {
        min-width: 300px;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        margin-top: 0.5rem;
        gap: 0.25rem;
        display: flex;
        flex-direction: column;
    }

    .player {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.25rem 0.5rem;
        border-radius: 4px;
        transition: background-color 0.2s;
        background-color: #0000;
        color: #fff;
        border: 1px solid #fff2;
        cursor: pointer;
    }

    .player:hover {
        background-color: #fff2;
    }

    .player.disabled {
        background-color: #fff1;
        color: #fff5;
        border-color: #fff1;
        cursor: not-allowed;
    }

    .player.selected {
        background-color: #0f0a;
        border-color: #0f0a;
    }

    /* Mobile styles */
    @media (max-width: 768px) {
        .tool {
            flex-direction: column-reverse;
            gap: 1rem;
        }

        .selection {
            min-width: auto;
            background-color: #111a;
            padding: 1rem;
            border-radius: 8px;
        }

        .list {
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
        }

        .player {
            padding: 0.75rem 1rem;
            font-size: 1.1rem;
            gap: 0.75rem;
        }

        .player img {
            width: 40px;
            height: 40px;
        }

        ul {
            gap: 0.5rem;
        }
    }

    @media (max-width: 480px) {
        .list {
            grid-template-columns: 1fr;
            gap: 0.75rem;
        }
    }
</style>