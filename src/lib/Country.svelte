<script>
    import Text from '../assets/Text.svelte'
    import {fade} from 'svelte/transition'
    export let country
</script>


<div transition:fade class="z-2 rounded-md overflow-hidden shadow-md bg-white dark:(bg-hex-2b3945 text-white)">
    <figure class="object-cover">
        <img src={country.flag}
        class="w-screen md:(h-32) lg:(h-38)"
        alt="{country.name}">
    </figure>
    <section class="px-4 pt-8 pb-10">
        <h1 class="font-bold text-[16px] pb-4">{country.name}</h1>
        <Text desc="Population" info={country.population.toLocaleString('en-US')}/>
        <Text desc="Region" info={country.region}/>
        <Text desc="Capital" info={country.capital}/>
    </section>
</div>
