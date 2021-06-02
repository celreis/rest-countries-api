<script>
    import Button from '../assets/Button.svelte'
    import {caret_down} from '../assets/icons'
    import {searchRegion} from '../store/store'

    let show = false
    let regions = ['Africa','America','Asia','Europe','Oceania']

    const showRegions =()=>{
        show = !show
    }

    const handleSelect = (e) => {
        $searchRegion.region = e.target.innerText
        show = !show
        console.log('click')
    }
    

</script>

<div class="flex flex-col relative w-50">
    <Button text="Filter by Region" button="filterBtn shadow-md dark:(bg-hex-2b3945 text-white)" on:click={showRegions}>
        {@html caret_down}
    </Button>
    {#if show}
    <div class="flex flex-col text-left w-50 pb-2 shadow-md bg-white  dark:bg-hex-2b3945 rounded-md overflow-hidden absolute mt-14">
        {#each regions as region}
        <button class="hover:(bg-hex-2b3945 text-white) dark:(bg-hex-2b3945 text-white hover:bg-hex-202c37) px-4 text-left pt-2" on:click={(e) => handleSelect(e)}>{region}</button>
        {/each}
    </div>
    {/if}
</div>



