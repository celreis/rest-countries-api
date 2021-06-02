<script>
    import {search_icon} from '../assets/icons'
    import {searchRegion} from '../store/store'


</script>

<label for="search" class="inline-flex items-center gap-2 py-2 px-4 md:w-80 rounded-md shadow-md bg-white dark:(bg-hex-2b3945)">
    <span>{@html search_icon}</span>
    <input class="py-2 w-70 bg-transparent focus:outline-none" bind:value={$searchRegion.searched} type="text" placeholder="Search for a country">
</label>

