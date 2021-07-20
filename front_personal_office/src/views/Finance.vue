<template>
    <div>
       <Nav/>
       <div class="row Finance-wrapper justify-content-center">
           <div class="col-12 col-sm-8 Finance_container">
               <div class="row">
                   <div class="col-12 col-sm-9">
                        <h3>История баланса</h3>
                        <h1>
                            {{Balance}} &#x20bd;
                        </h1>
                        <p>Ваш баланс на сегодня</p>
                   </div>
                   <div class="col-12 col-sm-3">
                        <button type="button" class="btn btn-warning g-4 btn-lg">
                            <router-link to="/Pay" style="color: #000000;">
                                Пополнить баланс
                            </router-link> 
                        </button>
                   </div>
                   <div class="col-12 g-4">
                       <div class="alert alert-primary" role="alert">
                            <p>Стоимость услуг за июль — {{TarifUser.cost}} руб. </p>
                        </div>
                   </div>   
               </div>
               <div class="row">
                   <h3>История платежей</h3>
                   <div class="col-12" v-for="(payments, key) in payments" :key="key">
                       <div class="payment">
                           <small>{{payments.date}}</small>
                           <div class="row">
                               <div class="col-10 col-sm-11">
                                    <p>{{payments.text}}</p>
                               </div>
                               <div class="col-2 col-sm-1">
                                    <d> {{payments.amount}} &#x20bd; </d>
                               </div>
                           </div>
                           <hr>
                       </div>
                       
                   </div>
               </div>
               <div class="row col-6">
                    <div class="col-1" v-for="(payments, key) in portionPayments" :key="key">
                        <button class="page-link"  @click="nextPortions(key)" >{{key+1}}</button>
                    </div>
               </div>
           
            </div>
       </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters} from 'vuex'
    import store from '../store/index'

    export default {
        name: 'Finance',
        components: {
            Nav: () => import('@/components/Layouts/Nav'),
        },
        data: () => ({
            payments: [],
            portionPayments: []
        }),
        computed: {
            ...mapGetters({
                Balance: 'Balance',
                TarifUser: 'TarifUser',
            }),
        },
        methods: {
            ...mapActions({
                getPayments: 'getPayments',
                getBalance: 'getBalance',
                getUserTarif: 'getUserTarif',
            }),
            plaginations(){
                let payments = store.getters.Payments;

                let portionPayments = []

                for (let i = 0; i < payments.length; i += 6) {
                    portionPayments.push(payments.slice(i, i + 6));
                }

                this.portionPayments = portionPayments;
                this.payments = portionPayments[0];

            },
            nextPortions(index){
                this.payments = this.portionPayments[index];
            }
        },
        async mounted(){
           await this.getPayments();
           await this.getBalance();
           await this.getUserTarif();
           await this.plaginations()
        },
    }
</script>

<style lang="scss">
    .Finance-wrapper{
        margin: auto;
        margin-top: 80px; 
        background-color: #ffffff;
        height: 1050px;

        .Finance_container{
            padding-top: 5%;

  
        }
    }
</style>