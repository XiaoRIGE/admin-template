<template>
  <v-row class="py-12" justify="space-around">
    <v-btn color="primary">With ripple (default)</v-btn>
    <v-btn :ripple="false" color="primary">Without ripple</v-btn>
    <v-btn :ripple="{ center: true }" color="primary">
      With centered ripple
    </v-btn>
    <v-btn :ripple="{ class: 'red--text' }" text>With red ripple</v-btn>
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      chip1: true,
      chip2: true,
      chip3: true,
      chip4: true,
    }
  },
}
</script>
<style lang="scss" scoped>
:deep(.v-chip.v-chip--outlined.v-chip.v-chip) {
  background: #e9f6ea;
}
</style>
