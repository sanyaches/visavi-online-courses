<template>
  <div id="main-courses-yourself" class="index-courses">
    <b-container>
      <div class="index-courses__header">
        <h2 class="index-courses__title">
          {{ $t('index.courses_yourself_title') }}
        </h2>
      </div>
      <div class="index-courses__list">
        <div v-for="course in list" :key="course.name" class="index-courses__list-item">
          <course-card-main :course="course" />
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
