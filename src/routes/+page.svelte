<svelte:head>
    <title>Lifeforce</title>
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

<div class="container">
    <div class="header">
        <h1>Lifeforce</h1>
        <p class="tagline">A <i>VERY</i> cool minecraft server</p>
    </div>
    
    <div class="row">
        <a href="/rules" class="button rules"><i class="nf nf-fa-gavel"></i>Rules</a>
        <a href="https://discord.gg/hZcCC7ezcH" class="button discord"><i class="nf nf-fa-discord"></i>Discord</a>
        <a href="/tools/team-picker" class="button team-picker"><i class="nf nf-oct-people"></i>Team Picker</a>
    </div>

    <div class="sections">
        <details class="section">
            <summary onclick={handleSummaryClick}>What the f*%k is Lifeforce?</summary>
            <div class="section-content">
                <p>
                    Lifeforce is a Minecraft server that started as a small Lifesteal clone, but since then has evolved into a unique experience with custom mechanics, items, and more! We have a lot of cool features planned for the future, so stay tuned!
                </p>
            </div>
        </details>
        <details class="section">
            <summary onclick={handleSummaryClick}>How do I join?</summary>
            <div class="section-content">
                <p>
                    Whilst the server isn't particularly private, we don't exactly advertise it either, and you do need to apply to get whitelisted (this is to prevent griefing and to build a community). You can apply by joining our Discord linked above and clicking the button in the #apply channel!
                </p>
            </div>
        </details>
    </div>
</div>

<style lang="scss">
    @import url('https://www.nerdfonts.com/assets/css/webfont.css');

    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 1rem;

        @media (max-width: 768px) {
            padding: 0.75rem;
        }
    }

    .header {
        text-align: center;
        margin-bottom: 2rem;

        @media (max-width: 768px) {
            margin-bottom: 1.5rem;
        }
    }

    h1 {
        margin-bottom: 0.5rem;
        font-size: 2.5rem;

        @media (max-width: 768px) {
            font-size: 2rem;
        }
    }

    .tagline {
        font-size: 1.25rem;
        opacity: 0.9;

        @media (max-width: 768px) {
            font-size: 1.1rem;
        }
    }

    .row {
        display: flex;
        gap: 1rem;
        justify-content: center;
        flex-wrap: wrap;

        @media (max-width: 768px) {
            gap: 0.75rem;
        }
    }

    .button {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.75rem 1.25rem;
        font-size: 1rem;
        color: white;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-weight: bold;
        text-decoration: none;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);

        &:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
        }

        &:active {
            transform: translateY(0);
        }

        &.rules {
            background-color: #6d6766;
        }

        &.discord {
            background-color: #7289da;
        }

        &.team-picker {
            background-color: #43b581;
        }

        @media (max-width: 768px) {
            padding: 1rem 1.25rem;
            font-size: 0.95rem;
            flex: 1 1 auto;
            min-width: 140px;
        }

        @media (max-width: 480px) {
            width: 100%;
            justify-content: center;
        }
    }

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