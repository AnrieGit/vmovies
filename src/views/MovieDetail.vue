<template>
    <div v-if="!loading" class="container">
        <div class="cover" :style="{'backgroundImage': `url(${poster})`}"></div>
        
        <div class="movie-content">
            <div class="movie-image">
                <img :src="movie.Poster" alt="poster-image">
                
                <div class="imdb-link">
                    <a :href="'https://www.imdb.com/title/' + movie.imdbID" target="__blank">View on IMDb</a>
                </div>
            </div>

            <div class="movie-detail">
                <h1>{{ movie.Title }}</h1>
                <p class="year">{{ movie.Year }}</p>

                <div class="plot">
                    {{ movie.Plot }}
                </div>

                <div class="other-detail">
                    <div class="released">
                        <span class="label">Released:</span> {{ movie.Released }}
                    </div>
                    <div class="genre">
                        <span class="label">Genre:</span> {{ movie.Genre }}
                    </div>
                    <div class="rating">
                        <span class="label">IMDb rating: </span>
                        <span v-if="rating.length > 0">{{ rating[0].Value }}</span>
                        <span v-else> N/A</span>
                    </div>
                    <div class="rated">
                        <span class="label">Rated:</span> {{ movie.Rated }}
                    </div>
                    <div class="director">
                        <span class="label">Director:</span> {{ movie.Director }}
                    </div>
                    <div class="writer">
                        <span class="label">Writer:</span> {{ movie.Writer }}
                    </div>
                    <div class="actors">
                        <span class="label">Actors:</span> {{ movie.Actors }}
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Loader v-else/>
</template>

<script>
import { ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import env from '@/env.js';
import Loader from '../components/Loader';

export default {
    name: "MovieDetailDefault",
    setup() {
        let loading = ref(false);
        const movie = ref({});
        const route = useRoute();
        const poster = ref('');
        const rating = ref([]);

        onBeforeMount(async () => {
            loading.value = true;
            const response = await fetch(`http://www.omdbapi.com/?apikey=${env.apikey}&i=${route.params.id}&plot=full`);
            const data = await response.json();
            loading.value = false;

            movie.value = data;
            const poster1 = movie.value.Poster;
            poster.value = poster1.replace('300', '1000');
            rating.value = movie.value.Ratings;
            console.log(loading.value);
        });

        return {
            loading,
            movie,
            route,
            poster,
            rating,
        }
    },
    components: {
        Loader,
    }
};
</script>

<style lang="scss" scoped>
.container {
    margin-top: 70px;
    margin-bottom: 70px;

    .cover {
        position: relative;
        height: 400px;
        width: 100%;
        background-position: 50% 20%;
        background-repeat: no-repeat;
        background-size: cover;
        transition: all 0.3s ease;
        z-index: 0;

        @media screen and (max-width: 768px) {
            height: 200px;
        }

        &:after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            background: linear-gradient(180deg, rgba(30, 41, 59, 0.6),rgba(30, 41, 59, 1));
            z-index: 0;
        }
    }

    .movie-content {
        max-width: 1200px;
        margin: 0 auto;
        margin-top: -150px;
        display: flex;

        .movie-image {
            display: block;
            padding: 16px;
            z-index: 1;

            img {
                display: block;
                height: 300px;
                border-radius: 8px;
            }

            .imdb-link {
                text-align: center;
                margin-top: 16px;

                a {
                    display: block;
                    padding: 10px;
                    color: #1e293b;
                    background-color: #34d399;
                    border-radius: 8px;

                    &:hover {
                        background-color: #059669;
                    }

                }
            }
        }

        .movie-detail {
            width: 100%;
            margin-top: 60px;
            color: #fff;
            z-index: 1;

            p {
                color: #34d399;
                margin-top: 8px;
            }

            .plot {
                margin-top: 60px;
                font-size: 14px;
                font-weight: 200;
                line-height: 1.2rem;
                padding: 16px;
                transition: all 0.3 ease;
            }

            .other-detail {
                padding: 26px;
                margin: 35px 16px 16px 16px;
                border-radius: 8px;
                font-size: 14px;
                background-color: #1e293b;

                .released,
                .genre,
                .rating,
                .rated,
                .director,
                .writer,
                .actors {
                    padding: 10px;

                    .label {
                        color: #34d399;
                        font-size: 16px;
                    }
                }
            }
        }

        @media screen and (max-width: 768px) {
            align-items: center;
            flex-direction: column;

            .movie-detail {
                margin-top: 20px;
                text-align: center;

                .plot {
                    margin-top: 20px;
                    text-align: left;
                }

                .other-detail {
                    text-align: left;
                }
            }
        }
    }
}
</style>