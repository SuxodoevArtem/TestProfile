<template>
    <div>
       <Nav/>
       <div class="container-fluid Tarif-container">
           <div class="row">
               <div class="col-sm-6 col-md-3 col-12 g-4"
                    v-for="(tarif, key) in Tarifs"
                    :key="key"
                >
                <TarifCard
                    :id="tarif.id"
                    :name="tarif.name"
                    :internet="tarif.internet"
                    :tvcountt="tarif.tvcountt"
                    :cost="tarif.cost"
                />    
               </div>
           </div>
       </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters} from 'vuex'

    export default {
        name: 'Tarife',
        components: {
            Nav: () => import('@/components/Layouts/Nav'),
            TarifCard: () => import('@/components/tarifcard')
        },
        computed: {
            ...mapGetters({
                Tarifs: 'Tarifs',
                Balance: 'Balance',
            }),
        },
        methods: {
            ...mapActions({
                getTarifs: 'getTarifs',
            }),
        },
        mounted(){
            this.getTarifs();
        },
    }
</script>

<style lang="scss">
    .Tarif-container{
        margin-top: 80px;
    }
</style>