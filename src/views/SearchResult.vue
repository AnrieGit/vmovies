<template>
    <div class="search-result">
        <div class="search-result">
            <div class="movie-lists">
                <div class="movie" v-for="movie in movies" :key="movie.imdbID">
                    <router-link :to="'/movie/' + movie.imdbID" class="movie-link">
                        <div class="movie-image">
                            <div class="overlay"></div>
                            <img :src="movie.Poster" alt="Movie Image">
                            <div class="type">{{ movie.Type }}</div>
                        </div>
                        <div class="movie-detail">
                            <p class="year">{{ movie.Year }}</p>
                            <h3>{{ movie.Title }}</h3>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onBeforeMount } from "vue";
import { useRoute, } from 'vue-router'
import Nprogress from 'nprogress';

export default {
    name: 'SearchResult',
    setup() {
        let loading = ref(false);
        const movies = ref([]);
        const route = useRoute();
        const apikey = ref(process.env.VUE_APP_API_KEY);

        onBeforeMount(async () => {
            Nprogress.configure({ showSpinner: false });

            loading.value = true;
            Nprogress.start();
            const response = await fetch(
                `https://www.omdbapi.com/?apikey=${apikey.value}&s=${route.params.search}`
            )

            const data = await response.json();
            loading.value = false;
            Nprogress.done();
            Nprogress.remove();

            movies.value = data.Search
        }); 
        
        return {
            loading,
            movies,
        }
    }
}
</script>

<style lang="scss" scoped>
.search-result {
    display: flex;
    justify-content: center;

    .movie-lists {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin: 80px 40px 40px 40px;
        max-width: 1200px;

        .movie {
            width: 235px;
            padding: 16px 8px;

            .movie-link {
                display: flex;
                flex-direction: column;
                height: 100%;

                .movie-image {
                    position: relative;
                    display: block;

                    .overlay {
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        height: 100%;
                        opacity: 0;
                        background: rgba(0, 0, 0, 0.6);
                        border-radius: 8px;
                        -webkit-transition: all 0.2s ease-in-out 0s;
                        -moz-transition: all 0.2s ease-in-out 0s;
                        transition: all 0.2s ease-in-out 0s;
                    }

                    img {
                        display: block;
                        width: 100%;
                        height: 300px;
                        object-fit: cover;
                        border-radius: 8px;
                    }

                    &:hover {
                        .overlay {
                            opacity: 1;
                        }
                    }

                    .type {
                        position: absolute;
                        right: 0;
                        bottom: 36px;
                        color: #1e293b;
                        background-color: #34d399;
                        padding: 8px;
                        border-radius: 8px 0 0 8px;
                        text-transform: capitalize;
                    }
                }

                .movie-detail {
                    flex: 1 1 100%;
                    height: 100%;
                    padding: 16px 8px;

                    .year {
                        color: #34d399;
                        font-size: 14px;
                    }

                    h3 {
                        font-size: 16px;
                        color: #fff;
                        font-weight: 300;
                    }

                }
            }
        }
    }
}
</style>