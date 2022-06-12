<template>
  <div class="platform-rules">
    <b-container>
      <h1 class="platform-rules__title">
        {{ $t('agreement.title') }}
      </h1>
      <ol>
        <li>{{ $t('agreement.paragraph.first') }}</li>
        <li>{{ $t('agreement.paragraph.second') }}</li>
        <li>{{ $t('agreement.paragraph.third') }}</li>
      </ol>
    </b-container>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.platform-rules {
  padding: 3rem 0;
}
</style>
