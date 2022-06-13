<template>
  <div class="privacy-policy">
    <b-container>
      <h1 class="privacy-policy__title">
        {{ $t('privacy_policy.title') }}
      </h1>
      <ol>
        <li>{{ $t('privacy_policy.paragraph.first') }}</li>
        <li>{{ $t('privacy_policy.paragraph.second') }}</li>
        <li>{{ $t('privacy_policy.paragraph.third') }}</li>
        <li>{{ $t('privacy_policy.paragraph.fourth') }}</li>
        <li>{{ $t('privacy_policy.paragraph.fifth') }}</li>
        <li>{{ $t('privacy_policy.paragraph.sixth') }}</li>
        <li>{{ $t('privacy_policy.paragraph.seventh') }}</li>
        <li>{{ $t('privacy_policy.paragraph.eighth') }}</li>
      </ol>
    </b-container>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.privacy-policy {
  padding: 3rem 0;
}
</style>
