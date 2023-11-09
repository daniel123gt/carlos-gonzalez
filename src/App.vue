<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useMovies } from './composables/useMovies'
import { useGenres } from './composables/useGenres';
import RootHeader from './components/root/Header/index.vue'
import MoleculesCard from './components/molecules/Card/index.vue'
import AtomInput from './components/atom/Input/index.vue'

const movieList: any = ref(null)
const genresList: any = ref(null)
const titleEl: any = ref(null)
const descEl: any = ref(null)

const { getMovies } = useMovies();
const { getGenres } = useGenres();

let dataMovies:  any;
let dataGenres: any;

onMounted(async () => {
  dataMovies = await getMovies();
  movieList.value = dataMovies;

  dataGenres = await getGenres();
  genresList.value = dataGenres;
})

console.log(genresList.value)

const onFilterMovies = () => {
  
  titleEl.value = document.querySelector('#title');
  descEl.value = document.querySelector('#description');
  console.log(document.querySelector('#Drama').checked)
  movieList.value  =  dataMovies?.filter((movie: any)  => movie.title.toLowerCase().includes(titleEl.value.value.toLowerCase()) && movie.description.toLowerCase().includes(descEl.value.value.toLowerCase()) && movie.genre.includes(genresList.value.filter((genre: any) => genre == document.querySelector(`#${genre}`)?.value && document.querySelector(`#${genre}`)?.checked)))
}

</script>

<template>
  <div class="container mx-auto pb-12">
    <RootHeader>
      <div class="grid-movies  pt-6">
        <AtomInput ref="titleEl" class="col-span-4" id="title" name="title" placeholder="Buscar por título" label="Título" type="text" @event-change=" onFilterMovies()"/>
        <AtomInput ref="descEl" class="col-span-4" id="description" name="description" placeholder="Buscar por descripción" label="Descripción" type="text" @event-change="onFilterMovies()"/>
        <div class="col-span-4 ">
          <p>Categorías</p>
          <div class="flex items-center gap-4 pt-2">
            <label  v-for="(genre, index) in genresList" :key="index" class="flex gap-2" :for="genre">
              <span>{{genre}}</span>
              <input class="w-[20px]" type="checkbox" :name="genre" :id="genre" @change="onFilterMovies" :value="genre">
            </label>
          </div>
        </div>
      </div>
      
    </RootHeader>
    <div class="flex flex-row justify-stretch flex-wrap gap-6">
      <MoleculesCard class="col-span-3" v-if="movieList" v-for="(movie, index) in movieList" :key="index" :title="movie.title"
        :description="movie.description" :img="movie.img" :genre="movie.genre" containerClass=""/>
    </div> 
  </div>
</template>

