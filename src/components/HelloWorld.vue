

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <p v-if="isVisible">This paragraph is visible only if `isVisible` is true.</p>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isVisible: true 
    }
  }
}

</script>
