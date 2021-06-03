<script>
    import {countries,searchRegion} from '../store/store'
    import Country from './Country.svelte'
    import {formatName} from '../store/utils'

 
</script>

<div class="px-6 mt-8 flex flex-col gap-12 md:(mt-0 grid grid-cols-4 gap-12 py-12 px-0 ) lg:(gap-18)">

    {#each $countries as country}
    <!-- Search country and filter by region -->

    {#if country.name
    .toLowerCase()
    .includes($searchRegion.searched.toLowerCase())
    && country.region
    .includes($searchRegion.region)}

    <a href="/{formatName(country.name)}">
        <Country {country}/>
    </a>   
    {/if}
    {/each}

</div>
