<template>
  <div class="main-wrap">
    <section id="about" class="jumbotron">
      <div class="container col-xxl-8 px-4 text-light py-5">
        <div class="wrap-about row flex-lg-row-reverse align-items-center g-5">
          <h1 class="text-dark text-center" style="font-size: 3rem">
            <b>VISI<span style="color: #007dbd"></span></b>
          </h1>
          <h2
            class="text-dark text-center"
            style="text-align: justify; font-size: 1.3rem"
          >
            Menjadi Lembaga Pedidikan yang Dapat Mempersiapkan Generasi yang
            Berkarakter, Cerdas, dan Mandiri
          </h2>

          <h1 class="text-dark text-center" style="font-size: 3rem">
            <b><span style="color: #007dbd">MISI</span></b>
          </h1>
          <h4 class="text-dark">
            <ol style="text-align: justify; font-size: 1.3rem">
              <li>
                Menerapkan nilai-nilai Pancasila dalam kehidupan sehari-hari
              </li>
              <li>
                Menyelenggarakan pembelajaran yang kreatif, inovatif, dan
                efektif sesuai dengan standar Pendidikan Anak Usia Dini
              </li>
              <li>
                Menumbuhkan sikap mandiri pada peserta didik dengan pembiasaan
                sehari-hari
              </li>
            </ol>
          </h4>
          <div class="container">
            <div class="row text-center text-light">
              <div
                class="col rounded py-4 mx-5 my-2"
                style="background-color: #007dbd"
              >
                <h3>Do Good</h3>
              </div>
              <div
                class="col rounded py-4 mx-5 my-2"
                style="background-color: #fcc920"
              >
                <h3>Say Good</h3>
              </div>
              <div
                class="col rounded py-4 mx-5 my-2"
                style="background-color: #007dbd"
              >
                <h3>See Good</h3>
              </div>
              <div
                class="col rounded py-4 mx-5 my-2"
                style="background-color: #fcc920"
              >
                <h3>Be Good</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="about" class="jumbotron">
      <div class="container col-xxl-8 px-4 text-light py-5">
        <div class="wrap-about row flex-lg-row-reverse align-items-center g-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <img
              src="~/assets/images/friendship.svg"
              alt=""
              style="width: 100%"
            />
          </div>

          <div class="col-lg-6">
            <h1 class="text-dark" style="font-size: 3rem">
              <b
                >Tentang<span style="color: #007dbd">
                  <br />
                  TK Bintang Pertiwi</span
                ></b
              >
            </h1>
            <hr />
            <p class="text-dark fw-bold" style="text-align: justify;">
              Bintang Pertiwi School merupakan lembaga pendidikan anak usia dini
              yang mengutamakan Pendidikan Character sesuai depan Profil Pelajar
              Pancasila. Menggunakan dua bahasa dalam proses pembelajaran yaitu
              Bahasa Indonesia dan Bahasa Inggris agar kelak terbiasa dan siap
              dalam menghadapi era globalisasi ini. Berbasis Fun Project Based
              Learning dan menggunakan metode STEAM dengan media Loose Part,
              akan membuat putra putri anda semakin kreatif, inovatif dan
              mandiri.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="about" class="jumbotron">
      <div class="container col-xxl-8 px-4 text-light py-5">
        <div class="wrap-about row flex-lg-row-reverse align-items-center g-5">
          <div class="container text-center">
            <h3 class="text-dark mb-4" style="font-size: 3rem">
              <b>Guru-guru<span style="color: #007dbd"> Kami</span></b>
            </h3>
            <!--
            <div class="">
              <div class="row imagetiles">
                <div
                  v-for="teacher in teachers"
                  :key="teacher.index"
                  class="list-complete-item col-lg-3 col-md-3 col-sm-3 col-xs-6"
                >
                  <img
                    :src="teacher"
                    class="img-responsive"
                    style="width: 300px"
                  />
                  <div class="overlay">
                    <div class="text">
                      <a href="">Hello World</a>
                    </div>
                  </div>
                </div>
              </div>
            </div> -->
            <div
              v-if="isLoading"
              class="list-complete-item col-lg-3 col-md-3 col-sm-3 col-xs-6"
              style="padding-right: 45%"
            >
              <VueSkeletonLoader
                type="rect"
                :width="500"
                :height="150"
                animation="fade"
              />
            </div>
            <div
              v-else
              v-for="teacher in teachers"
              :key="teacher.index"
              class="list-complete-item col-lg-3 col-md-3 col-sm-3 col-xs-6"
            >
              <router-link to="">
                <img
                  class="list-complete-img img-responsive mx-2 px-1"
                  :src="teacher.image_url"
                  style="
                    border-radius: 10px;
                    -webkit-filter: grayscale(100%);
                    filter: grayscale(100%);
                  "
                  alt
                />
                <div class="overlay">
                  <div class="text">
                    <h3 style="font-size: 1rem">{{ teacher.name }}</h3>
                    <p style="font-size: 0.7rem">
                      {{ teacher.major }} - {{ teacher.campus }}
                    </p>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import VueSkeletonLoader from 'skeleton-loader-vue'
export default {
  name: 'AboutPage',
  components: { VueSkeletonLoader },
  data() {
    return {
      teachers: [],
      isLoading: false,
    }
  },

  created() {
    this.fetchTeacherStory()
  },
  methods: {
    fetchTeacherStory() {
      this.isLoading = true
      this.$axios
        .$get('teachers')
        .then((resp) => {
          this.isLoading = false
          this.teachers = resp
        })
        .catch((err) => {
          // Handle Error Here
          this.isLoading = true
          console.error(err)
        })
    },
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@100;200;300;400;500&display=swap');
* {
  font-family: 'Montserrat Alternates', sans-serif;
}
* {
  -webkit-animation: fadein 1.5s; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: fadein 1.5s; /* Firefox < 16 */
  -ms-animation: fadein 1.5s; /* Internet Explorer */
  -o-animation: fadein 1.5s; /* Opera < 12.1 */
  animation: fadein 1.5s;
}

@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Firefox < 16 */
@-moz-keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Internet Explorer */
@-ms-keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Opera < 12.1 */
@-o-keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.main-wrap {
  width: 100%;
  height: 100%;
  background-image: url('~/assets/images/large-background-white.svg');
}
.img-responsive {
  display: flex;
  width: 100%;
  height: 150px;
}

.list-complete-item {
  width: 200px;
  height: 150px;
  display: inline-block;
}
.list-complete-item a {
  display: inline-block;
  position: relative;
  width: 200px;
  height: 150px;
}
.list-complete-item a .image {
  display: block;
  width: 100%;
  height: auto;
}
.list-complete-item a .overlay {
  position: absolute;
  top: 0%;
  bottom: 0;
  left: 2%;
  height: 100%;
  width: 100%;
  margin-left: 4px;
  border-radius: 10px;
  opacity: 0;
  transition: 0.5s ease;
  background-color: #007dbd;
}
.list-complete-item a:hover .overlay {
  opacity: 0.9;
}
.list-complete-item a .text {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>
