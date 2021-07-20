<template>
    <div class="col-sm-4 g-4 ">
        <div class="card">
            <div class="card-body balance">
                <div class="row">
                    <div class="col-11 col-sm-11">
                        <p>Баланс на сегодня в <span>{{moment(date).format(' h:mm:ss')}}</span> </p>
                    </div>
                    <div class="col-1 col-sm-1">
                        <i class="fas fa-sync-alt "></i>
                    </div>
                </div>
                <div class="row">
                    <p>{{Balance}}руб</p>
                </div>
                <div class="row">
                    <p class="font-weight-light">Стоимость услуг за месяц — {{TarifUser.cost}} руб. Оплатите {{TarifUser.cost}} руб. до 1 августа, чтобы сохранить доступ к услугам.</p>
                </div>
                <div class="row">
                    <ul class="list-group list-group-flush g-1">
                        <li class="list-group-item">История баланса <i class="fas fa-chevron-right"></i></li>
                        <li class="list-group-item">Обещанный платеж <i class="fas fa-chevron-right"></i></li>
                        <li class="list-group-item">Автоплатежи <i class="fas fa-chevron-right"></i></li>
                    </ul>
                </div>
                <div class="row px-4">
                   
                    <button type="button" class="btn btn-warning g-4">
                        <router-link to="/Pay" style="color: #000000;">
                            Пополнить баланс
                        </router-link> 
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {    
    name: 'Balance',
    computed: {
      ...mapGetters({
          Balance: 'Balance',
          TarifUser: 'TarifUser',
      }),
    },
}
</script>

<style lang="scss">
    .fa-sync-alt{
        cursor: pointer;
        color: rgb(197, 195, 195);
        font-weight: 100;
    }
    .fa-chevron-right{
        float: right;
        cursor: pointer;
    }

</style>