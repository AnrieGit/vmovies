<template>
    <nav>
        <div class="navbar">
            <router-link to="/" class="title"><span>V</span>Movies</router-link>

            <div class="search-form">
                <form @submit.prevent="SearchMovies()">
                    <div class="search-group">
                        <input
                            type="text"
                            placeholder="Search..."
                            v-model="search"
                        />
                        <button type="submit">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                heigth="1.1rem"
                                width="1.1rem"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </nav>
</template>

<script>
import { ref } from "vue";
import { useRouter} from 'vue-router'

export default {
    name: "Nav",
    setup() {
        const search = ref('');
        const router = useRouter();

        const SearchMovies = () => {
            if (search.value != "") {
                router.replace({name: 'SearchResult', params: {search: search.value}});
                search.value = '';
            }
        };

        return {
            search,
            SearchMovies,
        };
    },
};
</script>

<style lang="scss">
nav {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #1e293b;
    z-index: 3;

    .navbar {
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100%;
        max-width: 1200px;
        padding: 15px;

        .title {
            color: #fff;
            font-size: 26px;

            span {
                color: #34d399;
            }
        }

        .search-form {
            width: 100%;
            max-width: 360px;

            @media screen and (max-width: 600px) {
                max-width: 200px;
            }

            .search-group {
                position: relative;
                color: #1e293b;

                input {
                    display: block;
                    width: 100%;
                    padding: 10px;
                    outline: none;
                    border: none;
                    border-radius: 3px;
                }

                button {
                    position: absolute;
                    top: 0;
                    right: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: #34d399;
                    height: 100%;
                    padding: 1rem 1.1rem;
                    outline: none;
                    border: none;
                    border-radius: 0px 3px 3px 0px;
                    cursor: pointer;
                    transition: 0.3s ease;

                    &:hover {
                        background-color: #059669;
                    }

                    svg {
                        color: #1e293b;
                    }
                }
            }
        }
    }
}
</style>