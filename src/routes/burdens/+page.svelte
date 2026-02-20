<svelte:head>
    <title>Burdens - Lifeforce</title>
</svelte:head>

<script lang="ts">
    function handleSummaryClick(event: Event) {
        event.preventDefault();
        const summary = event.currentTarget as HTMLElement;
        const details = summary.closest('details') as HTMLDetailsElement;
        const content = details.querySelector('.section-content') as HTMLElement;
        
        if (!content) return;

        if (details.open) {
            // Closing
            content.style.gridTemplateRows = '0fr';
            content.style.opacity = '0';
            content.style.paddingTop = '0';
            
            setTimeout(() => {
                details.open = false;
            }, 300);
        } else {
            // Opening
            details.open = true;
            requestAnimationFrame(() => {
                content.style.gridTemplateRows = '1fr';
                content.style.opacity = '1';
                content.style.paddingTop = '0.5rem';
            });
        }
    }
</script>

<h1>Burdens</h1>
<p>Burdens only happen once on the server so once a player has completed a burden, nobody else has to.</p>

<div class="sections">
    <details class="section">
        <summary onclick={handleSummaryClick}><i class="nf nf-fa-helmet_safety"></i> Obtain Armour</summary>
        <div class="section-content">
            <p>
                Upon gaining the "Suit Up" advancement, you will be given <span class="blocky">Weakness I</span> for 5 minutes.
            </p>
        </div>
    </details>
    <details class="section">
        <summary onclick={handleSummaryClick}><i class="nf nf-fa-gem"></i> Diamond Gear</summary>
        <div class="section-content">
            <p>
                This is triggered by the "Cover Me In Diamonds" advancement, it removes a heart from you.
            </p>
        </div>
    </details>
    <details class="section">
        <summary onclick={handleSummaryClick}><i class="nf nf-md-fire"></i> Nether</summary>
        <div class="section-content">
            <p>
                This is triggered when you enter the nether, it will remove 2 hearts from you.
            </p>
        </div>
    </details>
    <details class="section">
        <summary onclick={handleSummaryClick}><i class="nf nf-fa-cart_shopping"></i> Villager Trading</summary>
        <div class="section-content">
            <p>
                This is triggered when you trade with a villager, it will remove a heart from you.
            </p>
        </div>
    </details>
    <details class="section">
        <summary onclick={handleSummaryClick}><i class="nf nf-md-bucket_outline"></i> Full Netherite</summary>
        <div class="section-content">
            <p>
                This is triggered when you equip a full set of netherite armour, it will remove 2 hearts from you but in return you will recieve a lucky block.
            </p>
        </div>
    </details>
</div>

<p>
    Note: This list is not exhaustive, there may be other burdens that are not listed here. If you find any, please let me know so I can add them to the list.
</p>

<style lang="scss">
    @import url('https://www.nerdfonts.com/assets/css/webfont.css');

    .sections {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin: 2rem auto 0;
        max-width: 700px;

        @media (max-width: 768px) {
            margin-top: 1.5rem;
            gap: 0.75rem;
        }
    }

    .section {
        background-color: #111a;
        padding: 1.25rem;
        border-radius: 12px;
        transition: background-color 0.2s ease;

        &:hover {
            background-color: #1a1a1aaa;
        }

        @media (max-width: 768px) {
            padding: 1rem;
            border-radius: 8px;
        }

        summary {
            font-size: 1.25rem;
            font-weight: bold;
            cursor: pointer;
            user-select: none;
            padding: 0.25rem 0;

            @media (max-width: 768px) {
                font-size: 1.1rem;
            }
        }

        .section-content {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows 0.3s ease-out, opacity 0.3s ease-out, padding 0.3s ease-out;
            overflow: hidden;
            opacity: 0;
            padding-top: 0;

            > * {
                min-height: 0;
            }

            p {
                line-height: 1.6;
                margin: 0;

                @media (max-width: 768px) {
                    font-size: 0.95rem;
                    line-height: 1.5;
                }
            }
        }
    }
</style>