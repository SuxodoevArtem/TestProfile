<template>
  <div>
     <Nav/>  
     <div class="container-fluid">
       <div class="row px-4 wraper-rprofile">
          <div class="col-sm-12 g-4">
            <div class="card bg-light">
              <div class="card-body">
                <div class="row ">
                  <div class="col-sm-10">
                      <p class="text-left" >{{Profile.contractNumber}}</p>
                      <p class="text-left" >{{Profile.addres}}</p>
                  </div>
                  <div class="col-sm-2 g-4">
                      <button type="button" class="btn btn-outline-danger ">Приостановить услуги</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Balance/>
          <Tarif/>
      </div>
     </div>
  </div>
</template>

<script>

import { mapActions, mapGetters} from 'vuex'

export default {
  
    name: 'Profile',
    components: {
          Nav: () => import('@/components/Layouts/Nav'),
          Balance: () => import('@/components/balance'),
          Tarif: () => import('@/components/tarif'),
    },
    data: () => ({
        profile: {},
    }),
    computed: {
      ...mapGetters({
          Profile: 'Profile',
          Balance: 'Balance',
      }),
    },
    methods: {
        ...mapActions({
            getProfile: 'getProfile',
            getBalance: 'getBalance',
            getUserTarif: 'getUserTarif',
        }),
    },
    mounted(){
      this.getProfile();
      this.getBalance();
      this.getUserTarif();
    },
}

</script>

<style lang="scss">
    .wraper-rprofile{
      margin-top: 60px;
    }
</style>