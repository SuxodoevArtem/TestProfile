<template>
    <div class="col-sm-8 g-4 ">
        <div class="card">
            <div class="card-body">
                <h5>Ваш тариф {{TarifUser.name}}</h5>
                <div class="row "> 
                    <div class="col-6 g-4 px-4">
                        <i class="fas fa-wifi"></i>
                        {{TarifUser.internet}} ГБ
                    </div>
                    <div class="col-6 g-4 px-4">
                        <i class="fas fa-tv"></i>
                        {{TarifUser.tvcountt}} каналов
                    </div>
                </div>
                <div class="row"> 
                    <div class="col-12 g-4">
                        <div class="Header_traffic">
                            <b>Остаток</b>   
                            <p> <b>  {{TarifUser.internet - Profile.usetrafic}}  ГБ</b> из {{TarifUser.internet}} ГБ</p>                         
                        </div>
                    </div>
                     <div class="col-12 g-1 px-3">
                        <div class="progress">
                             <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <small>Обновится 1 августа</small>
                </div>
                <div class="row Btn-Tarif"> 
                    <div class="col-sm-3 col-6 g-4">
                        <button type="button" class="btn btn-outline-secondary btn-lg">Купить интернет</button>
                    </div>
                    <div class="col-sm-3 col-6 g-4">
                        <router-link to="/Tarife">
                            <button type="button" class="btn btn-outline-secondary btn-lg">Сменить тариф</button>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'Tarif',
    computed: {
      ...mapGetters({
          TarifUser: 'TarifUser',
          Profile: 'Profile',
      }),
    },
}
</script>

<style lang="scss">
    .fa-wifi{
        font-size: 2rem;
        color: rgb(150, 148, 148);
    }
    .fa-tv{
        font-size: 2rem;
        color: rgb(150, 148, 148);
    }
    .Header_traffic{
        p{
            float: right;
        }
    }
    .progress{
        height: 6px;
    }
    .Btn-Tarif{
        margin-top: 75px;
    }
</style>