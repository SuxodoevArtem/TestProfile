<template>
    <div class="card">
        <div class="card-header bg-primary">
             {{name}}
        </div>
        <div class="card-body tarif-body">
            <div class="col-12 g-4 tarif-parameters">
                <i class="fas fa-wifi"></i>
                Интернет  {{internet}} Гб
            </div>
           <div class="col-12 g-4 tarif-parameters">
                <i class="fas fa-tv"></i>
                Телевидиние {{tvcountt}} каналов
            </div>
            <p> {{cost}} ₽/мес - абонентская плата</p>
             <button type="button" class="btn btn-warning g-4 btn">
                Сменить тариф
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "tarifcard",
    props: {
        id: { type: String, default: "", },
        name: { type: String, default: "", },
        internet: { type: String, default: "", },
        tvcountt: { type: String, default: "",  },
        cost: { type: String, default: "", },
    }
}
</script>

<style lang="scss">
    .card-header{
        color: rgb(255, 255, 255);
    }
    .tarif-body{
        p {
            margin-top: 100px;
        }
        .tarif-parameters{
            margin: 4%;
        }
    }
</style>