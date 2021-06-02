<script>
    import {Route, router} from 'tinro'
    import {countries} from '../store/store'
    import CountryDetail from '../lib/CountryDetail.svelte'
    import {formatName} from '../store/utils'

    // scroll up when link opened
    router.subscribe(_=>window.scrollTo(0,0))

</script>

    {#each $countries as country}
    <Route path="/{formatName(country.name)}">
        <CountryDetail {country}/>
    </Route>
    {/each}
