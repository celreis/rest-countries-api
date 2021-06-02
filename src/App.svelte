<script>
    import Header from './lib/Header.svelte'
    import Home from './routes/Home.svelte'
    import CountryInfo from './routes/CountryInfo.svelte'
    import {countries} from './store/store'


    $: fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => {
            countries.set(data)
            console.log(data)
        }).catch(e => console.log(e))

</script>

<svelte:head>
  <title>Rest Countries</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap');
  </style>
</svelte:head>

<Header />
<Home />
<CountryInfo />

<style>
    :global(*) {
      font-family: 'Nunito Sans', sans-serif;
    }
  
    :global(body){
      @apply bg-hex-fafafa text-hex-111517;
    }
  
    :global(body.dark){
          @apply bg-hex-202c37 text-white;
      }
   
  </style>
