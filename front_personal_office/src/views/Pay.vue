<template>
    <div class="pay-container">
        <div class="row">
            <h3>Оплата</h3>
        </div>
        <div class="row">
            <div class="col-12">
                <label for="inputNumCart" class="form-label"> Имя </label>
                <input type="text" id="inputNumCart" class="form-control" >
            </div>
            <div class="col-12">
                <label for="inputNumCart" class="form-label"> Номер карты </label>
                <input type="text" id="inputNumCart" class="form-control" >
            </div>
            <div class="col-12">
                <label for="inputNumCart" class="form-label"> Сумма </label>
                <input type="text" id="inputNumCart" class="form-control" >
            </div>
        </div>
        <div class="row">
            <div class="col-md-3 col-12 g-4">
                <button type="button" class="btn btn-success g-4">
                    Оплатить
                </button>
            </div>
            <div class="col-md-3 col-4 g-4">
                <button type="button" class="btn btn-danger g-4">
                    <router-link to="/Profile" style="color: #ffffff;">
                        Назад
                    </router-link> 
                </button>
            </div>
    
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .pay-container {
        padding: 2%;
        margin: auto;
        margin-top: 80px; 
        background-color: #ffffff;
        height: 450px;
        width: 35%;

        h3{
            text-align: center;
        }
        
    }

    @media (min-width: 1400px){
        .pay-container{
            width: 30%;
        }
    }

    @media (min-width: 992px) and (max-width: 1199px) {
        .pay-container{
            width: 40%;
        }
    }

    @media (min-width: 768px) and (max-width: 991px){
        .pay-container{
            width: 50%;
        }
    }

      @media (max-width: 767px) {
        .pay-container{
            width: 75%;
        }
    }

    @media (max-width: 480px) {
        .pay-container{
            width: 90%;
            padding: 4%;
        }
    }
</style>