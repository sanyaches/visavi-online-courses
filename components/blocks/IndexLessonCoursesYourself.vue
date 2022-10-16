<template>
  <div id="main-lesson-courses-myself" class="index-lesson-courses course-lessons">
    <b-container>
      <div class="index-courses__header">
        <h2 class="course-lessons__title">
          {{ $t('index.lesson_courses_yourself_title') }}
        </h2>
      </div>
      <div class="course-lessons__list">
        <div
          v-for="course in list"
          :key="course.name"
          class="course-lessons__list-item"
        >
          <single-lesson-course-card-main :lesson-course="course" />
          <div class="course-lessons__line-alternative" />
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'IndexCoursesYourself',

  props: {
    list: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.course-lessons {
  padding: 4rem 0;
  position: relative;

  @media screen and (max-width: 991px) {
    padding: 1.5rem 0;
  }

  &__title {
    text-transform: uppercase;
    font-family: 'Cormorant SC', serif;
    font-weight: 700;
    font-size: 2.5rem;

    @media screen and (max-width: 991px) {
      font-size: 2.2rem;
      text-align: center;
    }

    @media screen and (max-width: 480px) {
      font-size: 1.6rem;
    }
  }

  &__list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    flex-wrap: wrap;
    margin-top: 2rem;
    column-gap: 3rem;
    row-gap: 350px;
    margin-bottom: 300px;

    @media screen and (max-width: 991px) {
      display: block;
      margin-bottom: 0;
    }
  }

  &__list-item {
    z-index: 2;

    &:nth-child(3n-2) {
      .course-lessons__line-alternative {
        display: block;

        @media screen and (max-width: 991px) {
          display: none;
        }
      }
    }

    @media screen and (max-width: 991px) {
      &:not(:last-child) {
        margin-bottom: 2rem;
      }
    }

    @media screen and (max-width: 480px) {
      &:not(:last-child) {
        margin-bottom: 1rem;
      }
    }
  }

  &__line-alternative {
    position: absolute;
    z-index: 1;
    left: 0;
    display: none;
    height: 300px;
    width: 100%;
    background-color: #b6a498;
  }
}
</style>
