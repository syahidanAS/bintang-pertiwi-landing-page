<template>
  <div>
    <!-- Hero section -->

    <section
      id="home"
      class="jumbotron"
      :style="{
        backgroundImage: `url(${require('~/assets/images/hero.svg')})`,
      }"
    >
      <div class="container col-xxl-8 px-4 text-light" style="padding-top: 7px">
        <div
          class="row flex-lg-row-reverse align-items-center g-5"
          style="padding-top: 80px"
        >
          <div class="col-10 col-sm-8 col-lg-6">
            <VueSkeletonLoader
              v-if="isLoading"
              type="rect"
              :width="500"
              :height="350"
              animation="pulse"
            />
            <img
              v-else
              :src="mainImageSrc"
              class="mainImage d-block mx-lg-auto img-fluid"
              :alt="mainImageSrc"
              loading="lazy"
            />
          </div>

          <div class="col-lg-6">
            <h1 class="display-5 fw-bold lh-1 mb-3 text-warning">
              Bintang Pertiwi School
            </h1>
            <p class="text--hero lead">
              Where every child is values, supported, encouraged and treasured
            </p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              <a
                class="btn btn-warning text-light py-2"
                href="https://wa.me/+6285780714686?text=Halo,%20saya%20ingin%20..."
                >Daftar Sekarang</a
              >
            </div>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fff"
          fill-opacity="1"
          d="M0,64L30,85.3C60,107,120,149,180,160C240,171,300,149,360,170.7C420,192,480,256,540,272C600,288,660,256,720,218.7C780,181,840,139,900,144C960,149,1020,203,1080,208C1140,213,1200,171,1260,165.3C1320,160,1380,192,1410,208L1440,224L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        ></path>
      </svg>
    </section>

    <section id="about" class="jumbotron">
      <div class="container col-xxl-8 px-4 text-light">
        <div class="wrap-about row flex-lg-row-reverse align-items-center g-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <h2 class="text-dark">
              <b
                >Kami Berkomitmen<span style="color: #fcc920">
                  Mendidik Sepenuh Hati</span
                ></b
              >
            </h2>
            <hr />
            <p class="text-dark">
              Bintang Pertiwi School menyajikan layanan pendidikan dengan
              dedikasi yang tinggi. Seluruh tim guru berkomitmen untuk mengajar
              dengan penuh totalitas dan sepenuh hati sehingga akan terbentuk
              suasana yang aman, nyaman dan menyenangkan pada setiap proses
              pembelajarannya. Dengan mengutamakan Education in Human Values
              kami yakin mampu mencetak generasi yang berkarakter sesuai dengan
              prinsip Profil Pelajar Pancasila yaitu Beriman, Bertakwa kepada
              Tuhan YME, dan Berakhlak Mulia, Berkebinekaan Global, Bergotong
              Royong, Kreatif, Bernalar Kritis, serta Mandiri.
            </p>
          </div>
          <img
            src="~/assets/images/image-stack.png"
            class="about-us-img d-block mx-lg-auto img-fluid shadow-md"
            alt="aboutUs"
            loading="lazy"
          />
          <div class="col-lg-6"></div>
        </div>
      </div>
      <img
        class="img-fluid w-100"
        src="~/assets/images/list-accent.png"
        alt=""
      />
    </section>

    <section
      id="services"
      class="jumbotron"
      :style="{
        backgroundImage: `url(${require('~/assets/images/bg-program.svg')})`,
      }"
    >
      <div
        class="container col-xxl-8 px-4 text-light"
        style="padding-top: 100px"
      >
        <h2 class="text-dark text-center">
          <b
            >Mengapa memilih
            <span class="text-primary">TK Bintang Pertiwi?</span></b
          >
        </h2>
        <p class="text-secondary text-center mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div class="row flex-lg-row-reverse align-items-center g-5">
          <div class="container">
            <div class="row text-dark">
              <div class="col-sm text-end">
                <div
                  v-for="why in whyLeft"
                  :key="why.id"
                  class="my-5 px-3 py-2 rounded"
                  :class="why.bgcolor"
                  style="border-radius: 20px"
                >
                  <h3 :class="why.fontcolor">
                    <b>{{ why.name }}</b>
                  </h3>
                  <p class="text-light">
                    <b>{{ why.desc }}</b>
                  </p>
                </div>
              </div>
              <div class="col-sm pt-md-5">
                <img
                  class="img-fluid w-100"
                  src="~/assets/images/image-14.jpg"
                  alt=""
                  style="border-radius: 20px"
                />
              </div>
              <div class="col-sm text-start">
                <div
                  v-for="why in whyRight"
                  :key="why.id"
                  class="my-5 px-3 py-2 rounded"
                  :class="why.bgcolor"
                >
                  <h3 :class="why.fontcolor">
                    <b>{{ why.name }}</b>
                  </h3>
                  <p class="text-light">
                    <b>{{ why.desc }}</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      id="testimonials"
      class="jumbotron"
      style="background-color: #fcc920; margin-top: 5%"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fff"
          fill-opacity="1"
          d="M0,224L26.7,218.7C53.3,213,107,203,160,170.7C213.3,139,267,85,320,85.3C373.3,85,427,139,480,160C533.3,181,587,171,640,154.7C693.3,139,747,117,800,128C853.3,139,907,181,960,170.7C1013.3,160,1067,96,1120,90.7C1173.3,85,1227,139,1280,149.3C1333.3,160,1387,128,1413,112L1440,96L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"
        ></path>
      </svg>
      <div class="container col-xxl-8 text-light">
        <h2 class="text-dark text-center">
          <b class="text-light"
            >Apa kata para <span class="text-primary">Orang Tua?</span></b
          >
        </h2>
        <p class="text-light text-center mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div class="row text-center">
          <div class="col-lg-4">
            <img src="~/assets/images/parent-1.jpg" alt="" style="width:140px; border-radius:100%;">
            <h2>Mama Shean Lovysa</h2>
            <p>
              Bintang pertiwi School memiliki pengajar yang sangat kompeten di
              bidangnya. Tidak hanya memperhatikan aspek kognitifnya saja namun
              juga nilai moral, agama, sosial dan lain-lain. Saya sangat suka
              sekali karena sekolah ini mengutamakan Character Building karena
              menurut saya inilah yang akan menjadi dasar penentuan kesuksesan
              seorang anak di masa depan. Saat ini perkembangan anak saya jauh
              lebih baik, cerdas, mandiri, taat dan lebih percaya diri.
              Terimakasih Bintang Pertiwi School!
            </p>
          </div>
          <!-- /.col-lg-4 -->
          <div class="col-lg-4">
             <img src="~/assets/images/parent-3.jpg" alt="" style="width:140px; border-radius:100%;">
            <h2>Papa Elvaro</h2>
            <p>
              saya senang sekali menyekolahkan anak saya di Bintang Pertiwi
              School, karena kegiatannya sangat variatif seperti sensory dan
              pengembangan motorik, cocok sekali dengan usia anak saya yang
              masih duduk di kelas toddler. Selain itu, banyak sekali kegiatan
              outing class yang seru, attractive, dan valuable sehingga
              anak-anak semakin ceria dan selalu bersemangat mengikuti
              serangkaian kegiatan sekolah.
            </p>
          </div>
          <!-- /.col-lg-4 -->
          <div class="col-lg-4">
             <img src="~/assets/images/parent-2.jpg" alt="" style="width:140px; border-radius:100%;">
            <h2>Mama Zaki</h2>
            <p>
              Menyekolahkan anak saya di Bintang Pertiwi School merupakan suatu
              kebanggaan tersendiri buat saya. Sekolah ini memiliki fasilitas
              yang memadai, lingkungan yang ramah, serta yang paling penting
              gurunya sabar dan komunikatif. Perkembangan anak saya selama
              sekolah di Bintang Pertiwi School ini melebihi ekspektasi saya.
              Terimakasih Bintang Pertiwi School
            </p>
          </div>
          <!-- /.col-lg-4 -->
        </div>
        <!-- /.row -->
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fff"
          fill-opacity="1"
          d="M0,224L26.7,186.7C53.3,149,107,75,160,85.3C213.3,96,267,192,320,218.7C373.3,245,427,203,480,181.3C533.3,160,587,160,640,138.7C693.3,117,747,75,800,85.3C853.3,96,907,160,960,186.7C1013.3,213,1067,203,1120,181.3C1173.3,160,1227,128,1280,133.3C1333.3,139,1387,181,1413,202.7L1440,224L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
        ></path>
      </svg>
    </section>
    <section
      id="gallery"
      :style="{
        backgroundImage: `url(${require('~/assets/images/bg-program.svg')})`,
      }"
    >
      <div class="container col-xxl-8 text-light">
        <h2 class="text-dark text-center">
          <b class="text-dark">Galeri <span class="text-primary">Foto</span></b>
        </h2>
        <p class="text-dark text-center mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <!-- Gallery -->
        <div class="mb-5">
          <div class="picture mx-auto d-block">
            <VueSkeletonLoader
              v-if="isLoading"
              type="rect"
              :width="700"
              :height="350"
              animation="pulse"
            />
            <img v-else :src="activePic" alt="gallery" />
          </div>

          <div class="pictures mx-auto">
            <VueSkeletonLoader
              v-if="isLoading"
              type="rect"
              :width="300"
              :height="250"
              animation="pulse"
            />
            <div
              v-else
              v-for="(picture, index) in gallery"
              :key="picture.index"
              class=""
            >
              <img
                :class="{ active: index == indexOfActive ? true : false }"
                :src="picture.path"
                alt="iamge"
                @click="changeActivePicture(index)"
              />
            </div>
          </div>
          <p class="text-primary text-center mt-2">
            Usap ke samping untuk melihat lebih banyak
          </p>
        </div>
        <!-- Gallery -->
      </div>
    </section>
    <!-- Modal -->
    <div
      id="galleryModal"
      class="modal fade"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div
        class="
          modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl
        "
      >
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="staticBackdropLabel" class="modal-title">Galeri Foto</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <!-- Gallery -->

            <!-- Gallery -->
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Understood</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VueSkeletonLoader from 'skeleton-loader-vue'

export default {
  // head: {
  //   bodyAttrs: {
  //     style: 'background-color:#ffd700;',
  //   },
  // },
  name: 'IndexPage',
  components: { VueSkeletonLoader },
  data() {
    return {
      isCardModalActive: false,
      isOpen: 0,
      images: [],
      scTimer: 0,
      scY: 0,
      isLoading: false,
      mainImageSrc: null,
      whyLeft: [
        {
          id: 1,
          name: 'Guru yang berpengalaman dan berdedikasi tinggi',
          icon: 'icon',
          bgcolor: 'bg-primary',
          fontcolor: 'text-warning',
          desc: 'Tidak hanya sekedar kredibel dalam mengajar, namun kami juga hadir dengan segenap ketulusan dan kasih sayang',
        },
        {
          id: 2,
          name: 'Bilingual Program',
          icon: 'icon',
          bgcolor: 'bg-warning',
          fontcolor: 'text-primary',
          desc: 'Bahasa pengantar pada pembelajaran kami yaitu Bahasa Indonesia dan Bahasa Inggris ',
        },
      ],
      whyRight: [
        {
          id: 3,
          name: ' Fasilitas yang menunjang',
          icon: 'icon',
          bgcolor: 'bg-warning',
          fontcolor: 'text-primary',
          desc: 'Seluruh ruangan kelas di Bintang Pertiwi School dilengkapi dengan AC, Perpustakaan, Alat Peraga Edukasi dan Media Pembelajaran yang mendukung',
        },
        {
          id: 4,
          name: 'Metode Belajar yang menyenangkan dan terintegrasi',
          icon: 'icon',
          bgcolor: 'bg-primary',
          fontcolor: 'text-warning',
          desc: 'Saat ini kami menggunakan kurikulum prototipe dengan pengaplikasian metode STEAM dengan mengembangkan media Loose Parts',
        },
      ],
      indexOfActive: 0,
      activePic: null,
      gallery: [],
    }
  },
  created() {
    this.fetchHeroImage()
    this.fetchGalleryImage()

    const self = this
    // this.images = [
    //   {
    //     id: '23',
    //     image: `${require('@/assets/images/image-3.jpg')}`,
    //   },
    //   {
    //     id: '45',
    //     image: `${require('@/assets/images/image-1.jpg')}`,
    //   },
    // ]

    setInterval(function () {
      self.mainImageSrc =
        self.images[Math.floor(Math.random() * self.images.length)].path
    }, 2000)
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    async fetchHeroImage() {
      this.isLoading = true
      const payload = await this.$axios.$get('hero-images')
      this.isLoading = false
      this.images = payload
    },
    async fetchGalleryImage() {
      this.isLoading = true
      const payload = await this.$axios.$get('gallery-images')
      this.activePic = payload[0].path
      this.isLoading = false
      this.gallery = payload
    },
    snackbar() {
      this.$buefy.snackbar.open(
        `Default, positioned bottom-right with a green 'OK' button`
      )
    },
    changeActivePicture(index) {
      this.activePic = this.gallery[index].path
      this.indexOfActive = index
    },
    warning() {
      this.$buefy.snackbar.open({
        message: 'Yellow button and positioned on top, click to close',
        type: 'is-warning',
        position: 'is-top',
        actionText: 'Retry',
        indefinite: true,
        onAction: () => {
          this.$buefy.toast.open({
            message: 'Action pressed',
            queue: false,
          })
        },
      })
    },
    handleScroll() {
      if (this.scTimer) return
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY
        clearTimeout(this.scTimer)
        this.scTimer = 0
      }, 100)
    },
    toTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
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
text--hero {
  text-shadow: 1px 1px #000;
}
::-webkit-scrollbar {
  width: 20px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #007dbd;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #016292;
}

/* Desktops and laptops ----------- */
@media only screen and (min-width: 1000px) {
  .mainImage {
    width: 1000px;
    height: 400px;
    border-radius: 200px 20px 300px 200px;
    border: 1rem solid;
    border-color: #fcc920;
  }
  .about-us-img {
    width: 40%;
    border-radius: 20%;
  }
  .picture {
    width: 600px;
    border: 5px solid #fcc920;
    border-radius: 10px;
  }
  .picture img {
    width: 100%;
    height: 400px;
    border-radius: 8px;
  }

  .pictures {
    overflow: auto;
    width: 600px;
    display: flex;
    padding-right: 10%;
    border: 2px solid #007dbd;
    border-radius: 20px;
    padding: 10px;
    margin-top: 15px;
  }
  .pictures img {
    width: 150px;
    height: 100px;
    margin: 10px;
    border-radius: 10px;
  }
}

/* Large screens ----------- */
@media only screen and (min-width: 1824px) {
  .mainImage {
    width: 1000px;
    height: 400px;
    border-radius: 200px 20px 300px 200px;
    border: 1rem solid;
    border-color: #fcc920;
  }

  .about-us-img {
    border-radius: 20%;
  }
  .picture {
    width: 700px;
    border: 5px solid #fcc920;
    border-radius: 20px 0px 20px 0px;
  }
  .picture img {
    width: 100%;
    height: 400px;
    border-radius: 20px 0px 20px 0px;
  }

  .pictures {
    overflow: auto;
    width: 700px;
    display: flex;
    padding-right: 10%;
    border: 2px solid #007dbd;
    border-radius: 20px;
    padding: 10px;
    margin-top: 15px;
  }
  .pictures img {
    width: 200px;
    height: 150px;
    margin: 10px;
    border-radius: 10px;
  }
}

@media only screen and (max-width: 850px) {
  .mainImage {
    width: 100%;
    margin-left: 25px;
    height: 250px;
    border-radius: 20px 8px 20px 8px;
    border: 1rem solid;
    border-color: #fcc920;
  }
  .about-us-img {
    width: 400px;
    border-radius: 13%;
  }
  .wrap-about {
    padding-top: 20px;
  }

  .picture {
    width: 500px;
    border: 5px solid #fcc920;
    border-radius: 20px 0px 20px 0px;
  }
  .picture img {
    width: 100%;
    height: 350px;
    border-radius: 20px 0px 20px 0px;
  }

  .pictures {
    overflow: auto;
    width: 500px;
    display: flex;
    padding-right: 10%;
    border: 2px solid #007dbd;
    border-radius: 20px;
    padding: 10px;
    margin-top: 15px;
  }
  .pictures img {
    width: 250px;
    height: 150px;
    margin: 10px;
    border-radius: 10px;
  }
}
/* Smartphones (portrait) ----------- */
@media only screen and (max-width: 800px) {
  .mainImage {
    width: 100%;
    margin-left: 25px;
    height: 250px;
    border-radius: 20px 8px 20px 8px;
    border: 1rem solid;
    border-color: #fcc920;
  }
  .about-us-img {
    width: 400px;
    border-radius: 13%;
  }
  .wrap-about {
    padding-top: 20px;
  }

  .picture {
    width: 300px;
    border: 5px solid #fcc920;
    border-radius: 20px 0px 20px 0px;
  }
  .picture img {
    width: 100%;
    height: 200px;
    border-radius: 20px 0px 20px 0px;
  }

  .pictures {
    overflow: auto;
    width: 300px;
    display: flex;
    padding-right: 10%;
  }
  .pictures img {
    width: 100px;
    height: 80px;
    margin: 10px;
    border-radius: 10px;
  }
}

.float {
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 40px;
  right: 40px;
  background-color: #007dbd;
  color: #fff;
  border-radius: 50px;
  text-align: center;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}

.my-float {
  margin-top: 22px;
}
.bounce-4 {
  animation-name: bounce-4;
  animation-timing-function: ease;
}
@keyframes bounce-4 {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(1.1, 0.9) translateY(0);
  }
  30% {
    transform: scale(0.9, 1.1) translateY(-100px);
  }
  50% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
#btn__register:hover {
  background-color: yellow;
}
.card {
  margin: 0 auto; /* Added */
  float: none; /* Added */
  margin-bottom: 10px; /* Added */
}

.active {
  border: 4px solid #007dbd;
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
</style>
