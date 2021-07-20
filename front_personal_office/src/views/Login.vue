<template>
    <div class="Login-container">
        <h3 class="mb-4">
            Войти в личный кабинет
        </h3>
        <div class="row g-3 align-items-center">
            <div class="mb-1">
                <label for="exampleInputEmail1" class="form-label">Email </label>
                <input type="email" class="form-control"  :class="Validation" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="loginForm.email">
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Пароль</label>
                <input type="password" class="form-control" :class="Validation" id="exampleInputPassword1" v-model="loginForm.password">
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Запомнить меня</label>
                <a href="#">Забыли пароль?</a>
            </div>
            <button class="btn btn-primary" @click="Login">Войти</button>
            <h6>Нажимая кнопку «Войти», вы даете согласие на обработку <a href="https://itmo.ru/file/stat/161/zakon_o_person_dann_27_07_2006.pdf"> персональных данных </a></h6>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import store from '../store/index'

export default {
    name: 'Login',
    data: () => ({
        loginForm: {
            email: "",
            password: ""
        },
    }),
    computed: {
        Validation: () => {
            return store.getters.authError ? 'is-invalid': '';
        }
    },
    methods: {
        ...mapActions({
            login: 'login'
        }),
        async Login(){
            console.log(this.loginForm)
            await this.login(this.loginForm);
            this.$router.push('/Profile');  
        }
    },
}

</script>

<style lang="scss">
    .Login-container{
        margin: auto;
        margin-top: 110px;
        background-color: #fff;
        width: 30%;
        height: 520px;
        padding: 20px 2%;
        border-radius: 1%;

        h3{
            text-align: center;
        }

        button{
            border: none;
            background-color: #ffd400;
            color: #000000;
        }

        button:hover{
            transition: 0.5s all;
            background-color: #ffe200;
            color: #000000;
        }

        a{
            float: right;
            color: #007ae9;
            text-decoration: none;
            border-bottom: 1px dashed #979cb2; 

        }

        h6{
            text-align: center;
            color: #979cb2;

            a{
                float: none;
                color: #979cb2;
                border-bottom: 1px solid #979cb2; 
            }
        }
    }

    @media (min-width: 1400px){
        .Login-container{
            width: 30%;
        }
    }

    @media (min-width: 992px) and (max-width: 1199px) {
        .Login-container{
            width: 40%;
        }
    }

    @media (min-width: 768px) and (max-width: 991px){
        .Login-container{
            width: 50%;
        }
    }

    @media (max-width: 767px) {
        .Login-container{
            width: 65%;
        }
    }

    @media (max-width: 480px) {
        .Login-container{
            width: 90%;
            padding: 4%;
        }
    }

    @media (max-width: 376px) {
        .Login-container{
            width: 90%;
        }
    }
</style>