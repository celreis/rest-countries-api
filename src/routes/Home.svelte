<script>
    import {Route} from 'tinro'
    import Search from '../lib/Search.svelte'
    import Filter from '../lib/Filter.svelte'
    import CountryList from '../lib/CountryList.svelte'
    import {fade} from 'svelte/transition'


</script>

<Route path="/">
    <div transition:fade class="px-6 py-32 md:(px-12) lg:(px-18)">
        <div class="w-full flex flex-col gap-y-8 md:(flex-row justify-between)">
            <Search/>
            <Filter />
        </div>
        <CountryList />
    </div>

</Route>


<style>
    *{
        font-size: 14px;
    }
</style>
