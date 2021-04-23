<template>
  <form @submit="onSubmit">
    <slot />
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useForm } from 'vee-validate'

export default defineComponent({
  name: 'BaseForm',
  props: {
    method: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    const { handleSubmit, setFieldError } = useForm()

    const onSubmit = handleSubmit(async () => {
      if (props.method) {
        try {
          await props.method()
        } catch (err) {
          if (!err.errors) {
            throw err
          }
          Object.keys(err.errors).forEach((field) => {
            const error = err.errors[field][0]

            setFieldError(field, error || 'Input is not correct')
          })
        }
      }
    })

    return {
      onSubmit
    }
  }
})
</script>
