<template>
  <div>
    <nav
      class="navbar navbar-light text-light"
      style="background-color: #fcc920"
    >
      <div class="container">
        <a class="text-light" style="text-decoration: none">Temukan Kami</a>
        <div class="row ms-auto">
          <div id="main">
            <a
              href="https://wa.me/+6285780714686?text=Halo,%20saya%20ingin%20..."
              ><i
                class="fa fa-whatsapp fa-lg mx-2 font-weight-bold text-light"
              ></i
            ></a>
            <a href="https://www.instagram.com/tk.karawang/"
              ><i
                class="fa fa-instagram fa-lg mx-2 font-weight-bold text-light"
              ></i
            ></a>
            <a href="https://www.youtube.com/channel/UCS9CEt1gNnz97LHIMkb_LwQ"
              ><i
                class="fa fa-youtube fa-lg mx-2 font-weight-bold text-light"
              ></i
            ></a>
          </div>
        </div>
      </div>
    </nav>

    <nav
      class="navbar navbar-expand-lg navbar-light sticky-top shadow-sm"
      style="background-color: #fff"
    >
      <div class="container">
        <nuxt-link class="navbar-brand" to="/">
          <img src="~/assets/images/logo.png" alt="" style="width: 50px" />
        </nuxt-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div id="navbarNav" class="collapse navbar-collapse">
          <ul class="navbar-nav ms-auto text-warning">
            <li v-for="item in items" :key="item.message" class="nav-item mx-2">
              <nuxt-link
                :to="item.to"
                :class="
                  $nuxt.$route.name ? $nuxt.$route.name : 'btn btn-primary'
                "
                class="nav-link"
                ><b>{{ item.title }}</b></nuxt-link
              >
            </li>
            <li>
              <a
                class="btn text-light"
                style="background-color: #007dbd"
                href="https://service.tkbintangpertiwi.com/login"
             
              >
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <Nuxt />

    <!-- Footer -->
    <footer class="text-center text-lg-start bg-light text-muted">
      <!-- Section: Social media -->
      <!-- Section: Links  -->
      <section class="pt-2 text-light" style="background-color: #fcc920">
        <div class="container text-center text-md-start">
          <!-- Grid row -->
          <div class="row py-5">
            <!-- Grid column -->
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <!-- Content -->

              <div class="col">
                <h6 class="text-uppercase fw-bold mb-4">
                  <i class="fas fa-gem"></i>Bintang Pertiwi School
                </h6>
              </div>

              <div>
                <a href="" class="me-4 text-reset">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    class="bi bi-instagram"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                    />
                  </svg>
                </a>
                <a href="" class="me-4 text-reset">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-youtube"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"
                    />
                  </svg>
                </a>
                <a href="" class="me-4 text-reset">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    class="bi bi-facebook"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                    />
                  </svg>
                </a>
              </div>
              <div class="mx-auto mt-2">
                <!-- Links -->

              </div>
            </div>
            <!-- Grid column -->

            <!-- Grid column -->
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <!-- Links -->
              <h6 class="fw-bold mb-4">Tentang</h6>
              <p>
                <a
                  href="/about"
                  class="text-reset"
                  style="text-decoration: none"
                  >Tentang Kami</a
                >
              </p>
              <p>
                <a
                  href="/about"
                  class="text-reset"
                  style="text-decoration: none"
                  >Visi dan Misi</a
                >
              </p>
              <p>
                <a
                  href="/program"
                  class="text-reset"
                  style="text-decoration: none"
                  >Program</a
                >
              </p>
            </div>
            <!-- Grid column -->

            <!-- Grid column -->
            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <!-- Links -->
              <h6 class="fw-bold mb-4">Lokasi</h6>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.453716913459!2d107.27917201434178!3d-6.335224363748609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e699d8f19c10e4d%3A0x259b85f3e7dc34e0!2sTK%20Bintang%20Pertiwi!5e0!3m2!1sen!2sid!4v1643998169970!5m2!1sen!2sid"
                width="300"
                height="200"
                style="border: 0; border-radius: 20px"
                allowfullscreen=""
                loading="lazy"
              ></iframe>

              <p>
                Perumahan Bumi Teluk Jambe blok C no. 285, Ds, Sukaluyu, East
                Telukjambe, Karawang Regency, West Java 41361
              </p>
            </div>
            <!-- Grid column -->
          </div>
          <!-- Grid row -->
        </div>
      </section>

      <!-- Section: Links  -->
      <!-- Copyright -->
      <div class="text-center p-4 text-light" style="background-color: #016292">
        © 2022 Copyright:
        <a
          class="text-reset fw-bold"
          href="https://syahidanas.site"
          style="text-decoration: none"
          >TK Bintang Pertiwi</a
        >
      </div>
      <!-- Copyright -->
    </footer>
    <!-- Footer -->

    <a v-show="scY > 300" class="float bounce-4" @click="toTop">
      <img
        class="my-3"
        src="~/assets/images/up-chevron.png"
        alt="gallery"
        style="width: 25px"
      />
    </a>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      scTimer: 0,
      scY: 0,
      items: [
        {
          title: 'Beranda',
          to: '/',
          class: '',
        },
        {
          title: 'Tentang Kami',
          to: '/about',
          class: '',
        },
        {
          title: 'Program',
          to: '/program',
          class: '',
        },
      ],
    }
  },
  computed: {},
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
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
a {
  font-family: 'Montserrat Alternates', sans-serif;
}
#main {
  display: flex;
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
</style>
