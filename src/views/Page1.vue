<template>
  <div>
    <Calendar
      v-if="showTimePicker"
      :defaultTime="defaultTime"
      @closePicker="closePicker"
    ></Calendar>
  </div>
</template>
<script>
import Calendar from "../components/Calendar.vue";
export default {
  components: {
    Calendar,
  },
  data() {
    return {
      showTimePicker: true,
      defaultTime: "",
      time: "",
    };
  },
  methods: {
    closePicker(params) {
      if (params) {
        let { date } = params;
        this.time = `${date.year}-${date.month}-${date.day}`;
        console.log(date);
      }
      this.showTimePicker = false;
    },
  },
};
</script>
<style lang="scss" scoped>
</style>