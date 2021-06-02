<script>
    import Text from '../assets/Text.svelte'
    import Button from '../assets/Button.svelte'
    import {back_arrow} from '../assets/icons'
    import {borderName,formatName} from '../store/utils'
    import {countries} from '../store/store'
    import {fade} from 'svelte/transition'

    export let country

</script>

<main transition:fade class="mt-32 grid grid-rows-1 px-6 absolute md:(grid grid-cols-2 gap-12 justify-between px-12)">
    <figure>
        <a href="/">
            <Button text="Back" button="backBtn">
                {@html back_arrow}
            </Button>
        </a>
        <img class="mt-16 shadow-md md:mt-8" src={country.flag}
        alt="{country.name}">
    </figure>
    <div class="mt-16 md:mt-24">
        <h1 class="text-xl font-bold pb-4">{country.name}</h1>
        <section class="inline-flex flex-col md:flex-row pb-8 gap-8">
            <div class="flex flex-col gap-y-2 md:gap-y-0">
                <Text desc="Native Name" info={country.nativeName}/>
                <Text desc="Population" info={country.population.toLocaleString('en-US')}/>
                <Text desc="Region" info={country.region}/>
                <Text desc="Sub Region" info={country.subregion}/>
                <Text desc="Capital" info={country.capital}/>
            </div>
            <div class="flex flex-col gap-y-2 md:gap-y-0">
                <Text desc="Top Level Domain" info={country.topLevelDomain}/>
                <Text desc="Currencies" info={country.currencies[0].name}/>
                <Text desc="Languages" info={country.languages.map(language => language.name)}/>
            </div>
        </section>
        <section class="pb-8 md:(flex gap-4)">
            <p class="mb-4 font-semibold">Border Countries: </p>
            <div class="inline-flex flex-wrap gap-4">
                {#if country.borders.length > 0}
                {#each country.borders as border}
                <a href="/{formatName(borderName(border,$countries))}" class="shadow-md">
                    <Button text={borderName(border,$countries)}/>
                </a>
                {/each}
                {:else}
                <p>No data found</p>
                {/if}
            </div>

        </section>
    </div>

</main>
