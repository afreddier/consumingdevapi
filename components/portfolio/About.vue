<template>
  <div class="about overflow-hidden mb-20">
    <h2 class="mb-8 text-center text-3xl">{{ $t('about.name') }}</h2>
    <div class="about-card">
      <div class="about-card--right">
        <img src="@/assets/alfre2.jpg" alt="ME" />
      </div>
      <div class="about-card--left">
        <div class="left__content">
          <h3>{{ $t('about.historia') }}</h3>
          <p>{{ $t('about.historia_p1') }}</p>
          <p>{{ $t('about.historia_p2') }}</p>
          <i18n path="about.historia_p3" tag="p">
            <template #estreamercoders>
              <a
                rel="noopener noreferrer"
                href="https://discord.gg/mucYjqJ"
                target="_blank"
                aria-label="discord link"
              >
                #EStreamerCoders
              </a>
            </template>
          </i18n>
          <h3>{{ $t('about.frase') }}</h3>
          <p>
            <!-- <em>
              “ Coding is easy, logically coding is what makes it special
            </em> -->
          </p>
          <p>
            {{ $t('about.frase_explicacion') }}
          </p>
          <!-- <h3>{{ $t('about.habilidades') }}</h3> -->
          <h3>{{ $tc('about.habilidades', 3) }}</h3>
        </div>
      </div>
      <Skills />
    </div>
  </div>
</template>

<script>
import Skills from '@/components/portfolio/help/Skills.vue'
export default {
  components: {
    Skills
  }
}
</script>

<style lang="scss" scoped>
.about {
  &-card {
    @apply relative pb-6 bg-primary-dark;
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
    grid-template-columns: 0.2fr 1.8fr;

    &--right {
      @apply p-16 transition-all duration-700 bg-gray-400;
      border-top-left-radius: 1rem;
      border-bottom-left-radius: 1rem;
      img {
        @apply w-40 rounded-full mx-auto;
      }
    }

    &--left {
      @apply p-4 relative z-10;

      h3 {
        @apply text-lg text-on_surface_color uppercase;
      }

      p {
        @apply text-lg mb-4;
      }
    }

    &::after {
      content: '';
      @apply w-0 h-0 absolute bottom-0 right-0 z-0;
      border-bottom: 10rem solid $primary-color;
      border-left: 5rem solid transparent;
    }

    @media screen and (min-width: 768px) {
      @apply pb-8;

      &--right {
        @apply absolute w-2/6 right-0 p-4;
      }

      &--left {
        @apply w-4/6 p-8;
      }
    }

    @media screen and (min-width: 1024px) {
      &--right {
        @apply w-3/12;
      }
    }

    &.active {
      > img {
        width: 50px;
        height: 50px;
      }
    }

    &.inactive {
      > img {
        width: 0;
        height: 0;
        left: calc(50%);
      }

      .about-card--right {
        transform: translateX(90%);
      }
    }
  }
}
</style>
