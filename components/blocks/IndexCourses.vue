<template>
  <div id="main-courses" class="index-courses">
    <b-container>
      <div class="index-courses__header">
        <h2 class="index-courses__title">
          {{ $t('index.courses_title') }}
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
  name: 'IndexCourses',

  props: {
    list: {
      type: Array,
      required: true
    }
  }
}
</script>
