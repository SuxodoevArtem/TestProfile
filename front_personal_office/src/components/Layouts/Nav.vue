<template>
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" style="background-color: #ffffff;">
        <div class="container-fluid">
            <a class="navbar-brand" href="#"><i class="fas fa-home"></i></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link to="/Profile">
                        <a class="nav-link "  aria-current="page" >Профиль</a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/Finance">
                        <a class="nav-link " aria-current="page" > Баланс </a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/Tarife">
                        <a class="nav-link " aria-current="page" >Тарифы</a>
                    </router-link>
                </li>
            </ul>
            </div>
        </div>
        </nav>
</template>

<script>
    export default {
        name: 'Nav',
    }
</script>

<style lans="scss">
    .navbar {
        box-shadow: 0px 0 5px 0 rgba(166, 170, 172, 0.95);
    }
    .fa-home{
        color: rgb(240, 78, 49);
    }
    .fa-home:hover{
        font-size: 1.5rem;
    }
    a{
        text-decoration-line: none;
    }
</style>